from locust import HttpUser, task
from utils import login

class GetSingleItemTest(HttpUser):
    def on_start(self):
        self.auth_token = login(self.client)

    @task(2)
    def get_one_item_15(self):
        headers = {"Authorization": f"Bearer {self.auth_token}"}
        response = self.client.get("/items/15", headers=headers)
        if response.status_code == 200:
            print("Get one item successful")
        else:
            print("Get one item failed")
            
    @task(8)
    def get_one_item_14(self):
        headers = {"Authorization": f"Bearer {self.auth_token}"}
        response = self.client.get("/items/14", headers=headers)
        if response.status_code == 200:
            print("Get one item successful")
        else:
            print("Get one item failed")