class RegisterPage {
    fillingInRegistrationForm() {
    cy.fixture('dadosUsuario').then((dados) => {
      if(dados.dadosPessoais.titulo = 'Mr'){
        cy.xpath("//input[@id='id_gender1']").click()
      }else{
        cy.xpath("//input[@id='id_gender2']").click()
      }
      cy.xpath("//input[@data-qa='password']").clear().type(dados.dadosPessoais.senha)
      cy.xpath("//select[@data-qa='days']").select(dados.dadosPessoais.diaNascimento)
      cy.xpath("//select[@data-qa='months']").select(dados.dadosPessoais.mesNascimento)
      cy.xpath("//select[@data-qa='years']").select(dados.dadosPessoais.anoNascimento)
      cy.xpath("//input[@data-qa='first_name']").clear().type(dados.dadosPessoais.primeiroNome)
      cy.xpath("//input[@data-qa='last_name']").clear().type(dados.dadosPessoais.ultimoNome)
      cy.xpath("//input[@data-qa='company']").clear().type(dados.dadosPessoais.empresa)
      cy.xpath("//input[@data-qa='address']").clear().type(dados.dadosPessoais.endereco)
      cy.xpath("//select[@id='country']").select(dados.dadosPessoais.pais)
      cy.xpath("//input[@data-qa='state']").clear().type(dados.dadosPessoais.provincia)
      cy.xpath("//input[@data-qa='city']").clear().type(dados.dadosPessoais.cidade)
      cy.xpath("//input[@data-qa='zipcode']").clear().type(dados.dadosPessoais.codigoPostal)
      cy.xpath("//input[@data-qa='mobile_number']").clear().type(dados.dadosPessoais.numeroCelular)
    })};

    btnCreatAccount(){
      cy.xpath("//button[@data-qa='create-account']").click()
    }

    verifyMessage(){
      cy.xpath("//b[text()='Account Created!']").invoke('text').then((texto) => {
        expect(texto.trim()).to.equal('Account Created!');
    });
    }

    btnContinue(){
      cy.xpath("//a[@data-qa='continue-button']").click()
    }
}

export default new RegisterPage();