const usrInp = document.querySelector(".user-input");
const userInput = usrInp.querySelector(".input-user");
const submitBtn = usrInp.querySelector("button");
const msg = usrInp.querySelector(".msg");

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    if (userInput.value != "" && userInput.checkValidity()) {
        msg.style.display = "none";
    } else {
        msg.style.display = "block";
    }
});

console.log(msg);
