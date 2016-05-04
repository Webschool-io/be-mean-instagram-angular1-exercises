# AngularJS - Aula 01 - Exercício  
**user:** [gkal19](https://github.com/gkal19)  
**autor:** Gabriel Kalani

## 1 - Explique qual é a definição de MVC, MVVM e MVP

Model View Controller.
-`Model` é a camada de dados
-`Controller` manipula
-`View` apresenta os dados

Model View ViewModel
-`ViewModel` é aquela que disponibiliza para a `view` uma tal "lógica de apresentação"
-`Model & View` se comunicam com a `ViewModel` ou atravé dela.
-`ViewModel` recebe notificações e realiza alguma ação.

Model View Presenter 
-`Presenter` faz a comunicaçao entre Model e View

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <title>BeMEAN AngularJS</title>
</head>
<body data-ng-app="BeMEAN">
  <div class="container">
    <form class="">
      <div class="form-group">
        <label for="name">Nome: </label>
        <input type="text" class="form-control" name="name" data-ng-model="name">
      </div>

      <div class="form-group">
        <label for="email">E-mail: </label>
        <input type="text" class="form-control"name="email" data-ng-model="email">
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

    <label>Perfil:</label>
    <p>Nome: {{name}}</p>
    <p>E-mail: {{email}}</p>
    <p>Localização: {{city}}-{{state}}</p>
  </div>

  <script>
    angular.module("BeMEAN", []);
  </script>
</body>
</html>
