const form = document.querySelector("#form");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const emailValue = email.value;

    if (emailValue === "") {
        setErrorFor("Empty Field");
    } else if (!checkEmail(emailValue)) {
        setErrorFor("Invalid email address")
    } else {
        setSuccessFor();
    }
}

function setErrorFor(message) {
    const formControl = document.querySelector(".form-control");
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor() {
    const formControl = document.querySelector(".form-control");
    formControl.className = "form-control success";
}

// REGEX
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

