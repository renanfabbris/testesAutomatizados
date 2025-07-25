import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const email = Cypress.env('email_cadastro');
const senha = Cypress.env('senha_cadastro');
const url = Cypress.env('url');
if (!email || !senha || !url) {
    throw new Error('EMAIL_CADASTRO ou SENHA_CADASTRO ou URL não estão definidas nas variáveis de ambiente (.env)');
}

Given("o usuário está na página de login", () => {
    cy.visit(url)
})

When("o usuário preenche o campo Nome com {string}", (nome) => {
    cy.xpath("//input[@data-qa='signup-name']").clear().type(nome)
})


And("o usuário preenche o campo E-mail", () => {
    cy.xpath("//input[@data-qa='signup-email']").clear().type(email)
})

And("o usuário clica no botão Signup", () => {
    cy.xpath("//button[@data-qa='signup-button']").click()
})

And("o usuário seleciona o título", () => {
    cy.xpath("//input[@id='id_gender1']").click()
})

And("o usuário preenche o campo Senha", () => {
    cy.xpath("//input[@data-qa='password']").clear().type(senha)
})

And("o usuário seleciona {string} no campo Dia", (DiaNascimento) => {
    cy.xpath("//select[@data-qa='days']").select(DiaNascimento)
})

And("o usuário seleciona {string} no campo Mês", (MesNascimento) => {
    cy.xpath("//select[@data-qa='months']").select(MesNascimento)
})

And("o usuário seleciona {string} no campo Ano", (DiaNascimento) => {
    cy.xpath("//select[@data-qa='years']").select(DiaNascimento)
})

And("o usuário preenche o campo Primeiro Nome com {string}", (PrimeiroNome) => {
    cy.xpath("//input[@data-qa='first_name']").clear().type(PrimeiroNome)
})

And("o usuário preenche o campo Último Nome com {string}", (UltimoNome) => {
    cy.xpath("//input[@data-qa='last_name']").clear().type(UltimoNome)
})

And("o usuário preenche o campo Empresa com {string}", (Empresa) => {
    cy.xpath("//input[@data-qa='company']").clear().type(Empresa)
})

And("o usuário preenche o campo Endereço com {string}", (Endereco) => {
    cy.xpath("//input[@data-qa='address']").clear().type(Endereco)
})

And("o usuário seleciona o país {string}", (Pais) => {
    cy.xpath("//select[@id='country']").select(Pais)
})

And("o usuário preenche o campo Estado Província com {string}", (Provincia) => {
    cy.xpath("//input[@data-qa='state']").clear().type(Provincia)
})

And("o usuário preenche o campo Cidade com {string}", (Cidade) => {
    cy.xpath("//input[@data-qa='city']").clear().type(Cidade)
})

And("o usuário preenche o campo CEP com {string}", (CodigoPostal) => {
    cy.xpath("//input[@data-qa='zipcode']").clear().type(CodigoPostal)
})

And("o usuário preenche o campo Celular com {string}", (NumeroCelular) => {
    cy.xpath("//input[@data-qa='mobile_number']").clear().type(NumeroCelular)
})

And("o usuário clica no botão Create Account", () => {
    cy.xpath("//button[@data-qa='create-account']").click()
})

Then("a mensagem Account Created! é exibida", () => {
    cy.xpath("//b[text()='Account Created!']").invoke('text').then((texto) => {
        expect(texto.trim()).to.equal('Account Created!');
    });
})

And("o usuário clica no botão Continuar", () => {
    cy.xpath("//a[@data-qa='continue-button']").click()
})

And("o usuário é redirecionado para a página inicial", () => {
    cy.xpath("//a[@href='/logout']").should('be.visible')
});
