# AngularJS - Aula 01 - Exercício

## 1- Qual a definição de MVC, MVVM e MVP?

### MVC

É um padrão de arquitetura que "quebra" a aplicação em três camadas diferentes:

- **Model**: é a camada responsável pela manipulação dos dados e provendo meios de acesso aos mesmos, tanto para escrita quanto para leitura.

- **View**: é a camada responsável pela apresentação dos dados, ou seja, templates. É nela, também, onde os usuários interagem com a aplicação.

- **Controller**: é a camada responsável por toda a lógica da aplicação.

### MVVW

É um padrão que estabelece uma separação mais clara das responsabilidades de uma aplicação. A camada de model e view não se conhecem. A view conhece a viewModel e se comunica com a mesma através de binds, notificando sobre a ocorrência de eventos e disparando comandos. Através desses binds, a viewModel realiza ações no model: recuperando, inserindo ou atualizando dados.

### MVP

É um padrão, baseado no MVC, onde o model é a camada que trata das regras de negócio; a views faz a interface com o usuário (templates) e o presenter (P) faz o papel do controller.

## 2- Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Exercício 01 - Angular</title>
  <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,900|Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>
<body data-ng-app="address-book">
  <div class="container">
    <h1 class="page-title">Seus dados pessoais</h1>

    <form class="form-horizontal">
      <div class="form-group">
        <label for="name" class="col-sm-2 control-label">Nome</label>
        <div class="col-xs-2">
          <input type="text" class="form-control" id="name" placeholder="Seu nome" data-ng-model="name">
        </div>
      </div>

      <div class="form-group">
        <label for="surname" class="col-sm-2 control-label">Sobrenome</label>
        <div class="col-xs-3">
          <input type="text" class="form-control" id="surname" placeholder="sobrenome" data-ng-model="surname">
        </div>
      </div>

      <div class="form-group">
        <label for="address" class="col-sm-2 control-label">Endereço</label>
        <div class="col-xs-5">
          <input type="text" class="form-control" id="address" placeholder="Sua rua e número" data-ng-model="address">
        </div>
      </div>

      <div class="form-group">
        <label for="complement" class="col-sm-2 control-label">Complemento</label>
        <div class="col-xs-2">
          <input type="text" class="form-control" id="complement" placeholder="Complemento" data-ng-model="complement">
        </div>
      </div>

      <div class="form-group">
        <label for="city" class="col-sm-2 control-label">Cidade</label>
        <div class="col-xs-4">
          <input type="text" class="form-control" id="city" placeholder="Cidade" data-ng-model="city">
        </div>
      </div>

      <div class="form-group">
        <label for="state" class="col-sm-2 control-label">Estado</label>
        <div class="col-xs-1">
          <input type="text" class="form-control" id="state" placeholder="SP" data-ng-model="state">
        </div>
      </div>
    </form>

    <div class="panel panel-success">
      <div class="panel-heading"><strong>Confira os dados informados:</strong></div>
      <div class="panel-body">
        <p><span class="col-xs-12"><strong>Nome: </strong>{{name}} {{surname}}</span></p>
        <p><span class="col-xs-6"><strong>Endereço: </strong>{{address}}</span> <span class="col-xs-6"><strong>Complemento: </strong>{{complement}}</span></p>
        <p><span class="col-xs-4"><strong>Cidade: </strong>{{city}}</span> <span class="col-xs-2"><strong>Estado: </strong>{{state}}</span></p>
      </div>
    </div>
  </div>
  <script src="angular.min.js"></script>
  <script>
    angular.module('address-book', []);
  </script>
</body>

</html>