# feathers-authentication-popups-github

[![Greenkeeper badge](https://badges.greenkeeper.io/feathersjs/feathers-authentication-popups-github.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/feathersjs/feathers-authentication-popups-github.png?branch=master)](https://travis-ci.org/feathersjs/feathers-authentication-popups-github)
[![Code Climate](https://codeclimate.com/github/feathersjs/feathers-authentication-popups-github/badges/gpa.svg)](https://codeclimate.com/github/feathersjs/feathers-authentication-popups-github)
[![Test Coverage](https://codeclimate.com/github/feathersjs/feathers-authentication-popups-github/badges/coverage.svg)](https://codeclimate.com/github/feathersjs/feathers-authentication-popups-github/coverage)
[![Dependency Status](https://img.shields.io/david/feathersjs/feathers-authentication-popups-github.svg?style=flat-square)](https://david-dm.org/feathersjs/feathers-authentication-popups-github)
[![Download Status](https://img.shields.io/npm/dm/feathers-authentication-popups-github.svg?style=flat-square)](https://www.npmjs.com/package/feathers-authentication-popups-github)

> Server plugin for implementing OAuth2 popup-based GitHub logins

## Installation

```
npm install feathers-authentication-popups-github --save
```

## Documentation

Please refer to the [feathers-authentication-popups-github documentation](http://docs.feathersjs.com/ecosystem/feathers-authentication-popups-github/) for more details.

## Complete Example

Here's an example of a Feathers server that uses `feathers-authentication-popups-github`. 

```js
const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const errorHandler = require('feathers-errors/handler');
const auth = require('feathers-authentication');
const githubAuth = require('feathers-authentication-popups-github');

// Initialize the application
const app = feathers()
  .configure(rest())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Initialize your feathers plugin
  .use(errorHandler());

// First you need a config
var config = {
  "host": "localhost",
  "port": 3030,
  "public": "../public/",
  "auth": {
    "cookie": {
      "name": "feathers-jwt",
      "enabled": true,
      "secure": false
    },
    "token": {
      "secret": "your token secret here"
    },
    "jwt": {
      "issuer": "feathers",
      "algorithm": "HS256",
      "expiresIn": "1d"
    },
    "user": {
      "service": "/api/users",
      "idField": "_id",
      "usernameField": "email", 
      "passwordField": "password" 
    },
    "local": {},
    "github": {
      "provider": "github",
      "service": "auth/github",
      "successRedirect": "/auth/success",
      "callbackURL": "/auth/github/callback",
      "clientID": "your client id from GitHub",
      "clientSecret": "your client secret from GitHub",
      "permissions": {
        "scope": []
      }
    }
  }
};

app.configure(auth())
  // Enable GitHub popup-based OAuth.
  .configure(githubAuth(config.github, config.cookie));


app.listen(3030);

console.log('Feathers app started on 127.0.0.1:3030');
```

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
