# AngularJS 1.5.x - Aula 01 - Exercício  
**user:** [MagnumCortez](https://github.com/MagnumCortez)  
**autor:** Magnum cortez


## Explique qual a definição de MVC, MVVM e MVP.  

### MVC - Model View Controller  

**MVC** é um padrão de arquitetura de software, na qual separa a aplicação em 3 camadas (Model, View e Controller).

### MVVM - Model View ViewModel  

MVVM se assemelha em alguns aspectos o MVC (Model View Controller) na qual permite ter uma visão clara da separação da Interface com o usuário( View ), sua lógica de apresentação ( ViewModel) e os seus Dados (Model). Com a separação de responsabilidades e desacoplamento conseguesse evoluir e manter melhor as aplicações.

## MVP - Model View Presenter  

**MVP** é uma derivação do MVC e também usado para construir principalmente interfaces gráficas. Em MVP a camada Presenter assume a função de mediadora (executada pelo Controller em MVC).


## Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, **formatados**.


`arquivo.html`  

```
<!DOCTYPE html>
<html lang="en" data-ng-app="BeMEAN">
<head>
    <meta charset="utf-8">
    <title>Class 01</title>
</head>
<body>

<label for="Name">Name: </label><br>
<input type="text" name="Name" ng-model="Name"/><br>
<label for="LastName">Last Name: </label><br>
<input type="text" name="LastName" ng-model="LastName"/><br>
<label for="LastName">Course: </label><br>
<select ng-model="class">
    <option value="Angular 1">Angular 1</option>
    <option value="Node.js">Node.js</option>
    <option value="PHP">PHP</option>
    <option value="MongoDB">MongoDB</option>
</select>
<br><br>

<span>Seu Nome é: <strong>{{Name}} {{LastName}}</strong></span><br>
<span>{{Name}} você está matriculado no curso de <strong>{{class}}</strong></span>

<script src="angular.min.js"></script>
<script>angular.module('BeMEAN',[])</script>
</body>
</html>
```