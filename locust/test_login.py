from locust import HttpUser, task, between

class LoginTest(HttpUser):
    wait_time = between(1, 3)

    @task
    def login(self):
        payload = {
            "username": "johndoe@example.com",
            "password": "password123"
        }
        response = self.client.post("/auth/login", json=payload)
        if response.status_code == 200:
            print("Login successful")
        else:
            print("Login failed")
