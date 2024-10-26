from locust import HttpUser, task, between
from utils import login

class ListItemTest(HttpUser):
    wait_time = between(1, 5)

    def on_start(self):
        self.auth_token = login(self.client)

    @task
    def list_item(self):
        headers = {"Authorization": f"Bearer {self.auth_token}"}
        response = self.client.get("/items", headers=headers)
        if response.status_code == 200:
            print("List item successful")
        else:
            print("List item failed")

    @task
    def get_list_item_w_query_id(self):
        headers = {"Authorization": f"Bearer {self.auth_token}"}
        for i in range(13, 17):
            response = self.client.get(f"/items?id={i}", headers=headers, name="/item-with-query-id")
            if response.status_code == 200:
                print(f"Get list item with query id {i} successful")
            else:
                print(f"Get list item with query id {i} failed")
