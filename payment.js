var classArray = classArray;
// var stripe = Stripe("pk_test_txUHW0roiaw7rDEneBF5IgCB");
var stripe = Stripe('pk_live_IiyzcOmj7fIv5anZ0W1Ukyie');
var elements = stripe.elements();
var serverBaseUrl = "https://siliconvalleyyouth-current.herokuapp.com";
var id;
var data;
var basePrice = 0;
var appliedCouponValue = 0;
var couponCheckTimeout;

document.addEventListener("DOMContentLoaded", function (event) {
    createElements();
    formHandler();
    id = getParam("id")
    getData(id)
    bindCouponField()
});
function getParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    console.log("payment.getParam: results="+results);
    if (results==null){
       return null;
    }
    else{
        final_result = decodeURI(results[1]) || 0;
        console.log("payment.getParam: final_result="+final_result);
        return final_result;
    }
}
// Custom styling can be passed to options when creating an Element.
var style = {
    base: {
        // Add your base input styles here. For example:
        fontSize: '16px',
        color: "#32325d",
    }
};
function getData(id) {
    $.ajax({
        type: "GET",
        contentType: 'application/json',
        url : serverBaseUrl + "/class2026spring?id="+id,
        // Don't forget to change url to match teaching semester ^
        // url : "http://localhost:3000/class2026spring?id="+id,
        dataType: "json",
        success: function(res) {
            console.log("success")
            createForm(res);
        },
        error: function(err) {
            console.log(err);
        }
    })
    //sendEmail()
}
function createForm(res) {
    var raw_data = res["data"]
    // var data = raw_data[0]
    var data = JSON.parse(raw_data);
    console.log(data)
    var className = data["classname"]
    var numClasses = data["numberclasses"]
    console.log("createForm:+"+className+",numClasses="+numClasses)
    basePrice = Number(numClasses) * 10;
    updateCostDisplay();
    $("#classTitle").text("Payment for "+ className + " at " + data["location"] + " on " + data["time"])
    $("#className").setAttribute('value', className);
    //sendEmail()
}

var card = elements.create('card', { style: style });
card.addEventListener('change', function (event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});

function formHandler() {
    var form = document.getElementById('payment-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        stripe.createToken(card).then(function (result) {
            if (result.error) {
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                stripeTokenHandler(result.token);
            }
        });
    });
    //sendEmail()
}

function stripeTokenHandler(token) {
    console.log("--- in github stripe");
    console.log(token);
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);
    $.ajax({
        url: $('#payment-form').attr('action')+ "?id="+id,
        // url: "http://localhost:3000/payment?id="+id,
        type: 'POST',
        data: $('#payment-form').serialize(),
        success: function (response) {
            console.log("got response from server")
            console.log(response);
            if (response === "Success") {
                writeThankYou()
                // sendEmail()
            }
            if (response == "Failed") {
                alert("Payment failed, please check your credit card credentials or try again later.")
            }
            if (response == "CouponInvalid") {
                alert("Coupon expired or invalid. Please try another coupon.")
            }
        }
    });
    return false;
}
function createElements() {
    card.mount('#card-element');
}
function writeThankYou() {
    $("#thankyoubody").fadeIn();
    $("#paymentbody").hide();
    $("#classname2").html(data["classname"]);
}

function updateCostDisplay() {
    var finalPrice = Math.max(basePrice - appliedCouponValue, 0);
    if (appliedCouponValue > 0) {
        $("#costDisplay").text("Final Cost: $" + finalPrice);
        $("#couponCalculation").text("Calculation: $" + basePrice + " - $" + appliedCouponValue + " = $" + finalPrice);
    } else {
        $("#costDisplay").text("Cost: $" + basePrice);
        $("#couponCalculation").text("");
    }
}

function setCouponStatus(message, isValid) {
    var status = $("#couponStatus");
    status.text(message);
    if (message) {
        status.css("color", isValid ? "green" : "red");
    }
}

function checkCoupon(code) {
    if (!code) {
        appliedCouponValue = 0;
        setCouponStatus("", false);
        updateCostDisplay();
        return;
    }
    var studentEmail = $("#studentEmail").val().trim();
    $.ajax({
        type: "GET",
        contentType: 'application/json',
        url : serverBaseUrl + "/checkCoupon?code=" + encodeURIComponent(code) + "&studentEmail=" + encodeURIComponent(studentEmail),
        dataType: "json",
        success: function(res) {
            if (res && res.valid) {
                appliedCouponValue = Number(res.value) || 0;
                setCouponStatus("Coupon applied: -$" + appliedCouponValue, true);
            } else {
                appliedCouponValue = 0;
                if (res && res.reason === "student_used") {
                    setCouponStatus("This student already used a coupon.", false);
                } else {
                    setCouponStatus("Coupon expired or invalid.", false);
                }
            }
            updateCostDisplay();
        },
        error: function(err) {
            console.log(err);
            appliedCouponValue = 0;
            setCouponStatus("Unable to validate coupon right now.", false);
            updateCostDisplay();
        }
    })
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
    if (studentEmailInput.length) {
        studentEmailInput.on("input", function () {
            var code = couponInput.val().trim();
            if (code) {
                if (couponCheckTimeout) {
                    clearTimeout(couponCheckTimeout);
                }
                couponCheckTimeout = setTimeout(function () {
                    checkCoupon(code);
                }, 400);
            }
        });
    }
}
