Nome: Ronaiza Cardoso


Github: https://github.com/yesroh


Data: 1467919037992



# 1 - Explique qual é a definição de MVC, MVVM e MVP

## MVC:
### Model:
	Responsável pela leitura, escrita dos dados
## View:
   	Responsável pela disponibilização dos dados para a visualização do usuário final
### Controller:
	Responsáel por receber requisições e processá-las enviando para as models e views responsáveis

## MVVM:
### Model:
   Modelo de domínio de uma aplicação carregando as classes de negócio que serão utilizadas em uma determinada aplicação
### View:
   Define o que será apresentado na tela
### ViewModel:
   Disponibiliza a lógica de apresentação para a view

## MVP:
### Model:
  Defini os dados a serem mostrados e/ou alterados pelo usuário
### View:
  Exibe os dados
### Presenter:
  Possui papel de mediador entre o M e o V 

 
# 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados

```
html
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be Mean - Exercício Angular</title>
  </head>
  <body>

    <h1>Contato com o Usuário</h1>
    <form>
      <label for="name">Nome: <input type="text" data-ng-model="name"></label>
      <label for="telephone">Telefone: <input type="text" data-ng-model="telephone"></label>
      <label for="email">Email: <input type="text" data-ng-model="email"></label>
      <label for="address">Endereço: <input type="text" data-ng-model="address"></label>
    </form>

    <h3 style="color:red">{{name}}</h3>
    <p><b>Telefone:</b> {{telephone}}. <b>Email:</b> {{email}}. <b>Endereço:</b> {{address}}.</p>

    <script type="text/javascript" src="../../angular.min.js"></script>
    <script type="text/javascript">
      angular
        .module('BeMEAN', []);
    </script>
  </body>
</html>

```