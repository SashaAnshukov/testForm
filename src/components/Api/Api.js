//
export class Api {
    constructor({adress}) {
        this._adress = adress;
    }
    
    getUserData() {
        return fetch(`${this._adress}/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(this._checkResponse)
    }

    //метод проверки ответа от сервера
    _checkResponse(response) {
        // тут проверка ответа
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`);
    }
}

const api = new Api({
    adress: 'http://localhost:3000',
    //token : '86724e9f-206a-43a9-ab92-a5e8d301d078'
})

export default api;