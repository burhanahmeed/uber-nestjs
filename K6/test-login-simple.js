// BASE_URL=http://localhost:3000 k6 run test-login-simple.js

import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
    // Send a POST request to the login endpoint
    const response = http.post(`${__ENV.BASE_URL}/auth/login`, {
        username: 'johndoe@example.com',
        password: 'password123',
    });

    // Check if the login was successful
    check(response, {
        'Login successful': (r) => r.status === 200,
    });

    // Sleep for 1 second before making the next request
    sleep(1);
}