import { loadPage } from "../pageButtonsLogic.js";

function addEventListenersToHeaderButtons() {

    const button = document.querySelectorAll(".change-page");

    button.forEach((button) => {
        button.addEventListener("click", (e) => {
            loadPage(e.target.dataset.page)
        })
    })
}

export { addEventListenersToHeaderButtons }