*user:** [willianlauber](https://github.com/willianlauber)  
**autor:** Willian Lauber   
**data:** 1475176591
Data: 29/9/2016

# 1 - Explique qual é a definição de MVC, MVVM e MVP

## MVC:
### Model:
   É a camada onde estão os artefatos responsáveis pela leitura/escrita dos dado bem como sua validação.
### View:
   Define a aparência da interface e sua estrutura, estando diretamente em contato com o usuário.
### Controller:
   Responsável pelo controle das models, requisições e views.

## MVVM:
### Model:
   Responsavel pela lógica de negócios e pelos modelos de dados.
### View:
   Define a aparência da interface e sua estrutura, estando diretamente em contato com o usuário.
### ViewModel:
   É a cola entre a view e model oferece à view uma lógica de apresentação.

## MVP:
### Model:
  Responsável pela lógica de negócios e pelos modelos de dados.
### View:
  Define a aparência da interface e sua estrutura, estando diretamente em contato com o usuário.
### Presenter:
  É a cola entre a view e model, fomentando o denominado "data binding".

--------------------------------------------------------------------------------------------------------------------
# 2 - Crie uma aplicação com um nome e um formulário onde os dados colocados nele sejam mostrados logo abaixo, formatados.


```html
<!DOCTYPE html>
<html data-ng-app="Aula1">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    <title>{{title}}</title>
    <style>

    .form-group {
      color:white;
      background: navy;
      padding: 40px;
      max-width: 600px;
      margin: 40px auto;
      border-radius: 4px;
      box-shadow: 0 1px 10px 4px blue;
    }
    </style>
  </head>

  <body class="container">

        <form>
          <div class="form-group">
            <label for="titulo">Titulo: </label>
            <input type="input" value="" name="titulo" placeholder="Titulo" ng-model="title"></input> <br>
            <label for="name">Nome: </label>
            <input type="input" value="" ng-model="nome" name="some" placeholder="Nome"></input> <br>
            <label for="sobrenome">Sobrenome: </label>
            <input type="input" value="" ng-model="sobrenome" name="sobrenome" placeholder="Sobrenome"></input> <br>
            <label for="pais">Pais: </label>
            <input type="input" value="" ng-model="pais" name="pais" placeholder="Pais"></input> <br>
          </div>
        </form>

        <p class="text-info">Olá {{nome}} {{sobrenome}} como é morar no/a {{pais}} </p>

        <script>
          angular.module("Aula1", []);
        </script>
  </body>
</html>
