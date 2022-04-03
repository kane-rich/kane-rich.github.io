const open = document.getElementById('contact-form');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.onclick = function() {
    modal_container.style.display = "block";
}

close.onclick = function() {
    modal_container.style.display = "none";
}
