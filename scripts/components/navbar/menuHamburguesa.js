// MENU HAMBURGUESA
const check = document.getElementById("check");
const menuHamburguesa = document.querySelector(".menu-hamburguesa");


check.addEventListener("click", (e) => {
    if (e.target.checked) {
        menuHamburguesa.style.display = "flex"
    } else {
        menuHamburguesa.style.display = "none"
    }
})
window.addEventListener("resize", (e) => {
    if (window.screen.width >= 952) {
        menuHamburguesa.style.display = "none";
        check.checked = false
    }
})


// FIN MENU HAMBURGUESA


// ENLACES DE BOTONES
const navbarPageButtons = document.querySelectorAll(".navbar-button")
const logo = document.querySelector(".enlace");
const minicardCompare = document.querySelector(".minicard")


for (let i = 0; i < navbarPageButtons.length; i++) {
    navbarPageButtons[i].addEventListener("click", (e) => {

        //    llama a components/buttonslogic

    })

}
logo.addEventListener("click", () => {
    // falta event listener del logo -------- HACER
})

minicardCompare.addEventListener("click", () => {
    // falta event listener del compareCharacters -------- HACER
})

// FIN ENLACES DE BOTONES