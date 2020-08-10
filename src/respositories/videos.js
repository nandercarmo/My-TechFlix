import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/videos`;

function create(video) {

    console.log(URL_CATEGORIES);

    return fetch(`${URL_CATEGORIES}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(video)
    })
    .then(async (response) => {
        
        if(response.ok) {

            const jsonResponse = await response.json();
            return jsonResponse;
        }

        throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
    create,
};
