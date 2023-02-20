const API_URL = 'https://63a689f7318b23efa7ab5f8e.mockapi.io/api'

function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    })
        .catch((err) => {
            console.log(err);
        });
}

