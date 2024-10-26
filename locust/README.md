# Locust

Locust is a Python-based load testing tool that lets you simulate user behavior on websites, APIs, and more.

### Maintainer & Contributor

<img src="./locust-creator.png" />

## Create virtual env

```
python3 -m venv venv
```
Run venv
```
source venv/bin/activate
```

## Installation

```
pip install locust
```

## Running Locust
```
locust -f my_script.py
```

Running without UI
```
locust -f locust_files/my_locust_file.py --headless -u 100 -r 5
```

## Terms

#### user
A user in Locust represents a simulated person or client interacting with your web application. Each user can perform actions like clicking buttons, filling out forms, or navigating through pages, just like a real person would.

You can define how many users you want to simulate in your test. For example, if you want to see how your website performs when 100 people are using it at the same time, you would set up 100 simulated users.

#### ramp up
Ramp-up refers to the way you gradually increase the number of users over time rather than starting all at once.

This is important because it helps you understand how your application behaves under increasing load. For example, instead of launching 100 users all at once, you might start with 10 users and then add 10 more every minute until you reach 100 users. This gradual increase helps you identify performance issues that might occur as the load increases.
