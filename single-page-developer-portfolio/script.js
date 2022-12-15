(function () {
    'strict mode'
    const form = document.querySelector('#form');
    const email = document.querySelector('#email');

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        checkInputs()
    })

    function checkInputs() {
        const emailValue = email.value.trim();

        if (emailValue === '') {
            // mostrar erro
            // add classe
            setErrorFor(email, 'Empty Field');
        } else if (!checkEmail(emailValue)) {
            setErrorFor(email, 'Sorry, invalid format here');
        } else {
            // adicionar a classe de sucesso
            let name = document.querySelector('#name');
            let message = document.querySelector('#message');
            setSuccessFor(email, name, message);
        }
    }

    function setErrorFor(email, message) {
        const formControl = email.parentElement;
        const small = formControl.querySelector('small')
        formControl.className = 'form-control error'
        small.innerText = message
    }

    function setSuccessFor(email, name, message) {
        const formControl = email.parentElement;
        const formControlName = name.parentElement;
        const formControlMessage = message.parentElement;
        formControl.className = 'form-control success'
        formControlName.className = 'form-control success'
        formControlMessage.className = 'form-control success'
    }

    // REGEX
    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        )
    }
})()
