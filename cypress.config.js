const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
require('dotenv').config();
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      return config;
    },
    specPattern: "cypress/e2e/step_definitions/**/*.feature"
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
