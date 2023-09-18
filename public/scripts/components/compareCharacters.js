import { getCharacter, getCharacters, getinfoWithFullLink } from "../../scripts/pageLoaders/services/getData.js";
const display = document.querySelector("main");

const navbarCharactersToCompare = document.querySelectorAll(".navbar-compare-characters");




async function compareCharacter() {
    const characterArray = []

    for (let i = 0; i < navbarCharactersToCompare.length; i++) {
        if (navbarCharactersToCompare[i].dataset.used == "true") {
            characterArray.push(await getCharacter(navbarCharactersToCompare[i].dataset.characterToCompare))
        }

    }

    const normalizedArray = [];


    characterArray.forEach(mainCharacter => {


        const comparedArray = [];

        characterArray.forEach(secondaryCharacter => {

            if (mainCharacter.name != secondaryCharacter.name) {
                const aux = []

                mainCharacter.episode.forEach(episode => {
                    aux.push(secondaryCharacter.episode.filter(secondayCharacterEpisode => secondayCharacterEpisode == episode))
                });

                try {
                    comparedArray.push({
                        otherCharacterName: secondaryCharacter.name,
                        // episodesShared: aux.flat().map(async(urlEpisode) => urlEpisode = await getEpisodeName(urlEpisode)),
                        numberOfEpisodesShared: aux.flat().length
                    })
                } catch (error) {
                    console.log(error)
                }
            }

        });
        normalizedArray.push({
            name: mainCharacter.name,
            gender: mainCharacter.gender,
            status: mainCharacter.status,
            location: mainCharacter.location,
            episode: mainCharacter.episode,
            image: mainCharacter.image,
            id: mainCharacter.id,
            otherCharacters: comparedArray
        })
    });
    return normalizedArray
}




async function getEpisodeName(urlEpisode) {
    if (typeof urlEpisode != undefined && typeof urlEpisode != null) {
        try {
            const res = await fetch(urlEpisode);
            const data = await res.json();
            return data.name;
        } catch (error) {
            console.log(error);
        }
    }
}


const listComparisons = async(page = 1) => {



    try {
        const results = await compareCharacter()
        let lastEpisode;
        display.textContent = "";
        const sectionCompare = document.createElement("section")
        sectionCompare.setAttribute("class", "sectionCompare")
        display.appendChild(sectionCompare);

        results.forEach(async character => {
            const article = document.createElement('article');
            lastEpisode = character.episode[character.episode.length - 1]
            let episodeName = await getEpisodeInfo(lastEpisode);


            article.setAttribute('class', 'card-comparison');
            article.innerHTML = `
            <article class="card-comparison-visual">
                <img class="card-comparison-img" src="${character.image}" alt="">
                <h2 class="card-comparison-name">${character.name}
                </h2>
            </article>
            <article class="card-comparison-info">

                <h3 class="card-comparison-character-description"> ${character.status} - ${character.gender}</h3>
                <section>
                    <label class="card-comparison-label" for="">Last known location:</label>
                    <p class="card-comparison-p">${character.location.name}</p>
                </section>
                <section>
                    <label class="card-comparison-label" for="">Was seen in the episode:</label>
                    <p class="card-comparison-p">${episodeName}</p>
                </section>
                <section id="compare-section-${character.id}">
                   
                </section>

            </article>

            `







            sectionCompare.appendChild(article);
            const cardComparison = document.getElementById(`compare-section-${character.id}`)
            character.otherCharacters.forEach(otherCharacter => {
                const comparedCharacter = document.createElement('article')
                comparedCharacter.innerHTML =
                    ` 
                <label class="card-comparison-label" for="">Episodes shared with</label>
                <p class="card-comparison-p" id="">${otherCharacter.otherCharacterName}: ${otherCharacter.numberOfEpisodesShared}</p>
                `;
                cardComparison.appendChild(comparedCharacter)
            })


        });


    } catch (error) {
        console.log("Error:" + error);
    }

}



async function getEpisodeInfo(lastEpisode) {
    let res;
    // console.log(lastEpisode)
    res = await getinfoWithFullLink(lastEpisode);
    return res.name;
}

export { listComparisons };