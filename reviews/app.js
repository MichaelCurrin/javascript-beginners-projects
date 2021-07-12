// the function that will select elements
function select(element, type = false) {
    if (type) {
        return document.querySelectorAll(element);
    }
    return document.querySelector(element);
}

// reviews
let reviews = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Charaf Marghin",
        job: "web developer",
        review: "Hi, I'm a web developer and I love programming and just ignore this because it has nothing at all",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Albert Blabla",
        job: "web designer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente et quas minima, expedita atque tempora veritatis do fhhf fcfgx dhzedhzxd ssh fsdxf s fhdhf"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Jane Beauty",
        job: "designer",
        review: "Lorem ipsum do frhyr cvdfhv cv h fe ef dem id minus sequi modi quasi, ab nostrum repellat officia impedit sint. Dignissimos.",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name: "Girl From Net",
        job: "Model",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente et quas minima, expedita atque tempora veritatis dolorem id minus sequehge xferfgey vdds hxch xh edgxehi modi quasi, ab nostrum repellat officia impedit sint. Dignissimos.",
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
        name: "Sara Mail",
        job: "Photographer",
        review: "Lorem ipsum doloequi modi quasi, ab nostrum repellat officia impedit sint. Dignissimos.",
    }
];

//select elements
let image = select("#avatar"),
    author = select(".name"),
    job = select(".job"),
    review = select(".review"),
    buttons = select(".btn", true),
    currentReview = 0;

// funcions
window.addEventListener("DOMContentLoaded", function () {
    userReview();
});

function userReview() {
    let content = reviews[currentReview];

    image.src = content.img;
    author.textContent = content.name;
    job.textContent = content.job;
    review.textContent = content.review;
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-right")) {
            currentReview++;
            if(currentReview > reviews.length - 1) {
                currentReview = 0
            }
            userReview();
        } else {
            currentReview--;
            if(currentReview < 0) {
                currentReview = reviews.length - 1;
            }
            userReview()
        }
    });
});
