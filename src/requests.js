const BASE_URL = `http://localhost:3000/api/v1`;

export const Product = {
    all() {
        return fetch(`${BASE_URL}/products`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    one(id) {
        return fetch(`${BASE_URL}/products/${id}`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params) {
        return fetch(`${BASE_URL}/products`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    }
};