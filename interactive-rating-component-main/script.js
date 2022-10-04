const form = document.querySelector(".form");
const radioInputs = document.querySelectorAll(".form__radio-input");
const ratingCard = document.querySelector(".rating-card");

let ratingValue;

radioInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
        ratingValue = e.target.value;
    });              
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!ratingValue) return;
    renderThankyouContent(ratingCard, ratingValue);
});

function renderThankyouContent(container, ratingValue) {
    container.innerHTML = `
    <div class="container rated">
        <img
          class="rated-img"
          src="images/illustration-thank-you.svg"
          alt="Thank you photo"
        />     
        <p class="result">
          You selected ${ratingValue} out of 5
        </p>
        <h1 class="rated-title">Thank you!</h1>
        <p class="rated-description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
    </div>
    `;
}