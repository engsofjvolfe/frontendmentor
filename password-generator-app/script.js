const slider = document.getElementById('range') // Get the slider element by its id
const characterLength = document.getElementById('character-length') // Get the element with id character-length
const checkboxes = document.querySelectorAll("input[type='checkbox']")
const btn = document.getElementById('btn-generate')
const generatedPwd = document.getElementById('generated-pwd-container')

//SLIDER
slider.addEventListener('input', function () {
  // Add an event listener to the slider to listen for input events
  const percent = (slider.value - slider.min) / (slider.max - slider.min) // Calculate the percentage of the slider value relative to its min and max values
  slider.style.background = `linear-gradient(to right, #a4ffaf ${
    percent * 100
  }%, #24232c 0%)` // Set the background of the slider to a gradient, with #a4ffaf at the position represented by the percent value, and #24232c at 0%

  characterLength.innerHTML = slider.value // Set the value of the element with id character-length to the current value of the slider
})
//END SLIDER

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
    generatedPwd.innerHTML = password     
  }

  // Finally, assign the value of the `password` variable to
})

