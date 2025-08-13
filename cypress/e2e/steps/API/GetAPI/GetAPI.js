import { APIPage } from '../../../../support/pages';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que a API está disponível', () => {
  APIPage.apiRequest()
});

When('o usuário faz uma requisição GET', () => {
  APIPage.getAPIRequest();
});

Then('o código de status deve ser {int}', (statusCode) => {
  APIPage.statusCodeAPI(statusCode);
});

And('o corpo da resposta deve conter o campo Name', () => {
  APIPage.verifyFieldName();
});
