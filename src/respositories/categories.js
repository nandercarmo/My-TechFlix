import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {

    console.log(URL_CATEGORIES);

    return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
        
        if(response.ok) {

            const jsonResponse = await response.json();
            return jsonResponse;
        }

        throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAll() {

    console.log(URL_CATEGORIES);

    return fetch(URL_CATEGORIES)
    .then(async (response) => {
        
        if(response.ok) {

            const jsonResponse = await response.json();
            return jsonResponse;
        }

        throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
    getAllWithVideos,
    getAll,
};
