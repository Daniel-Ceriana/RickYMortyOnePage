import { listCharacters } from "../pageLoaders/characters.js";
import { listEpisodes } from "../pageLoaders/episodes.js";
import { displayHome } from "../pageLoaders/home.js";
import { listLocations } from "../pageLoaders/locations.js";
import { listComparisons } from "./compareCharacters.js";
import { setPagination } from "./navbar/pagination.js";
const header = document.querySelector("header")
const searchNavbar = document.querySelector(".control")
const paginationNavbar = document.querySelector(".paginacion")



searchNavbar.addEventListener("keyup", (e) => {

    loadPage(searchNavbar.dataset.paginaActual)
        // loadPage()
})

async function loadPage(page, pageNumber = 1) {
    switch (page) {
        case "characters":
            turnHeaderOn()
            document.body.style.backgroundImage = "";
            // document.body.style.background = "linear-gradient(#97ce4c, #e89ac7)";
            document.body.style.background = "#97ce4c";
            setPagination(await listCharacters(pageNumber, searchNavbar.value), pageNumber);
            searchNavbar.dataset.paginaActual = "characters"
            searchNavbar.style.display = "flex"
            paginationNavbar.style.display = "flex"


            break;
        case "compare-characters":
            listComparisons();
            searchNavbar.style.display = "none"
            paginationNavbar.style.display = "none"

            break;
        case "locations":
            turnHeaderOn()
            document.body.style.backgroundImage = "";
            document.body.style.background = "#97ce4c";
            // listLocations();
            setPagination(await listLocations(pageNumber, searchNavbar.value), pageNumber);

            searchNavbar.dataset.paginaActual = "locations"
            searchNavbar.style.display = "flex"
            paginationNavbar.style.display = "flex"


            break;
        case "episodes":
            turnHeaderOn()
            document.body.style.backgroundImage = "";
            document.body.style.background = "#97ce4c";
            // listEpisodes()
            setPagination(await listEpisodes(pageNumber, searchNavbar.value), pageNumber);
            searchNavbar.dataset.paginaActual = "episodes"
            searchNavbar.style.display = "flex"
            paginationNavbar.style.display = "flex"

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

}

function turnHeaderOn() {
    header.style.display = "flex"
}

function turnHeaderOff() {
    header.style.display = "none"
}

export { loadPage }