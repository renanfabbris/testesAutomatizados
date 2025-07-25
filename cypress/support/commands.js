// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('fazerLogin', () => {
    const email = Cypress.env('email');
    const senha = Cypress.env('senha');
    const url = Cypress.env('url');
    if (!email || !senha) {
        throw new Error('EMAIL ou SENHA não estão definidas nas variáveis de ambiente (.env)');
      }
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(url)
    cy.xpath("//input[@data-qa='login-email']").clear().type(email)
    cy.xpath("//input[@data-qa='login-password']").clear().type(senha)
    cy.xpath("//button[@data-qa='login-button']").click()
    cy.xpath("//img[@alt='Website for automation practice']").should('be.visible') });