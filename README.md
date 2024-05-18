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

## Options
#### VUS
represent the number of concurrent request / concurrent user that will hit the API

#### Iteration
represent the number of request being made to the API

#### Duration
the duration of how long test should be run

#### Thresholds
some set of rules to determine if the test is successful or not

#### Stages
to determine the number of user increment and decrement based on time


## Env variable
place this piece of code in the code `__ENV.K6_DURATION`

usage 

```
K6_DURATION=10s k6 run script.js
```

## Life cycle
https://k6.io/docs/using-k6/test-lifecycle/#overview-of-the-lifecycle-stages

```
// 1. init code

export function setup() {
  // 2. setup code
}

export default function (data) {
  // 3. VU code
}

export function teardown(data) {
  // 4. teardown code
}
```

---

Slide: https://docs.google.com/presentation/d/1v5RqN5QDJhUxRz5FfumMfa83aA-nbcO1ysrc6LXfUQ8/edit?usp=sharing