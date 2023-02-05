const slider = document.getElementById("range"); // Get the slider element by its id
const characterLength = document.getElementById("character-length"); // Get the element with id character-length

slider.addEventListener("input", function () { // Add an event listener to the slider to listen for input events
    const percent = (slider.value - slider.min) / (slider.max - slider.min); // Calculate the percentage of the slider value relative to its min and max values
    slider.style.background = `linear-gradient(to right, #a4ffaf ${percent * 100}%, #24232c 0%)`; // Set the background of the slider to a gradient, with #a4ffaf at the position represented by the percent value, and #24232c at 0%

    characterLength.innerHTML = slider.value; // Set the value of the element with id character-length to the current value of the slider
});
