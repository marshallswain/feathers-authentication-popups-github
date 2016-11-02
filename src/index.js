const makeDebug = require('debug');
const debug = makeDebug('authentication-popups-github');
const GithubStrategy = require('passport-github').Strategy;
const oauth2 = require('feathers-authentication').OAuth2Service;
const handleOAuthPopups = require('authentication-popups/express');

module.exports = function (githubConfig, cookieConfig) {
  debug('Initializing authentication-popups-github plugin');

  if (!githubConfig) {
    throw new Error('You must pass a GitHub configuration object as the first argument.');
  }
  if (!cookieConfig) {
    throw new Error('You must provide a cookie name {String} or an object with a `name` property to the authentication-popups-github plugin.');
  }

  return function () {
    const app = this;

    githubConfig.strategy = GithubStrategy;

    app.configure(oauth2(githubConfig));
    app.get(githubConfig.successRedirect, handleOAuthPopups(cookieConfig));
  };
}
