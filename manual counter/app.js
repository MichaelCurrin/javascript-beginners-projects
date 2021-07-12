//initiale value of the count
let count = 0;
//html elements
const countValue = document.querySelector(".value"),
      btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        let [btnClass] = e.target.classList;
        
        switch(btnClass) {
            case "decrease":
                count--
                break;
            case "increase":
                count++
                break;
            case "reset":
                count = 0
                break;
        };
        checkCounterValue(countValue, count)
        countValue.textContent = count
    })
})

function checkCounterValue(element, value) {
    if(value > 0) return element.style.color = "green";
    if(value < 0) return element.style.color = "red";
    if(value == 0) return element.style.color = "black";
}