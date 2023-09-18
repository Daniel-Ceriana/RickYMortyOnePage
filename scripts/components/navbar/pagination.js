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
    if (_currentPage > 1) {
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
    _currentPage = Number(currentPage);
    _numberOfPages = numberOfPages;



    paginationbuttons[paginationbuttons.length - 1].textContent = numberOfPages
    paginationbuttons[0].textContent = 1


    // const arr = [1, 2, 3, 4, 42];
    // console.log(arr)
    // En caso de que haya muchas paginas
    if (_numberOfPages > 5) {
        console.log(_numberOfPages)
        for (let i = 0; i < paginationbuttons.length; i++) {
            paginationbuttons[i].style.display = "flex"

        }
        if (_currentPage == 1) {
            paginationbuttons[1].textContent = 2
            paginationbuttons[2].textContent = _currentPage + 2
            paginationbuttons[3].textContent = _currentPage + 3

        } else if (_currentPage >= 3 && _currentPage < numberOfPages - 1) {
            paginationbuttons[1].textContent = _currentPage - 1
            paginationbuttons[2].textContent = _currentPage
            paginationbuttons[3].textContent = _currentPage + 1
        } else if (_currentPage == numberOfPages) {
            paginationbuttons[1].textContent = numberOfPages - 3
            paginationbuttons[2].textContent = _currentPage - 2
            paginationbuttons[3].textContent = _currentPage - 1

        }
    } else {
        for (let i = paginationbuttons.length - 1; i > 0; i--) {
            if (i >= _numberOfPages) {

                paginationbuttons[i].style.display = "none"
            } else {

                paginationbuttons[i].style.display = "flex"

            }
        }
    }
    console.log(_numberOfPages)

    console.log(_currentPage)

}


export { setPagination }