const colorName = document.querySelector(".color"),
    changeBtn = document.querySelector(".change")

function flipColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let color = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = color;
    colorName.textContent = color
}
changeBtn.addEventListener("click", flipColor)
