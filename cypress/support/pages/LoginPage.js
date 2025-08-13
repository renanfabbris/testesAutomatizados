class LoginPage {
  loginPage() {
    const url = Cypress.env('url');
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(url)
  };

  login() {
    cy.fixture('dadosUsuario').then((dados) => {
      cy.xpath("//input[@data-qa='login-email']").clear().type(dados.login.email)
      cy.xpath("//input[@data-qa='login-password']").clear().type(dados.login.senha)
      cy.xpath("//button[@data-qa='login-button']").click()
      cy.xpath("//a[@href='/logout']").should('be.visible')
    })
  };

  createNewLogin() {
    cy.fixture('dadosUsuario').then((dados) => {
      cy.xpath("//input[@data-qa='signup-name']").clear().type(dados.dadosPessoais.nome);
      cy.xpath("//input[@data-qa='signup-email']").clear().type(dados.dadosPessoais.email);
    })
  };

  btnSignUP() {
    cy.xpath("//button[@data-qa='signup-button']").click()
  }

  enterUserName() {
    cy.fixture('dadosUsuario').then((dados) => {
      cy.xpath("//input[@data-qa='login-email']").clear().type(dados.login.email);
    })
  };

  enterPassword() {
    cy.fixture('dadosUsuario').then((dados) => {
      cy.xpath("//input[@data-qa='login-password']").clear().type(dados.login.senha);
    })
  };

  btnLogin() {
    cy.xpath("//button[@data-qa='login-button']").click()
  }

  verifyTextLogout(){
    cy.xpath("//a[@href='/logout']").should('be.visible')
  }

}



export default new LoginPage();