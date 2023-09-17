import { listCharacters } from "../pageLoaders/characters.js";
import { listEpisodes } from "../pageLoaders/episodes.js";
import { displayHome } from "../pageLoaders/home.js";
import { listLocations } from "../pageLoaders/locations.js";
import { listComparisons } from "./compareCharacters.js";
import { setPagination } from "./navbar/pagination.js";
const header = document.querySelector("header")
const searchNavbar = document.querySelector(".control")

async function loadPage(page, pageNumber = 1) {
    switch (page) {
        case "characters":
            turnHeaderOn()
            document.body.style.backgroundImage = "";
            document.body.style.background = "linear-gradient(#97ce4c, #e89ac7)";
            setPagination(await listCharacters(pageNumber, searchNavbar.value), pageNumber);
            searchNavbar.dataset.paginaActual = "characters"
            searchNavbar.style.display = "flex"


            break;
        case "compare-characters":
            listComparisons();
            searchNavbar.style.display = "none"
            break;
        case "locations":
            turnHeaderOn()
            document.body.style.backgroundImage = "";
            document.body.style.background = "linear-gradient(#97ce4c, #e89ac7)";
            listLocations();
            searchNavbar.dataset.paginaActual = "locations"
            searchNavbar.style.display = "flex"

            break;
        case "episodes":
            turnHeaderOn()
            document.body.style.backgroundImage = "";
            document.body.style.background = "linear-gradient(#97ce4c, #e89ac7)";
            listEpisodes()
            searchNavbar.dataset.paginaActual = "episodes"
            searchNavbar.style.display = "flex"
            break;
        case "episode-info":

            break;



        default:
            turnHeaderOff()
            document.body.style.backgroundImage = "url(./multimedia/home.jpg)";
            document.body.style.backgroundColor = "black"
            displayHome()
            break;
    }
    console.log(searchNavbar)

}

function turnHeaderOn() {
    header.style.display = "flex"
}

function turnHeaderOff() {
    header.style.display = "none"
}

export { loadPage }