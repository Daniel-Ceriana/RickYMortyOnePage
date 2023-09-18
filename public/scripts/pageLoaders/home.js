import { loadPage } from "../components/pageButtonsLogic.js";

const displayHome = () => {
    const displayContainer = document.querySelector("main");

    displayContainer.textContent = "";

    const article = document.createElement('article');
    article.innerHTML = `

            <div class="title">
            <h1 class="title">Rick and Morty</h1>
            
            </div>
            
            <div class="button_container">
                <div class="button_flip">
                    <button class="frontButton" data-page="characters">CHARACTER</button>
                    <a class="backButton" data-page="characters">Find and compare your favorite character </a>
            
                </div>
            </div>
            <div class="button_container" >
                <div class="button_flip">
                    <button class="frontButton" data-page="locations">LOCATIONS</button>
                    <a class="backButton" data-page="locations"> Each one of the locations whit all the related information </a>
            
                 </div>
            </div>
            <div class="button_container">
                <div class="button_flip">
                    <button class="frontButton" data-page="episodes">EPISODES</button>
                    <a class="backButton" data-page="episodes" >Everything you need to know about each episode and its character </a>
            
                </div>
            </div>
        
        

            `
    displayContainer.appendChild(article);

    const button = document.querySelectorAll(".button_flip");

    button.forEach((button) => {
        button.addEventListener("click", (e) => {
            loadPage(e.target.dataset.page)
        })
    })

}



export { displayHome }