import requests
from locust import HttpUser, task
from utils import login

class PlaceOrderTest(HttpUser):
    def on_start(self):
        self.auth_token = login(self.client)

    @task
    def create_order(self):
        headers = {
            'Authorization': f"Bearer {self.auth_token}",
        }
        data = {
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
        }
        response = self.client.post('/orders', headers=headers, json=data)
        if response.status_code == 201:
            print('Order created successfully')
        else:
            print('Failed to create order')