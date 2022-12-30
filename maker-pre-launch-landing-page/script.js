const forms = document.querySelector('#forms');
const email = document.querySelector('#email');

forms.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const emailValue = email.value;

    if (emailValue === "") {
        email.focus();
        setErrorFor(email, "Oops! That doesn’t look like an email address");
    } else if (!checkEmail(emailValue)) {
        email.focus();
        setErrorFor(email, "Oops! That doesn’t look like an email address")
    } else {
        console.log("sucesso")
        setSuccessFor(email);
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('.small-error');
        formControl.className = "form-control error";
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }


    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
}