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

And("clica em adicionar no carrinho", () => {
    cy.xpath("//div[@class='productinfo text-center']/a[text()='Add to cart']").click()
})

And("clica em ver carrinho", () => {
    cy.xpath("//p/a/u[text()='View Cart']").click()
})

And("clica em Proceed to Checkout", () => {
    cy.xpath("//a[@class='btn btn-default check_out']").click()
})

Then("é exibido o produto adicionado {string}", (NomeProduto) => {
    cy.xpath("//h4/a")
        .should('have.text', NomeProduto)
});
