const paginationbuttons = document.querySelectorAll(".pagination-button");
const goLeftButton = document.querySelector(".left-button");
const goRightButton = document.querySelector(".left-right");
let currentPage;

function setPagination(numberOfPages) {
    console.log(numberOfPages)
    console.log(paginationbuttons)

    paginationbuttons[paginationbuttons.length - 1].textContent = numberOfPages
    paginationbuttons[0].textContent = 1


    if (numberOfPages < 7) {
        for (let i = 0; i < paginationbuttons.length; i++) {
            console.log(paginationbuttons[i])
        }
    } else {

    }

}

function updatePagination() {

}

export { setPagination }