const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  env: {
    url: "https://it-place.si",
    cookie: "ENTER_HERE"
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
        },
    specPattern: 'cypress/integration/testiramo/*.js'
    //specPattern: 'cypress/integration/testiramo/BDD/*.feature'
  },
  
});
