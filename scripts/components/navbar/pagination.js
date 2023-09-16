const paginationbuttons = document.querySelectorAll(".pagination-button");
const goLeftButton = document.querySelector(".left-button");
const goRightButton = document.querySelector(".left-right");

function setPagination(numberOfPages, currentPage = 3) {
    console.log(numberOfPages)
    console.log(paginationbuttons)

    paginationbuttons[paginationbuttons.length - 1].textContent = numberOfPages
    paginationbuttons[0].textContent = 1

    //setea como active al boton del medio en paginacion
    if (currentPage >= 3) {
        paginationbuttons[2].setAttribute("data-is-active", "active")
    }
    console.log(paginationbuttons[2].dataset)

    if (numberOfPages < 7) {
        for (let i = 1; i < paginationbuttons.length - 1; i++) {
            console.log(paginationbuttons[i].style.display = "none")
        }
    } else {
        for (let i = 1; i < paginationbuttons.length - 1; i++) {
            console.log(paginationbuttons[i].textContent)
        }
    }

}

function updatePagination() {

}

export { setPagination }