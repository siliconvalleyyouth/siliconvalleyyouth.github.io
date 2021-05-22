var classArray = classArray;
// var stripe = Stripe("pk_test_txUHW0roiaw7rDEneBF5IgCB");
var stripe = Stripe('pk_live_IiyzcOmj7fIv5anZ0W1Ukyie');
var elements = stripe.elements();
var id;
var data;

document.addEventListener("DOMContentLoaded", function (event) {
    createElements();
    formHandler();
    id = getParam("id")
    getData(id)
});
function getParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
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
        url : "https://siliconvalleyyouth.herokuapp.com/class2021summer?id="+id,
        // Don't forget to change url to match teaching semester ^
        // url : "http://localhost:3000/class2020spring?id="+id,
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
    data = res["data"]
    console.log(data)
    var className = data["classname"]
    var numClasses = data["numberclasses"]
    console.log(className)
    console.log(numClasses)
    $("#costDisplay").text("$"+numClasses*10)
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


