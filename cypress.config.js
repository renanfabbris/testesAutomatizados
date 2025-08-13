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
    email: process.env.EMAIL,
    senha: process.env.SENHA,
    url: process.env.URL,
    url_api: process.env.URL_API,
    email_cadastro: process.env.EMAIL_CADASTRO,
    senha_cadastro: process.env.SENHA_CADASTRO
  },
});
