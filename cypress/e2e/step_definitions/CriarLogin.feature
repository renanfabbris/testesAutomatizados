Feature: Criar Login

Scenario: Criar login válido

  Given o usuário está na página de login
  When o usuário preenche o campo Nome com "QA Teste"
  And o usuário preenche o campo E-mail
  And o usuário clica no botão Signup
  And o usuário seleciona o título
  And o usuário preenche o campo Senha
  And o usuário seleciona "1" no campo Dia
  And o usuário seleciona "January" no campo Mês
  And o usuário seleciona "1999" no campo Ano
  And o usuário preenche o campo Primeiro Nome com "Nome QA"
  And o usuário preenche o campo Último Nome com "Teste 01"
  And o usuário preenche o campo Empresa com "Empresa Teste"
  And o usuário preenche o campo Endereço com "Robson Street, 1BC"
  And o usuário seleciona o país "Canada"
  And o usuário preenche o campo Estado Província com "British Columbia"
  And o usuário preenche o campo Cidade com "Vancouver"
  And o usuário preenche o campo CEP com "V6B 1T5"
  And o usuário preenche o campo Celular com "+1 (437) 812-3946"
  And o usuário clica no botão Create Account
  Then a mensagem Account Created! é exibida
  And o usuário clica no botão Continuar
  And o usuário é redirecionado para a página inicial
