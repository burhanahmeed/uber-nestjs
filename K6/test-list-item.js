// BASE_URL=http://localhost:3000 k6 run test-list-item.js

import http from 'k6/http';
import { check } from 'k6';
import { getLoginToken } from './utils.js';

export const options = {
    // Key configurations for avg load test in this section
    // vus: 500,
    // duration: '30s'
    stages: [
      { duration: '10s', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
      { duration: '30s', target: 100 }, // stay at 100 users for 30 minutes
      { duration: '10s', target: 0 }, // ramp-down to 0 users
    ],
  };

export function setup() {
    const token = getLoginToken();
    
    return { token }
}

export default function (data) {
    const headers = {
        'Authorization': `Bearer ${data.token}`,
        'Content-Type': 'application/json',
    };

    let response = http.get(`${__ENV.BASE_URL}/items`, { headers: headers });

    check(response, {
        'Order gotten successfully': (r) => r.status === 200,
    });
}
