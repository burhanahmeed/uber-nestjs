import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    // Send a POST request to the login endpoint
    const response = http.post('https://your-api-url.com/auth/login', {
        username: 'johndoe@example.com',
        password: 'password123',
    });

    // Check if the login was successful
    if (response.status === 200) {
        console.log('Login successful');
    } else {
        console.log('Login failed');
    }

    // Sleep for 1 second before making the next request
    sleep(1);
}