Feature: Teste API

Scenario: Testar endpoint Trello
  Given que a API está disponível
  When o usuário faz uma requisição GET
  Then o código de status deve ser 200
  And o corpo da resposta deve conter o campo Name