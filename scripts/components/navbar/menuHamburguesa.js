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