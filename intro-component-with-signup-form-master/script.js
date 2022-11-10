const form = document.querySelector('#form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if (firstnameValue === "") {
        setErrorFor(firstname, /*"Empty Field"*/);
    } else {
        setSuccessFor(firstname);
    }

    if (lastnameValue === "") {
        setErrorFor(lastname, /*"Empty Field"*/);
    } else {
        setSuccessFor(lastname);
    }

    if (emailValue === "") {
        setErrorFor(email, /*"Empty Field"*/);
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email,/*"Invalid email address*/)
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, /*"Empty Field"*/);
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    // const small = formControl.querySelector('small');
    //ADD CLASS .ERROR
    formControl.className = "form-control error"
    //ADD MESSAGE ERROR
    // small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
