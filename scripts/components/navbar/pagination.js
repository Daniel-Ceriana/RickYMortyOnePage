import { listCharacters } from "../../pageLoaders/characters.js";
import { loadPage } from "../pageButtonsLogic.js";

const paginationbuttons = document.querySelectorAll(".pagination-button");
const goLeftButton = document.querySelector(".left-button");
const goRightButton = document.querySelector(".right-button");
let _currentPage = 1;
let _numberOfPages;
paginationbuttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const searchInfo = document.querySelector(".control")
        switch (searchInfo.dataset.paginaActual) {
            case "characters":
                console.log(e.target.textContent)
                _currentPage = e.target.textContent
                loadPage("characters", e.target.textContent)

                break;
            case "episodes":
                // listCharacters(currentPage, searchInfo.value)
                console.log("Episodes, pagina:" + currentPage)
                break;
            case "locations":
                // listCharacters(currentPage, searchInfo.value)

                break;
            default:
                break;
        }
    })
})
goRightButton.addEventListener("click", () => {
    const searchInfo = document.querySelector(".control")
    console.log(_currentPage)
    if (_currentPage < _numberOfPages) {
        _currentPage++;
    } else {

    }

    paginationSides(searchInfo.dataset.paginaActual);

})
goLeftButton.addEventListener("click", () => {
    const searchInfo = document.querySelector(".control")
    if (_currentPage > 0) {
        _currentPage--;
    } else {

    }
    paginationSides(searchInfo.dataset.paginaActual);

})

function paginationSides(page) {
    switch (page) {
        case "characters":

            loadPage("characters", _currentPage)

            break;
        case "episodes":
            // listCharacters(currentPage, searchInfo.value)
            console.log("Episodes, pagina:" + _currentPage)
            break;
        case "locations":
            // listCharacters(currentPage, searchInfo.value)

            break;
        default:
            break;
    }
}

function setPagination(numberOfPages, currentPage = 1) {
    _currentPage = currentPage;
    _numberOfPages = numberOfPages;



    paginationbuttons[paginationbuttons.length - 1].textContent = numberOfPages
    paginationbuttons[0].textContent = 1


    const arr = [1, 2, 3, 4, 42];
    // console.log(arr)


    if (paginationbuttons.textContent > 5) {
        paginationbuttons[2].textContent = currentPage
        paginationbuttons[1].textContent = currentPage - 1
        paginationbuttons[3].textContent = currentPage + 1
    }



    // for (let i = 0; i < paginationbuttons.length; i++) {

    //     if (paginationbuttons[i] === paginationbuttons[0] || paginationbuttons[i] === paginationbuttons[4]) {

    //     } else {
    //         paginationbuttons[i].textContent++;
    //     }
    // }
    // console.log(arr)


    // if (currentPage >= 5 && currentPage <= numberOfPages - 4) {
    //     paginationbuttons[1].textContent = "..."
    //     paginationbuttons[3].textContent = "..."
    //     console.log(paginationbuttons[1].textContent)
    // }

}

function updatePagination() {

}

export { setPagination }