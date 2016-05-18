# AngularJS - Aula 01 - Exercício
autor: Gustavo Prado

## 1 - Explique qual é a definição de MVC, MVVM e MVP

MVC: Model View Controller - Model é a camada de dados, Controller manipula os dados
e a View apresenta os dados.

MVVM: Model-View View-Model - ViewModel disponibiliza para a view uma lógica de
apresentaçao. As camadas Model e View se comunicam através desta camada ($scope).

MVP: Model View Presenter - O Presenter faz a comunicaçao entre Model e View.

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <title>Exercício 01 - AngularJS</title>

  <style>
    .jumbotron{
      width: 400px;
      text-align: center;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
    }
  </style>

  <script>
    angular.module("BeMEAN", []);
  </script>
</head>
<body data-ng-app="BeMEAN">
  <div class="jumbotron">
    <form>
      <div class="form-group">
        <label for="name">Nome: </label>
        <input type="text" class="form-control" name="name" data-ng-model="name">
      </div>

      <div class="form-group">
        <label for="postalCode">CEP: </label>
        <input type="text" class="form-control" name="postalCode" data-ng-model="postalCode">
      </div>

      <div class="form-group">
        <label for="city">Cidade: </label>
        <input type="text" class="form-control"name="city" data-ng-model="city">
      </div>

      <div class="form-group">
        <label for="state">Estado: </label>
        <input type="text" class="form-control"name="state" data-ng-model="state">
      </div>
    </form>

    {{name}} <br/>
    {{postalCode}}-
    {{city}}-
    {{state}}

  </div>

</body>
</html>
