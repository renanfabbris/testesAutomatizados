const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
require('dotenv').config();
module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      return config;
    },
    
  },
  env: {
    url: process.env.URL,
    url_api: process.env.URL_API
  },
});
