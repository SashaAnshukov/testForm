export const BASE_URL = 'http://localhost:3000';

// проверка ответа от сервера
const checkResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
}

export const register = (firstName, lastName, nationality, email, date, gender, password) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({firstName, lastName, nationality, email, date, gender, password})
    })
    .then(checkResponse)
};

