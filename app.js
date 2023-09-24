const input = document.querySelector("#task");
const btn = document.querySelector("#btn");
const ul = document.querySelector("ul");
const listItem = document.querySelector(".list-container");

btn.addEventListener("click", function () {
    if(input.value == ''){
        alert("You must write something !")
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        ul.appendChild(li);
        gsap.from("li", {
            opacity: 0,
            x: -30,
            duration: .2,
            ease: "Expo.easeInOut"
        })
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }

    input.value = '';
    saveData();
})

listItem.addEventListener("click", function(details) {
    if(details.target.nodeName === "LI") {
        details.target.classList.toggle("checked");
        saveData();
    } else if(details.target.nodeName === "SPAN"){
        details.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", ul.innerHTML);
}

function showData() {
    ul.innerHTML = localStorage.getItem("data");
}

showData();