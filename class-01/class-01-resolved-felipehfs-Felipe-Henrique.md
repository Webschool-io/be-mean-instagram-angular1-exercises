Felipe Henrique
https://github.com/felipehfs
21/01/2017 18:07

# Exercício 1
## O que significa MVC, MVW, MVMV?
-  View, view Model, Whatever(Qualquer coisa, pouco importa) - São reponsáveis pela apresentação dos nossos dados.
-  Model - Este possui nossas regras de negócios e a modelagem de nossos dados.
-  Controller - Este fica no meio entre view e model fazendo a intermediação. Toda operação
  do model passa antes pelo controller.

# Exercício 2
  """
  <!DOCTYPE html>
  <html lang="pt-br" >
      <head>
          <title>AngularJS</title>
          <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body ng-app>
          <div class="w3-container w3-black">
              <h1>Exercício 01 do módulo de AngularJS do webschools.io</h1>
          </div>
          <div class="w3-row">
              <form class="w3-col s6 w3-container w3-margin">
                  <label for="nome" class="w3-label">Nome</label>
                  <input type="text" name="nome" id="nome" ng-model="campo.nome" class="w3-input">
                  <label for="email" class="w3-label">E-mail</label>
                  <input type="email" name="email" id="email" ng-model="campo.email" class="w3-input">
                  <label for="telefone" class="w3-label">Telefone</label>
                  <input type="tel" name="telefone" id="telefone" ng-model="campo.tel" class="w3-input">
              </form>
          </div>
          <table class="w3-table-all w3-hoverable">
              <thead>
                  <tr class="w3-yellow">
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Telefone</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td ng-bind="campo.nome"></td>
                      <td ng-bind="campo.email"></td>
                      <td ng-bind="campo.tel"></td>
                  </tr>
              </tbody>
          </table>
          <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>
      </body>
  </html>
  """
