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

Then("é exibido o resultado relacionado ao produto", () => {
    ProductsPage.verifyProductInfo();
});
