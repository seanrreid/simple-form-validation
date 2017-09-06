var submitButton = document.getElementById('submitButton'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    age = document.getElementById('age');

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
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

