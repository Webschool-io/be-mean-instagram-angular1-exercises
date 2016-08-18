# AngularJS - Aula 01 - Exercício  
**user:** [tuchedsf](https://github.com/tuchedsf)  
**autor:** Diego Ferreira   
**data:** 1468453652656

## 1 - Explique qual é a definição de MVC, MVVM e MVP

######MVC ( Model / View / Controller )
Model - é a camada dos modelos da aplicação, ou seja, camada onde são encapsulados a a lógica de negócios e os dados.

View - é a camada de visão, parte responsável pela apresentação para o cliente, ou seja, camada que o usuário enxerga.

Controller - é a camada de controle, esta camada realiza a comunicação entre a view e o model, e realiza o controle das requisições que são feitas.

###### MVVM (Model / View / ViewModel )
Model - é a camada dos modelos da aplicação, ou seja, camada onde são encapsulados a a lógica de negócios e os dados.

View - é a camada de visão, parte responsável pela apresentação para o cliente, ou seja, camada que o usuário enxerga.

ViewModel - A responsabilidade da camada ViewModel é disponibilizar para a View uma lógica de apresentação. Ou seja, ela é responsável por implementar propriedades e comandos que o controller da View irá utilizar para poder definir a forma e como renderizar a view.

Neste modelo a View atravéz do databinding interage com a ViewModel notificando a ocorrência de eventos e o disparo de comandos. A ViewModel por sua vez, responde a esta notificação realizando  alguma ação no modelo; seja obtendo alguma dado, atualizando ou inserindo informações no modelo.

###### MVP ( Model / View / Presenter )

Model - é a camada dos modelos da aplicação, ou seja, camada onde são encapsulados a a lógica de negócios e os dados.

View - é a camada de visão, parte responsável pela apresentação para o cliente, ou seja, camada que o usuário enxerga.

Presenter - é a camada similar a camada ViewModel do modelo MVVM, sua função é fazer a ligação entre  a camada de modelo e a camada de visão, possuindo um papel de mediador ou seja, toda vez que há uma mudança no modelo ele é encarregado de atualizar a view mantendo sempre o sincronismo entre a camada de visão e a camada de modelo.

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```html 
<!DOCTYPE html>
<html lang="en" data-ng-app="exerc1">
<head>
    <title>Exerc&iacute;cio 1</title>
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>
<body class="container">

<div class="panel panel-default">
  <div class="panel-heading">
  <h2>Cadastro time Cora&ccedil;&atilde;o</h2>
  <div class="row">
  <div class="col-lg-4">
  <div class="input-group">
  <span class="input-group-addon" id="basic-addon1">Nome:</span>
  <input type="text" class="form-control" placeholder="Informe o Nome" aria-describedby="basic-addon1" name="name" data-ng-model="name">
    </div>
  </div>
  <div class="col-lg-4">
  <div class="input-group">
  <span class="input-group-addon" id="basic-addon1">Time Cora&ccedil;&atilde;o:</span>
  <input type="text" class="form-control" placeholder="Informe o Time" aria-describedby="basic-addon1" name="time" data-ng-model="time">
    </div>
  </div>
  <div class="col-lg-4">
  <div class="input-group">
  <span class="input-group-addon" id="basic-addon1">Idade:</span>
  <input type="text" class="form-control" placeholder="Informe a idade" aria-describedby="basic-addon1" name="idade" data-ng-model="idade">
    </div>
  </div>
</div>
  </div>
  <div class="panel-body">
    <h3>Resultado</h3>
    <h4>Nome: <span class="label label-primary">{{name}}</span></h4>
    <h4>Time: <span class="label label-success">{{time}}</span></h4>
    <h4>Idade: <span class="label label-info">{{idade}}</span></h4>
  </div>
</div>
<script>
        angular.module('exerc1', []);
</script>
</body>
</html>`
```