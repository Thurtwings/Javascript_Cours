


var add_button = document.querySelector("#add_button");
var valid_button = document.querySelector("#validate_button");
var back_button = document.querySelector(".back_button");

var fullName = document.querySelector("#details_name");
var phoneNumber = document.querySelector("#details_phone");
var emailAdress = document.querySelector("#details_email");
var contactList = document.querySelector("#contacts_list");



var Contacts = [];

add_button.onclick = function () {
    GoLeft()
};

valid_button.onclick = function () {
    GoRight(),
    FillTheDetails(),
    EmptyTheseFields()
};

back_button.onclick = function () {
    GoMiddle()
};

function GoLeft() {
    $("#all_screens").animate({ left: "0%" }, { duration: 500 });
}

function GoMiddle() {
    $("#all_screens").animate({ left: "-100%" }, { duration: 500 });
}

function GoRight() {
    $("#all_screens").animate({ left: "-200%" }, { duration: 500 });
}
function EmptyTheseFields() {
    document.getElementById("name_field").value = "";
    document.getElementById("surname_field").value = "";
    document.getElementById("phone_field").value = "";
    document.getElementById("email_field").value = "";
}

function FillTheDetails() {

    $(fullName).html(document.getElementById("name_field").value + " " + document.getElementById("surname_field").value)
    $(phoneNumber).html(document.getElementById("phone_field").value)
    $(emailAdress).html(document.getElementById("email_field").value)
    contactList.innerHTML += "<li>" + document.getElementById("name_field").value + " " + document.getElementById("surname_field").value + "</li><br>";

}




