Feature: Buscar produtos

  Scenario: Realizar Busca
    Given o usuário está logado na página de inicial e clica em Products
    When o usuário digita o nome do produto na barra de busca
    And clica no botão de lupa
    Then é exibido o resultado relacionado ao produto