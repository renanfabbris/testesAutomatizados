Feature: Criar Login

  Scenario: Criar login válido
    Given o usuário está na página de login
    When o usuário preenche o campo Nome e E-mail
    And o usuário clica no botão Signup
    And o usuário preenche todos os campos do formulário
    And o usuário clica no botão Create Account
    Then a mensagem Account Created! é exibida
    And o usuário clica no botão Continuar
    And o usuário é redirecionado para a página inicial