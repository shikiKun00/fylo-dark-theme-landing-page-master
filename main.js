const container = document.querySelector(".container");

const navbar = container.querySelector("navbar");

const usrInp = container.querySelector(".user-input");
const userInput = usrInp.querySelector(".input-user");
const submitBtn = usrInp.querySelector("button");
const msg = usrInp.querySelector(".msg");

window.addEventListener("load", () => {
    container.style.paddingTop = navbar.clientHeight + "px";
});

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    if (userInput.value != "" && userInput.checkValidity()) {
        msg.style.display = "none";
    } else {
        msg.style.display = "block";
    }
});

console.log(msg);
