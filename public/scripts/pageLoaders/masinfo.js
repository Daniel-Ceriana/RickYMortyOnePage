import { getinfoWithFullLink, getEpisode } from "./services/getData.js";





const characterList = async(characterInEpisode, episode) => {
    const paginationNavbar = document.querySelector(".paginacion")

    paginationNavbar.style.display = "none"

    const screen = document.querySelector("main");
    screen.innerHTML = "";



    const separador = document.createElement("div")
    separador.setAttribute("class", "separador")
    screen.appendChild(separador);



    // const seccion = document.createElement("section");
    // seccion.setAttribute("class", "info-episodes")
    // screen.appendChild(seccion);
    // const subScreen = document.querySelector(".info-episodes");
    const subScreen = document.createElement("section", ".info-episodes");

    subScreen.setAttribute("class", "seccionPrincipal")
    screen.appendChild(subScreen);
    subScreen.textContent = "";

    const container = document.createElement("div");

    container.setAttribute("class", "row justify-content-center")
    subScreen.appendChild(container);

    const containerCard = document.createElement("div");

    containerCard.setAttribute("class", "col-sm-12 col-md-5 col-lg-4 col-xl-3")
    container.appendChild(containerCard);

    const containerCards = document.createElement("div");

    containerCards.setAttribute("class", "col-sm-12 col-md-6 col-lg-7 col-xl-8")
    container.appendChild(containerCards);

    const tarjeta = document.createElement("article");
    tarjeta.setAttribute("class", "card_container")
    containerCard.appendChild(tarjeta);

    const grilla = document.createElement("article");
    grilla.setAttribute("class", "grid-container")
    containerCards.appendChild(grilla);


    const display1 = document.querySelector(".card_container");

    try {
        display1.textContent = "";
        const article = document.createElement('div');
        const result = await getEpisode(episode);

        //console.log(character)

        article.setAttribute('class', 'episode');

        article.innerHTML = `
                         <div class="card">
                             <div class="card_cuerpo">
                                 <h2>${result.name}</h2>
                                 <br>
                                 <p> <span style="color: gray;">${result.air_date}</span></p>
                                 <br>
                                 <h3>${result.episode}</h3>
                                 <br>
                               <p> <span style="color: grey;">Residents:1</span></p>
                             <br>
                                <p> <span style="color: blueviolet;">Created: 10/11/2017</span></p>
                             </div>
                       </div>
                    
                         `
        display1.appendChild(article);

    } catch (error) {
        console.log("Error:" + error);
    }

    const display2 = document.querySelector(".grid-container");


    try {
        display2.textContent = "";
        await characterInEpisode.forEach(async character => {
            const article = document.createElement('div');
            const result = await getinfoWithFullLink(character);
            // console.log(result)
            //       //console.log(character)

            article.setAttribute('class', 'character');

            article.innerHTML = `
            
            <div class="grid-item2">
                <img src="${result.image}" alt="${result.name}">
                <p>${result.name}</p>    
            </div>   

            `


            display2.appendChild(article);
        });
    } catch (error) {
        console.log("Error:" + error);
    }
}

// characterList();


// async function getEpisodeInfo(lastEpisode) {
//     let res;
//     res = await getEpisodeWithLink(lastEpisode);
//     console.log(res.name);
//     return res.name;
// }

export { characterList };