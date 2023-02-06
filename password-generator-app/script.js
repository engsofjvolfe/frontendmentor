const slider = document.getElementById('range') // Get the slider element by its id
const characterLength = document.getElementById('character-length') // Get the element with id character-length
const checkboxes = document.querySelectorAll("input[type='checkbox']")
const btn = document.getElementById('btn-generate')
const generatedPwd = document.getElementById('generated-pwd-container')
const strengthIndicator = document.querySelector('.strength-level-indicator')
const strengthLevelLights = document.querySelectorAll('.strength-level-light')

//SLIDER
// Set the initial value of the slider to the minimum value
window.onload = function () {
    slider.value = 0
}
slider.addEventListener('input', function () {
    // Add an event listener to the slider to listen for input events
    const percent = (slider.value - slider.min) / (slider.max - slider.min) // Calculate the percentage of the slider value relative to its min and max values
    slider.style.background = `linear-gradient(to right, #a4ffaf ${percent * 100
        }%, #24232c 0%)` // Set the background of the slider to a gradient, with #a4ffaf at the position represented by the percent value, and #24232c at 0%
    characterLength.innerHTML = slider.value // Set the value of the element with id character-length to the current value of the slider
})
//END SLIDER

//CHECKBOX
btn.addEventListener('click', function () {
    let selectedOptions = []
    // loop through all checkboxes to see which ones are selected
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedOptions.push(checkbox.value)
        }
    })
    //END CHECKBOXES

    let password = '' // Initialize the `password` variable as an empty string

    // The following loop will be executed the number of times specified in the value of the slider
    for (let i = 0; i < slider.value; i++) {
        // Choose a random option from the values in `selectedOptions`
        let selectedOption =
            selectedOptions[Math.floor(Math.random() * selectedOptions.length)]

        // Depending on the chosen option, do the following:
        switch (selectedOption) {
            case 'lower':
                // Add a random lowercase letter character to the `password` variable
                // The ASCII code for lowercase letters starts at 97, so we use `Math.floor(Math.random() * 26) + 97` to generate a random number between 97 and 122
                // Then we convert that number to a lowercase letter using `String.fromCharCode`
                password += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
                break
            case 'upper':
                // Add a random uppercase letter character to the `password` variable
                // The ASCII code for uppercase letters starts at 65, so we use `Math.floor(Math.random() * 26) + 65` to generate a random number between 65 and 90
                // Then we convert that number to an uppercase letter using `String.fromCharCode`
                password += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
                break
            case 'number':
                // Add a random number character to the `password` variable
                // The ASCII code for numbers starts at 48, so we use `Math.floor(Math.random() * 10) + 48` to generate a random number between 48 and 57
                // Then we convert that number to a number using `String.fromCharCode`
                password += String.fromCharCode(Math.floor(Math.random() * 10) + 48)
                break
            case 'symbol':
                // Add a random symbol character to the `password` variable
                let specialChars = '!@#$%^&*(){}[]=<>/,.' // Define a string with the available symbols
                // Choose a random symbol from the `specialChars` string and add it to the `password` variable
                password += specialChars[Math.floor(Math.random() * specialChars.length)]
                break
        }
        // Finally, assign the value of the `password` variable to
        generatedPwd.innerHTML = password

        // Check if password has been generated or inserted
        if (generatedPwd) {
            // Add 'has-password' class to the generate-pwd element
            generatedPwd.classList.add('has-password')
        } else {
            // Remove 'has-password' class from the generate-pwd element
            generatedPwd.classList.remove('has-password')
        }
    }
    //calls function
    strength = evaluatePasswordStrength(password)
    //end calls function

    //strength indicator update
    if (strength === 1) {
        strengthIndicator.innerText = 'TOO WEAK'
    } else if (strength === 2) {
        strengthIndicator.innerText = 'WEAK'
    } else if (strength === 3) {
        strengthIndicator.innerText = 'MEDIUM'
    } else if (strength === 4) {
        strengthIndicator.innerText = 'STRONG'
    }
    console.log(strength)
    //strength indicator update

    //element colors update
    updatePasswordStrength(password)
    //element colors update
})

// PASSWORD STRENGTH
//assess the strength of a password based on the characters added."
function evaluatePasswordStrength(password) {
    let strength = 0
    let hasUpperCase = /[A-Z]/.test(password)
    let hasLowerCase = /[a-z]/.test(password)
    let hasNumber = /\d/.test(password)
    let hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)

    if (hasUpperCase) strength++
    if (hasLowerCase) strength++
    if (hasNumber) strength++
    if (hasSymbol) strength++

    return strength
}
//end assess the strength of a password based on the characters added."

function updatePasswordStrength(password) {
    const passwordStrength = evaluatePasswordStrength(password)
    const lightElements = document.querySelectorAll('.strength-level')

    lightElements.forEach((element, index) => {
        if (index + 1 <= passwordStrength) {
            switch (passwordStrength) {
                case 1:
                    element.style.backgroundColor = '#F64A4A'
                    break
                case 2:
                    element.style.backgroundColor = '#F8CD65'
                    break
                case 3:
                    element.style.backgroundColor = '#FB7C58'
                    break
                case 4:
                    element.style.backgroundColor = '#A4FFAF'
                    break
                default:
                    break
            }
        } else {
            element.style.backgroundColor = ''
        }
    })
}
// END PASSWORD STRENGTH
