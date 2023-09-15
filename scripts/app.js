import { addEventListenersToHeaderButtons } from "./components/navbar/navbarButtons.js";
import { listCharacters } from "./pageLoaders/characters.js";
import { listEpisodes } from "./pageLoaders/episodes.js";
import { displayHome } from "./pageLoaders/home.js";

const header = document.querySelector("header")

// charactersButton.addEventListener("click", (e) => {
//     turnHeaderOn()
//     document.body.style.backgroundImage = "";
//     document.body.style.background = "linear-gradient(#97ce4c, #e89ac7)";
//     listCharacters()
// })
// episodesButton.addEventListener("click", (e) => {
//     turnHeaderOn()
//     document.body.style.backgroundImage = "";
//     document.body.style.background = "linear-gradient(#97ce4c, #e89ac7)";
//     listEpisodes()
// })
// homeButton.addEventListener("click", (e) => {
// turnHeaderOff()
// document.body.style.backgroundImage = "url(/multimedia/home.jpg)";
// document.body.style.backgroundColor = "black"
// displayHome()
// })

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