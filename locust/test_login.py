from locust import HttpUser, task

class LoginTest(HttpUser):

    @task
    def login(self):
        payload = {
            "username": "johndoe@example.com",
            "password": "password123"
        }
        response = self.client.post("/auth/login", json=payload)
        if response.status_code == 201:
            print("Login successful")
        else:
            print("Login failed")
