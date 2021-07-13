let button = document.querySelector(".see-more"),
    overlay = document.querySelector(".overlay"),
    removePopup = document.querySelector(".remove");

button.addEventListener("click", function(){
    overlay.classList.add("opened")
})
function removeMessage() {
    overlay.classList.remove("opened")
}

overlay.addEventListener("click", removeMessage)
removePopup.addEventListener("click", removeMessage)
