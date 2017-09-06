"use strict";

var submitButton = document.getElementById('submitButton'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    age = document.getElementById('age');

function isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    }
}

function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className)
    }
}

function validateTheForm() {
    // do something to validate the form
}
