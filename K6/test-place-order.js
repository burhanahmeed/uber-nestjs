// BASE_URL=http://localhost:3000 k6 run test-place-order.js

import http from 'k6/http';
import { check } from 'k6';
import { getLoginToken } from './utils.js';

export const options = {
    // Key configurations for avg load test in this section
    vus: 100,
    iterations: 20,
    duration: '300s'
    // stages: [
    //   { duration: '5m', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    //   { duration: '30m', target: 100 }, // stay at 100 users for 30 minutes
    //   { duration: '5m', target: 0 }, // ramp-down to 0 users
    // ],
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

    let dataBody = {
        "longitude": 0,
        "latitude": 0,
        "subtotal": 0,
        "deliveryFee": 0,
        "address": "123 Main St",
        "queue": "queue1",
        "items": [
            {
                "itemId": 12,
                "itemName": "Item Name",
                "itemPrice": 0,
                "itemImage": "https://example.com/image.jpg"
            }
        ]
    };

    let response = http.post(`${__ENV.BASE_URL}/orders`, JSON.stringify(dataBody), { headers: headers });

    check(response, {
        'Order created successfully': (r) => r.status === 201,
    });
}
