import http from 'k6/http';

export function getLoginToken() {
    const response = http.post(`${__ENV.BASE_URL}/auth/login`, {
        username: 'johndoe@example.com',
        password: 'password123',
    });

    return response.json('token');
}
