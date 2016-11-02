# authentication-popups-github

[![Build Status](https://travis-ci.org/feathersjs/authentication-popups-github.png?branch=master)](https://travis-ci.org/feathersjs/authentication-popups-github)
[![Code Climate](https://codeclimate.com/github/feathersjs/authentication-popups-github/badges/gpa.svg)](https://codeclimate.com/github/feathersjs/authentication-popups-github)
[![Test Coverage](https://codeclimate.com/github/feathersjs/authentication-popups-github/badges/coverage.svg)](https://codeclimate.com/github/feathersjs/authentication-popups-github/coverage)
[![Dependency Status](https://img.shields.io/david/feathersjs/authentication-popups-github.svg?style=flat-square)](https://david-dm.org/feathersjs/authentication-popups-github)
[![Download Status](https://img.shields.io/npm/dm/authentication-popups-github.svg?style=flat-square)](https://www.npmjs.com/package/authentication-popups-github)

> Server plugin for implementing OAuth2 popup-based GitHub logins

## Installation

```
npm install authentication-popups-github --save
```

## Documentation

Please refer to the [authentication-popups-github documentation](http://docs.feathersjs.com/) for more details.

## Complete Example

Here's an example of a Feathers server that uses `authentication-popups-github`. 

```js
const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const errorHandler = require('feathers-errors/handler');
const plugin = require('authentication-popups-github');

// Initialize the application
const app = feathers()
  .configure(rest())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Initialize your feathers plugin
  .use('/plugin', plugin())
  .use(errorHandler());

app.listen(3030);

console.log('Feathers app started on 127.0.0.1:3030');
```

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
