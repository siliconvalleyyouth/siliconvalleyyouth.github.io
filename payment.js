var classArray = classArray;
var svyConfig = window.SVY_CONFIG || {};
var activeSemester = svyConfig.activeSemester || { year: "2026", term: "fall", classPrice: 15 };
var serverBaseUrl = svyConfig.backendBaseUrl || "https://siliconvalleyyouth.herokuapp.com";
var id;
var year;
var term;
var data;
var basePrice = 0;
var appliedCouponValue = 0;
var couponCheckTimeout;
var paypalButtons = null;
var paypalReady = false;

document.addEventListener("DOMContentLoaded", function () {
    id = getParam("id") || getParamFromReferrer("id");
    year = getParam("year") || getParamFromReferrer("year") || activeSemester.year;
    term = (getParam("term") || getParamFromReferrer("term") || activeSemester.term || "").toLowerCase();
    $("#payment-form").attr("action", serverBaseUrl + "/api/payment/" + year + "/" + term);
    bindFormSubmit();
    bindCouponField();
    loadPayPal();
    if (!id) {
        $("#classTitle").text("You have not selected a class. Please open payment from a class page (the link must include ?id=...).");
        return;
    }
    // Keep the selected class in the URL if we recovered it from the referrer.
    if (!getParam("id")) {
        try {
            var nextUrl = new URL(window.location.href);
            nextUrl.searchParams.set("year", year);
            nextUrl.searchParams.set("term", term);
            nextUrl.searchParams.set("id", id);
            window.history.replaceState({}, "", nextUrl.toString());
        } catch (error) {
            // Ignore history API failures.
        }
    }
    getData(id);
});

function getParam(name) {
    try {
        var params = new URLSearchParams(window.location.search);
        var value = params.get(name);
        if (value != null && value !== "") {
            return value;
        }
    } catch (error) {
        // Fallback for older browsers.
    }
    var results = new RegExp("[\\?&]" + name + "=([^&#]*)").exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURIComponent(results[1].replace(/\+/g, " ")) || null;
}

function getParamFromReferrer(name) {
    if (!document.referrer) {
        return null;
    }
    try {
        var referrerUrl = new URL(document.referrer);
        var value = referrerUrl.searchParams.get(name);
        if (value != null && value !== "") {
            return value;
        }
    } catch (error) {
        // Ignore malformed referrers.
    }
    var results = new RegExp("[\\?&]" + name + "=([^&#]*)").exec(document.referrer);
    if (results == null) {
        return null;
    }
    return decodeURIComponent(results[1].replace(/\+/g, " ")) || null;
}

function getData(classId) {
    $.ajax({
        type: "GET",
        url: serverBaseUrl + "/api/classes/" + year + "/" + term + "/" + encodeURIComponent(classId),
        dataType: "json",
        success: function (res) {
            try {
                createForm(res);
            } catch (error) {
                console.log(error);
                $("#classTitle").text("Could not load class details for \"" + classId + "\". Please go back and try again.");
            }
        },
        error: function (err) {
            console.log(err);
            $("#classTitle").text("Could not load class \"" + classId + "\" for " + year + " " + term + ". Please go back to the class page and use the signup link again.");
        }
    });
}

function createForm(res) {
    var raw_data = res["data"];
    data = typeof raw_data === "string" ? JSON.parse(raw_data) : raw_data;
    var className = data["classname"];
    var numClasses = data["numberclasses"];
    var classPrice = Number(res.classPrice || activeSemester.classPrice || 15);
    basePrice = Number(numClasses) * classPrice;
    $("#classTitle").text("Payment for " + className + " at " + data["location"] + " on " + data["time"]);
    $("#className").attr("value", className);
    $("#classcost").text("The total class cost is calculated by multiplying the total number of sessions by $" + classPrice + " per session. Students are charged prior to the first session to secure their position. If you are in any way dissatisfied with the class, you can email svyfinance@gmail.com for a full refund within 3 days after the first session.");
    updateCostDisplay();
    renderPayPalButtons();
}

function getFormPayload() {
    return {
        parentName: $("#parentName").val(),
        parentEmail: $("#parentEmail").val(),
        parentWeChat: $("#parentWeChat").val(),
        parentPhone: $("#parentPhone").val(),
        studentName: $("#studentName").val(),
        studentEmail: $("#studentEmail").val(),
        studentGrade: $("#studentGrade").val(),
        studentSchool: $("#studentSchool").val(),
        hearFrom: $("#hearFrom").val(),
        couponCode: ($("#couponCode").val() || "").trim(),
        className: $("#className").val()
    };
}

function validateRequiredFields() {
    var form = document.getElementById("payment-form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }
    return true;
}

function getFinalPrice() {
    return Math.max(basePrice - appliedCouponValue, 0);
}

function bindFormSubmit() {
    var form = document.getElementById("payment-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!validateRequiredFields()) {
            return;
        }
        if (getFinalPrice() > 0) {
            alert("Please use the PayPal button to complete payment.");
            return;
        }
        submitFreeRegistration();
    });
}

function submitFreeRegistration() {
    $.ajax({
        url: $("#payment-form").attr("action") + "?id=" + id,
        type: "POST",
        data: $("#payment-form").serialize(),
        dataType: "json",
        success: function (response) {
            if (response && response.status === "Success") {
                writeThankYou(response.siblingCoupon);
                return;
            }
            if (response === "Success") {
                writeThankYou();
                return;
            }
            if ((response && response.status === "CouponInvalid") || response === "CouponInvalid") {
                alert("Coupon expired or invalid. Please try another coupon.");
                return;
            }
            alert("Registration failed. Please try again later.");
        },
        error: function (xhr) {
            if (xhr && (xhr.responseText === "RegistrationClosed" || (xhr.responseJSON && xhr.responseJSON.status === "RegistrationClosed"))) {
                alert("Registration is currently closed for this semester.");
            } else if (xhr && xhr.responseJSON && xhr.responseJSON.status === "CouponInvalid") {
                alert("Coupon expired or invalid. Please try another coupon.");
            } else {
                alert("Registration failed before it could be processed. Please try again later.");
            }
        }
    });
}

function loadPayPal() {
    $.ajax({
        type: "GET",
        url: serverBaseUrl + "/api/paypal/config",
        dataType: "json",
        success: function (config) {
            if (!config || !config.configured || !config.clientId) {
                $("#paypal-status").text("PayPal is not configured on the server yet.");
                return;
            }
            var script = document.createElement("script");
            script.src = "https://www.paypal.com/sdk/js?client-id=" + encodeURIComponent(config.clientId) + "&currency=USD&intent=capture";
            script.onload = function () {
                paypalReady = true;
                renderPayPalButtons();
            };
            script.onerror = function () {
                $("#paypal-status").text("Unable to load PayPal. Please refresh and try again.");
            };
            document.head.appendChild(script);
        },
        error: function () {
            $("#paypal-status").text("Unable to load PayPal configuration.");
        }
    });
}

function renderPayPalButtons() {
    if (!paypalReady || typeof paypal === "undefined" || !data) {
        return;
    }
    var container = document.getElementById("paypal-button-container");
    if (!container) {
        return;
    }
    container.innerHTML = "";
    if (getFinalPrice() <= 0) {
        $("#paypal-button-container").hide();
        $("#submitpayment").show();
        $("#paypal-status").text("No payment due. Click Complete Registration.");
        return;
    }
    $("#paypal-button-container").show();
    $("#submitpayment").hide();
    $("#paypal-status").text("");

    if (paypalButtons && typeof paypalButtons.close === "function") {
        paypalButtons.close();
    }

    paypalButtons = paypal.Buttons({
        style: {
            layout: "vertical",
            color: "gold",
            shape: "rect",
            label: "pay"
        },
        onClick: function (data, actions) {
            if (!validateRequiredFields()) {
                return actions.reject();
            }
            return actions.resolve();
        },
        createOrder: function () {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: serverBaseUrl + "/api/paypal/create-order/" + year + "/" + term + "?id=" + encodeURIComponent(id),
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(getFormPayload())
                }).done(function (res) {
                    if (!res || !res.id) {
                        reject(new Error("Missing PayPal order id"));
                        return;
                    }
                    resolve(res.id);
                }).fail(function (xhr) {
                    var errorCode = xhr && xhr.responseJSON && xhr.responseJSON.error;
                    if (errorCode === "CouponInvalid") {
                        alert("Coupon expired or invalid. Please try another coupon.");
                    } else if (errorCode === "RegistrationClosed" || (xhr && xhr.responseText === "RegistrationClosed")) {
                        alert("Registration is currently closed for this semester.");
                    } else if (errorCode === "PayPalNotConfigured") {
                        alert("PayPal is not configured on the server yet.");
                    } else {
                        alert("Unable to start PayPal checkout. Please try again.");
                    }
                    reject(new Error(errorCode || "CreateOrderFailed"));
                });
            });
        },
        onApprove: function (data) {
            return new Promise(function (resolve, reject) {
                var payload = getFormPayload();
                payload.orderID = data.orderID;
                $.ajax({
                    url: serverBaseUrl + "/api/paypal/capture-order/" + year + "/" + term + "?id=" + encodeURIComponent(id),
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(payload)
                }).done(function (res) {
                    if (res && res.status === "Success") {
                        writeThankYou(res.siblingCoupon);
                        resolve();
                        return;
                    }
                    alert("Payment capture failed. Please contact svyouth1@gmail.com if you were charged.");
                    reject(new Error((res && res.error) || "Capture failed"));
                }).fail(function (xhr) {
                    var errorCode = xhr && xhr.responseJSON && xhr.responseJSON.error;
                    if (errorCode === "CouponInvalid") {
                        alert("Coupon expired or invalid. Please try another coupon.");
                    } else {
                        alert("Payment capture failed. Please contact svyouth1@gmail.com if you were charged.");
                    }
                    reject(new Error(errorCode || "CaptureFailed"));
                });
            });
        },
        onError: function (err) {
            console.log(err);
            alert("PayPal payment failed. Please try again.");
        }
    });

    paypalButtons.render("#paypal-button-container").catch(function (err) {
        console.log(err);
        $("#paypal-status").text("Unable to show PayPal buttons. Please refresh the page.");
    });
}

function writeThankYou(siblingCoupon) {
    $("#thankyoubody").fadeIn();
    $("#paymentbody").hide();
    $("#classname2").html(data["classname"]);
    if (siblingCoupon && siblingCoupon.code) {
        $("#siblingCouponCode").text(siblingCoupon.code);
        $("#siblingCouponPercent").text(siblingCoupon.percentOff || 50);
        $("#siblingCouponBox").show();
    } else {
        $("#siblingCouponBox").hide();
    }
}

function updateCostDisplay() {
    var finalPrice = getFinalPrice();
    if (appliedCouponValue > 0) {
        $("#costDisplay").text("Final Cost: $" + finalPrice);
        $("#couponCalculation").text("Calculation: $" + basePrice + " - $" + appliedCouponValue + " = $" + finalPrice);
    } else {
        $("#costDisplay").text("Cost: $" + basePrice);
        $("#couponCalculation").text("");
    }
    renderPayPalButtons();
}

function setCouponStatus(message, isValid) {
    var status = $("#couponStatus");
    status.text(message);
    if (message) {
        status.css("color", isValid ? "green" : "red");
    }
}

function couponFailureMessage(reason) {
    if (reason === "student_used") {
        return "This student already used a coupon.";
    }
    if (reason === "sibling_parent_mismatch") {
        return "This sibling coupon only works with the same parent name used for the first registration.";
    }
    if (reason === "not_configured") {
        return "Coupons are not available for this semester yet.";
    }
    if (reason === "error") {
        return "Unable to validate coupon right now.";
    }
    return "Coupon expired or invalid.";
}

function checkCoupon(code) {
    if (!code) {
        appliedCouponValue = 0;
        setCouponStatus("", false);
        updateCostDisplay();
        return;
    }
    var studentEmail = $("#studentEmail").val().trim();
    var parentName = $("#parentName").val().trim();
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: serverBaseUrl + "/api/check-coupon/" + year + "/" + term +
            "?code=" + encodeURIComponent(code) +
            "&studentEmail=" + encodeURIComponent(studentEmail) +
            "&parentName=" + encodeURIComponent(parentName) +
            "&price=" + encodeURIComponent(basePrice || 0),
        dataType: "json",
        success: function (res) {
            if (res && res.valid) {
                if (res.percentOff) {
                    appliedCouponValue = Math.round((basePrice || 0) * (Number(res.percentOff) / 100));
                    setCouponStatus("Coupon applied: " + res.percentOff + "% off (-$" + appliedCouponValue + ")", true);
                } else {
                    appliedCouponValue = Number(res.value) || 0;
                    setCouponStatus("Coupon applied: -$" + appliedCouponValue, true);
                }
            } else {
                appliedCouponValue = 0;
                setCouponStatus(couponFailureMessage(res && res.reason), false);
            }
            updateCostDisplay();
        },
        error: function (err) {
            console.log(err);
            appliedCouponValue = 0;
            var reason = err && err.responseJSON && err.responseJSON.reason;
            setCouponStatus(couponFailureMessage(reason || "error"), false);
            updateCostDisplay();
        }
    });
}

function bindCouponField() {
    var couponInput = $("#couponCode");
    var studentEmailInput = $("#studentEmail");
    if (!couponInput.length) {
        return;
    }
    couponInput.on("input", function () {
        var code = $(this).val().trim();
        if (couponCheckTimeout) {
            clearTimeout(couponCheckTimeout);
        }
        if (!code) {
            appliedCouponValue = 0;
            setCouponStatus("", false);
            updateCostDisplay();
            return;
        }
        couponCheckTimeout = setTimeout(function () {
            checkCoupon(code);
        }, 400);
    });
    function recheckCouponFromRelatedField() {
        var code = couponInput.val().trim();
        if (!code) {
            return;
        }
        if (couponCheckTimeout) {
            clearTimeout(couponCheckTimeout);
        }
        couponCheckTimeout = setTimeout(function () {
            checkCoupon(code);
        }, 400);
    }
    if (studentEmailInput.length) {
        studentEmailInput.on("input", recheckCouponFromRelatedField);
    }
    $("#parentName").on("input", recheckCouponFromRelatedField);
}
