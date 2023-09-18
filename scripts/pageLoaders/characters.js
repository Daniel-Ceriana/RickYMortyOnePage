import { setPagination } from "../components/navbar/pagination.js";
import { getCharacters, getCharactersWithName, getPages, getinfoWithFullLink } from "./services/getData.js";







const listCharacters = async(page = 1, busqueda = "") => {

    if (!busqueda == "") {
        console.log("buscando " + busqueda)

        try {

            const results = await getCharactersWithName(busqueda, page);
            displayCharacters(results.retorno, results.pages);
            return results.pages
        } catch (error) {
            console.log("Error:" + error);
        }
    } else {
        try {
            const { results } = await getCharacters(page);
            const numberOfPages = await getPages("https://rickandmortyapi.com/api/character")
            await displayCharacters(results, numberOfPages);
            return numberOfPages
        } catch (error) {
            console.log("Error:" + error);
        }
    }


}

async function displayCharacters(results) {
    try {
        const displayContainer = document.querySelector("main");
        displayContainer.textContent = "";


        const cardsCharacter = document.createElement("section");
        cardsCharacter.setAttribute("class", "characters-container")
        displayContainer.appendChild(cardsCharacter);
        const display = document.querySelector(".characters-container")
            //nuevo
        let lastEpisode;
        display.textContent = "";
        await results.forEach(async character => {
            const article = document.createElement('article');
            lastEpisode = character.episode[character.episode.length - 1]
            let episodeName = await getEpisodeInfo(lastEpisode);


            article.setAttribute('class', 'character');
            article.innerHTML = `

        <div class="grid-item">
            <div class="tarjeta">
               <img src="${character.image}" class="img-fluid" alt="imagen de: ${character.name}">
                <div class="description">
                    <p class="name">${character.name}</p>
                    <p>${character.status}</p>
                    <p>Last known location:</p>
                    <p>${character.location.name}</p>
                    <p>Last seen in the episode</p>
                    <p>${episodeName}</p>
                </div>
            </div>
            <div class="container-btnCompare">
                <button class="btnCompare" data-character-to-compare="${character.id}" id="compare-${character.id}">
                    Compare Characters
                </button>
            </div>
        </div>   

        `







            display.appendChild(article);
            const buttonId = `compare-${character.id}`

            const button = document.getElementById(buttonId);
            const navbarCompareCharacters = document.querySelectorAll(".navbar-compare-characters")
            button.addEventListener("click", (e) => {
                let goesIn = false
                let index;

                for (let i = 0; i < navbarCompareCharacters.length; i++) {
                    if (character.id == navbarCompareCharacters[i].dataset.characterToCompare) {
                        navbarCompareCharacters[i].style.display = "none"
                        navbarCompareCharacters[i].src = ""
                        navbarCompareCharacters[i].dataset.characterToCompare = ""
                        navbarCompareCharacters[i].dataset.used = "false"
                        goesIn = false
                        break;
                    } else if (navbarCompareCharacters[i].dataset.used == 'false' && navbarCompareCharacters[i].dataset.characterToCompare == "") {
                        index = i;
                        goesIn = true
                            // break;
                    }



                }
                if (goesIn) {
                    navbarCompareCharacters[index].style.display = "flex"
                    navbarCompareCharacters[index].src = character.image
                    navbarCompareCharacters[index].dataset.characterToCompare = character.id
                    navbarCompareCharacters[index].alt = "imagen de: " + character.name;
                    navbarCompareCharacters[index].dataset.used = "true"
                }
                checkIfComparing(buttonId)
            })
            checkIfComparing(buttonId)
        });
        // setPagination(numberOfPages)

    } catch (error) {
        console.log("Error:" + error);
    }
}


function checkIfComparing(buttonID) {
    const button = document.getElementById(buttonID);
    const navbarCompareCharacters = document.querySelectorAll(".navbar-compare-characters")
    for (let i = 0; i < navbarCompareCharacters.length; i++) {

        if (button.dataset.characterToCompare === navbarCompareCharacters[i].dataset.characterToCompare) {
            button.innerText = "Not compare characters"
            break;
        } else {
            button.innerText = "Compare Characters"

        }

    }

}

async function getEpisodeInfo(lastEpisode) {
    let res;
    // console.log(lastEpisode)
    res = await getinfoWithFullLink(lastEpisode);
    return res.name;
}

export { listCharacters };