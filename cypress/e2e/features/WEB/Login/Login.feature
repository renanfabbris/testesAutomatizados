Feature: Login

  Scenario: Login válido
    Given o usuário está na página de login
    When o usuário insere o email
    And o usuário insere a senha
    And clica no botão de login
    Then é redirecionado para a página inicial