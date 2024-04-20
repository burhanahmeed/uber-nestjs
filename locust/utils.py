def login(client):
    login_payload = {
        "username": "johndoe@example.com",
        "password": "password123"
    }
    response = client.post('/auth/login', json=login_payload)
    if response.status_code == 201:
         return response.json().get('token')
    else:
        print("Login failed")
        return None