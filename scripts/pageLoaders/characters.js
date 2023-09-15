import { loadPage } from "../components/pageButtonsLogic.js";
import { getCharacters, getEpisodeWithFullLink } from "./services/getData.js";

const display = document.querySelector("main");





const listCharacters = async(page = 1) => {

    try {
        const { results } = await getCharacters(page);
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
                console.log(e.target.dataset.characterToCompare)
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
                    navbarCompareCharacters[index].dataset.used = "true"
                }
                checkIfComparing(buttonId)
                console.log(navbarCompareCharacters[0].dataset)
                console.log(navbarCompareCharacters[1].dataset)
                console.log(navbarCompareCharacters[2].dataset)
            })
        });

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
    res = await getEpisodeWithFullLink(lastEpisode);
    console.log(res.name);
    return res.name;
}

export { listCharacters };