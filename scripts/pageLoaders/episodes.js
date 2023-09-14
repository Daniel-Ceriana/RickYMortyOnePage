import { getEpisodes } from "./services/getData.js";





const listEpisodes = async(page = 1) => {
    const displayContainer = document.querySelector("main");
    const container = document.createElement('section')
    container.setAttribute('class', 'episodes-container');
    container.innerHTML = "";
    displayContainer.innerHTML = "";

    displayContainer.appendChild(container)



    const display = document.querySelector(".episodes-container");



    try {
        const { results } = await getEpisodes(page);

        // results[0].characters.forEach(character => {
        //     console.log(character)
        //     const characterInfo = getCharacter(character)

        //     `
        //    <h1>Nombre: ${characterInfo.name} </h1>
        //    <h1>foto: ${characterInfo.image} </h1>
        //    `

        // });

        display.textContent = "";
        await results.forEach(async episode => {
            const article = document.createElement('article');
            article.setAttribute('class', 'episode');
            article.innerHTML = `

            <div class = "episode-card">
                <div class = "episode-card_cuerpo" >
                    <h2> ${episode.name} </h2> 
                    <br>
                    <p> <span style = "color: gray;" > ${episode.air_date} </span></p>
                    <br>
                    <h3> ${episode.episode} </h3>
                    <br>
                </div> 
                <div class = "episode-card_boton active">
                    <button class="episode-card_boton" type="button" data-url="${episode.url}" id="${episode.id}">
                        +info 
                    </button> 
                </div> 
            </div>
        
        

            `







            display.appendChild(article);
        });
    } catch (error) {
        console.log("Error:" + error);
    }

}


export { listEpisodes };