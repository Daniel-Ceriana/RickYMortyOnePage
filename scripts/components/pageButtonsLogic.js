import { listCharacters } from "../pageLoaders/characters.js";
import { listEpisodes } from "../pageLoaders/episodes.js";
import { displayHome } from "../pageLoaders/home.js";
import { listComparisons } from "./compareCharacters.js";
const header = document.querySelector("header")

function loadPage(page) {
    switch (page) {
        case "characters":
            turnHeaderOn()
            document.body.style.backgroundImage = "";
            document.body.style.background = "linear-gradient(#97ce4c, #e89ac7)";
            listCharacters()
            break;
        case "compare-characters":
            listComparisons();
            break;
        case "locations":

            break;
        case "episodes":
            turnHeaderOn()
            document.body.style.backgroundImage = "";
            document.body.style.background = "linear-gradient(#97ce4c, #e89ac7)";
            listEpisodes()
            break;
        case "episode-info":

            break;



        default:
            turnHeaderOff()
            document.body.style.backgroundImage = "url(/multimedia/home.jpg)";
            document.body.style.backgroundColor = "black"
            displayHome()
            break;
    }
}

function turnHeaderOn() {
    header.style.display = "flex"
}

function turnHeaderOff() {
    header.style.display = "none"
}

export { loadPage }