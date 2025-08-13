import { LoginPage } from '../../../../support/pages';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("o usuário está na página de login", () => {
    LoginPage.loginPage();
})

When("o usuário insere o email", () => {
    LoginPage.enterUserName();
})

And("o usuário insere a senha", () => {
    LoginPage.enterPassword();
})

And("clica no botão de login", () => {
    LoginPage.btnLogin();
})

Then("é redirecionado para a página inicial", () => {
    LoginPage.verifyTextLogout();
});