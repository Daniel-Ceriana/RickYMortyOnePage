const apiUrl = "https://rickandmortyapi.com/api";

const getCharacter = async(id) => {
    try {
        const res = await fetch(`${apiUrl}/character/${id}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }

}
const getCharacters = async(page) => {
    try {
        const res = await fetch(`${apiUrl}/character?page=${page}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }

}
const getPages = async(url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.info.pages;
    } catch (error) {
        console.log("Error:" + error);
    }

}
const getCharactersWithName = async(name, page = 1) => {
        const searchedCharacters = [];
        try {
            const res = await fetch(`${apiUrl}/character`);
            const data = await res.json();
            let start = 0;
            if (page > 1) {
                start = 20 * page - 20
            }
            let finish = 20 * page;
            let pages = 0;
            let totalPages;

            for (let i = 1; i <= data.info.pages; i++) {
                const pageRes = await getCharacters(i)
                pageRes.results.forEach(character => {
                    if (character.name.toLowerCase().search(name.toLowerCase()) >= 0) {
                        searchedCharacters.push(character)
                        pages++
                    }
                });
            }
            console.log(start, finish)
            totalPages = Math.ceil(pages /= 20)

            const retorno = []
            for (start; start < finish; start++) {
                if (searchedCharacters[start] != null) {
                    retorno.push(searchedCharacters[start])
                } else {
                    break;
                }
            }
            return { "pages": totalPages, retorno };
        } catch (error) {
            console.log("Error:" + error);
        }

    }
    // const getNumberOfCharactersWithName = async(name) => {
    //         const res = await getCharactersWithName("rick")
    //         console.log(res.length)
    //     }
    //     getNumberOfCharactersWithName()

// const getNumberOfCharactersWithNameAndPage = async(name, page = 1) => {
//     const characters = getNumberOfCharactersWithName(name)
//     let res;
//     if (!characters > 20) {
//         res = getCharactersWithName(name)
//     } else {

//     }

// }


const getLocation = async(id) => {

    try {
        const res = await fetch(`${apiUrl}/location/${id}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }
}

const getLocations = async(page) => {

    try {
        const res = await fetch(`${apiUrl}/location?page=${page}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }
}

const getEpisode = async(id) => {

    try {
        const res = await fetch(`${apiUrl}/episode/${id}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }
}


const getEpisodes = async(page) => {

    try {
        const res = await fetch(`${apiUrl}/episode?page=${page}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }
}
const getinfoWithFullLink = async(url) => {

    try {
        const res = await fetch(`${url}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }
}




export { getCharacter, getCharacters, getLocation, getLocations, getEpisode, getEpisodes, getinfoWithFullLink, getCharactersWithName, getPages };