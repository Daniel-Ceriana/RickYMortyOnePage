import { listCharacters } from "../../pageLoaders/characters.js";
import { loadPage } from "../pageButtonsLogic.js";

const paginationbuttons = document.querySelectorAll(".pagination-button");
const goLeftButton = document.querySelector(".left-button");
const goRightButton = document.querySelector(".right-button");
paginationbuttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const searchInfo = document.querySelector(".control")
        switch (searchInfo.dataset.paginaActual) {
            case "characters":
                console.log(e.target.textContent)
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
    switch (searchInfo.dataset.paginaActual) {
        case "characters":
            console.log(e.target.textContent)
            loadPage("characters", e.target.textContent + 1)

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

function setPagination(numberOfPages, currentPage = 1) {




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