// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://webtours.load-test.ru:1090/cgi-bin/nav.pl?in=home',
    specPattern: 'cypress/integration/login1.spec.js',
  },
});
