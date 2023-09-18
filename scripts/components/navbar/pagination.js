import { loadPage } from "../pageButtonsLogic.js";

const paginationbuttons = document.querySelectorAll(".pagination-button");
const goLeftButton = document.querySelector(".left-button");
const goRightButton = document.querySelector(".right-button");
let _currentPage = 1;
let _numberOfPages;
paginationbuttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const searchInfo = document.querySelector(".control")
        _currentPage = e.target.textContent
        switch (searchInfo.dataset.paginaActual) {
            case "characters":
                loadPage("characters", e.target.textContent)
                break;
            case "episodes":
                loadPage("episodes", e.target.textContent)
                break;
            case "locations":
                loadPage("locations", e.target.textContent)
                break;
            default:
                break;
        }
    })
})
goRightButton.addEventListener("click", () => {
    const searchInfo = document.querySelector(".control")
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
            loadPage("episodes", _currentPage)
            break;
        case "locations":
            loadPage("locations", _currentPage)
            break;
        default:
            loadPage("home")
            break;
    }
}

function setPagination(numberOfPages, currentPage = 1) {
    _currentPage = Number(currentPage);
    _numberOfPages = numberOfPages;


    //setea la primer y ultima pagina
    paginationbuttons[paginationbuttons.length - 1].textContent = numberOfPages
    paginationbuttons[0].textContent = 1


    // En caso de que haya muchas paginas
    if (_numberOfPages > 5) {
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
        //en caso de que hayan menos de 5 paginas, va eliminando los botones sobrantes
        for (let i = paginationbuttons.length - 1; i > 0; i--) {
            if (i >= _numberOfPages) {

                paginationbuttons[i].style.display = "none"
            } else {

                paginationbuttons[i].style.display = "flex"

            }
        }
    }


}


export { setPagination }