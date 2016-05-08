# AngularJS - Aula 01 - Exercício
**user:** https://github.com/guilhermependezza
**autor:** Guilherme Pendezza de Sousa
**date:** 1462283273102

## 1 - Explique qual é a definição de MVC, MVVM e MVP

MVC: O Model-View-Controller é um padrão arquitetural de software que visa separar as camadas da aplicação de acordo com a sua responsabilidade:

Model - Representa os dados e as regras da aplicação
View - Mostra na tela os dados pertinentes vindos do Model
Controller - Recebe os inputs e os transforma em comandos para o model ou a View

MVVM: Outro padrão de projeto arquitetural que possui um binder entre o Model e a View chamado de View Model. O view model expõe métodos publicos para a manipulação do model e é uma representação do model usado para a exibição na view.

MVP: Padrão derivado do MVC onde existe uma camada chamada Presenter que é responsável por buscar os dados no model e formatar para a exibição na view. É responsabilidade do Presenter receber as atualizá-las no model.

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Form angular - Be MEAN</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    <script type="text/javascript">
      angular.module("class1", []);
    </script>
  </head>
  <body ng-app="class1">
    <form>
      <label for="nome">Nome:
        <input type="text" name="nome" ng-model="nome">
      </label>
      <label for="idade">Idade:
        <input type="text" name="idade" ng-model="idade">
      </label>
      <label for="email">E-mail:
        <input type="email" name="email" ng-model="email">
      </label>
    </form>

    <p>
      Nome: {{nome}}
    </p>
    <p>
      Idade: {{idade}}
    </p>
    <p>
      E-  mail: {{email}}
    </p>
  </body>
</html>
