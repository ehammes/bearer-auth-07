# LAB - Class 07

## Project: bearer-auth-07

### Author: Elizabeth Hammes

### Problem Domain  

auth-server is able to allow a user to create an account as well as to handle Basic Authentication (user provides a username + password). When a “good” login happens, the user is considered to be “authenticated” and our auth-server generates a JWT signed “Token” which is returned to the application

We will now be using that Token to re-authenticate users to shield access to any route that requires a valid login to access.

### Links and Resources

- [ci/cd](https://github.com/ehammes/bearer-auth-07/actions) (GitHub Actions)

### Setup

#### `.env` requirements (where applicable)

- `PORT` - 3001
- SECRET='TEST_SECRET'

#### How to initialize/run your application (where applicable)

- nodemon

#### How to use your library (where applicable)

#### Features / Routes

Specific routes to hit

- POST : `/signup`
- POST : `/signin`
- GET : `/users`
- GET : `/secret`

#### Tests

- Run tests using `npm test`
