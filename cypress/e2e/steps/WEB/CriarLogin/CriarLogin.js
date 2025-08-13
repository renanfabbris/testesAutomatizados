import { LoginPage, RegisterPage } from '../../../../support/pages';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given("o usuário está na página de login", () => {
    LoginPage.loginPage();
})

When("o usuário preenche o campo Nome e E-mail", () => {
    LoginPage.createNewLogin();
})

And("o usuário clica no botão Signup", () => {
    LoginPage.btnSignUP();
})

And("o usuário preenche todos os campos do formulário", () => {
    RegisterPage.fillingInRegistrationForm();
})

And("o usuário clica no botão Create Account", () => {
    RegisterPage.btnCreatAccount();
})

Then("a mensagem Account Created! é exibida", () => {
    RegisterPage.verifyMessage();
})

And("o usuário clica no botão Continuar", () => {
    RegisterPage.btnContinue();
})

And("o usuário é redirecionado para a página inicial", () => {
    LoginPage.verifyTextLogout();
});
