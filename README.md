<p align="center">
  <a href="http://uber.com/" target="blank"><img src="https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg" width="200" alt="Nest Logo" /></a>
</p>

## Features
- Login `/auth/login`
- Sign up `/auth/signup`
- List item `/items`
- Get one item `/items/:id`
- Place an order `/orders`

## Prerequisite

- NodeJS > v18
- MySQL
- Python3
- K6
- Prisma ORM

## Load Testing

### K6
To perform load testing with K6, first install K6 following the instructions at https://k6.io/docs/get-started/installation/.

Then, run your K6 test scripts with:

```
k6 run script.js
```

Replace script.js with the path to your K6 test script.

**Explaination**
> VU represent the number of concurrent request / concurrent user that will hit the API

> Iteration represent the number of request being made to the API