import { getLocations, getLocationsWithName, getPages } from "./services/getData.js";

const display = document.querySelector("main")

const listLocations = async(page = 1, busqueda = "") => {



    if (!busqueda == "") {
        console.log("buscando " + busqueda)

        try {

            const results = await getLocationsWithName(busqueda, page);
            displayLocations(results.retorno, results.pages);
            console.log(results.retorno)
            return results.pages
        } catch (error) {
            console.log("Error:" + error);
        }
    } else {
        try {
            const { results } = await getLocations(page);
            const numberOfPages = await getPages("https://rickandmortyapi.com/api/location")
            await displayLocations(results, numberOfPages);
            return numberOfPages
        } catch (error) {
            console.log("Error:" + error);
        }
    }







}



async function displayLocations(results) {

    const displayContainer = document.createElement('section');
    displayContainer.setAttribute("class", "locations-container");


    try {
        display.textContent = "";
        results.forEach(location => {
            const article = document.createElement('article');
            const createdDate = new Date(location.created);
            article.setAttribute('class', 'location');
            article.innerHTML = `
            <section class="locations-card">
            <article class="locations-card--description">
                <h2>${location.name}</h2>
                <p>${location.type}</p>
                <p>${location.dimension}</p>
                <p>Residents: ${location.residents.length}</p>
                <p>Created: ${createdDate.toLocaleDateString("es-AR")}</p>
                </article>
            <article class="locations-card--info">
            </article>
        </section>


            `
            displayContainer.appendChild(article);
        });
        display.appendChild(displayContainer);
    } catch (error) {
        console.log("Error:" + error);
    }
}

export { listLocations }