const elements = document.querySelector(".elements");
const buttonRight = document.querySelector(".button-arrow.-right");
const buttonLeft = document.querySelector(".button-arrow.-left");

buttonLeft.addEventListener("click", () => {
    const first = elements.firstElementChild;
    elements.appendChild(first);
    checkCardPosition();
});

buttonRight.addEventListener("click", () => {
    const last = elements.lastElementChild;
    elements.insertBefore(last, elements.firstElementChild);
    checkCardPosition();
});

function checkCardPosition()
{
    const cards = document.querySelector(".card-project");

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const leftLimit = 500;
        const rightLimit = window.innerWidth - 500;

        if (rect.right < leftLimit || rect.left > rightLimit)
        {
            card.style.opacity = "0";
            card.style.pointerEvents = "none";
        }
        else 
        {
            card.style.opacity = "1";
            card.style.pointerEvents = "auto";
        }
    });
}

window.addEventListener("load", checkCardPosition);
window.addEventListener("resize", checkCardPosition )