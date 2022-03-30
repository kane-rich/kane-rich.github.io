const open = document.getElementById('contact-form');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.onclick = function() {
    modal_container.style.display = "block";
}

close.onclick = function() {
    modal_container.style.display = "none";
}
// Make required fields needing validation

// If form submit button is filled in without any input into fields, ask for input.

// When forms have input, allow submit button press.

// Close the modal when submit button pressed.

