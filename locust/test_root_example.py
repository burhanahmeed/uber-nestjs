from locust import HttpUser, task

class RootTest(HttpUser):

  @task
  def root(self):
    response = self.client.get("/")
    if response.status_code == 200:
      print("Root successful")
    else:
      print("Root failed")