import { addEventListenersToHeaderButtons } from "./components/navbar/navbarButtons.js";

import { displayHome } from "./pageLoaders/home.js";

const header = document.querySelector("header")

function turnHeaderOn() {
    header.style.display = "flex"
}

function turnHeaderOff() {
    header.style.display = "none"
}


(function initApp() {
    turnHeaderOff()
    document.body.style.backgroundImage = "url(/multimedia/home.jpg)";
    document.body.style.backgroundColor = "black"
    displayHome()
    addEventListenersToHeaderButtons();
})()