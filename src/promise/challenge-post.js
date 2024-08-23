const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "New Product Course",
    "price": 9999,
    "description": "A description",
    "categoryId": 1,
    "images": [
        "thhps://placeimg.com/640/480/any"
    ]
}

postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data));