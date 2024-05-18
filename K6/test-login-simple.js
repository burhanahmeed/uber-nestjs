// BASE_URL=http://localhost:3000 k6 run test-login-simple.js

import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 6,
    // iterations: 20,
    // duration: '30s',
    // thresholds: {
    //     http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    //     // 90% of requests must finish within 400ms, 95% within 800, and 99.9% within 2s.
    //     http_req_duration: ['p(90) < 400', 'p(95) < 800', 'p(99.9) < 2000'],
    // Count: Incorrect content cannot be returned more than 99 times.
    //     'Errors': ['count<100'],
    // Gauge: returned content must be smaller than 4000 bytes
    //      'ContentSize': ['value<4000'],
    // Rate: content must be OK more than 95 times
    //      'Content OK': ['rate>0.95'],
    // Trend: Percentiles, averages, medians, and minimums
    // must be within specified milliseconds.
    //      'RTT': ['p(99)<300', 'p(70)<250', 'avg<200', 'med<150', 'min<100'],
    // },
    //     stages: [
    //       { duration: '1m', target: 10 },
    //       { duration: '1m', target: 20 },
    //       { duration: '1m', target: 0 },
    //     ],
};


export default function () {
    // Send a POST request to the login endpoint
    const response = http.post(`${__ENV.BASE_URL}/auth/login`, {
        username: 'johndoe@example.com',
        password: 'password123',
    });

    // Check if the login was successful
    check(response, {
        'Login successful': (r) => r.status === 201,
    });

    // Sleep for 1 second before making the next request
    sleep(1);
}