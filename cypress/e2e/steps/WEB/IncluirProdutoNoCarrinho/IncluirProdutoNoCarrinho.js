import { LoginPage, ProductsPage, MenuPage } from '../../../../support/pages';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("o usuário está logado na página de inicial e clica em Products", () => {
    LoginPage.loginPage();
    LoginPage.login();
    MenuPage.menuProducts();
})

When("o usuário digita o nome do produto na barra de busca", () => {
    ProductsPage.searchProduto();
})

And("clica no botão de lupa", () => {
    ProductsPage.btnSurch();
})

And("clica em adicionar no carrinho", () => {
    ProductsPage.btnAddToCart();
})

And("clica em ver carrinho", () => {
    ProductsPage.btnViewToCart();
})

Then("é exibido o produto adicionado", () => {
    ProductsPage.verifyText();
});
