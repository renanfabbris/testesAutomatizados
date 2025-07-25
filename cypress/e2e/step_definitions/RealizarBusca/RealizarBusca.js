import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Before(() => {
    cy.fazerLogin();
});

Given("o usuário está logado na página de inicial e clica em Products", () => {
    cy.xpath("//li/a[@href='/products']").click()
})

When("o usuário digita o termo {string} na barra de busca", (textoBusca) => {
    cy.xpath("//input[@id='search_product']").click()
    cy.xpath("//input[@id='search_product']").clear().type(textoBusca)
})

And("clica no botão de lupa", () => {
    cy.xpath("//button[@id='submit_search']").click()
})

Then("é exibido o resultado relacionado ao {string}", (texto) => {
    cy.xpath("//div[@class='productinfo text-center']/p")
        .should('have.text', texto)
});
