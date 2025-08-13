Feature: Incluir produto no carrinho

  Scenario: Incluir produto
    Given o usuário está logado na página de inicial e clica em Products
    When o usuário digita o nome do produto na barra de busca
    And clica no botão de lupa
    And clica em adicionar no carrinho
    And clica em ver carrinho
    Then é exibido o produto adicionado