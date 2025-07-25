import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let response;
const url_api = Cypress.env('url_api');
if (!url_api) {
        throw new Error('URL_API não está definida nas variáveis de ambiente (.env)');
      }

Given('que a API está disponível', () => {
  cy.request(url_api)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
});

When('o usuário faz uma requisição GET', () => {
  cy.request(url_api).then((res) => {
    response = res;
  });
});

Then('o código de status deve ser {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

And('o corpo da resposta deve conter o campo Name', () => {
        const listName = response.body.data.list.name;
        cy.log('Nome da lista:', listName);
        expect(listName).to.be.a('string').and.not.be.empty;
});
