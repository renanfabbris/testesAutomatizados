import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const email = Cypress.env('email');
const senha = Cypress.env('senha');
const url = Cypress.env('url');
if (!email || !senha || !url) {
    throw new Error('EMAIL ou SENHA ou URL não estão definidas nas variáveis de ambiente (.env)');
}

Given("o usuário está na página de login", () => {
    cy.visit(url)
})

When("o usuário insere o email", () => {
    cy.xpath("//input[@data-qa='login-email']").clear().type(email)
})

And("o usuário insere a senha", () => {
    cy.xpath("//input[@data-qa='login-password']").clear().type(senha)
})

And("clica no botão de login", () => {
    cy.xpath("//button[@data-qa='login-button']").click()
})

Then("é redirecionado para a página inicial", () => {
    cy.xpath("//img[@alt='Website for automation practice']").should('be.visible')
});