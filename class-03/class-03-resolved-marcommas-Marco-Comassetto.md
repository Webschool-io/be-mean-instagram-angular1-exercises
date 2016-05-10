```html
<!doctype html>
<html lang="pt-br" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <title>BeMEAN AngularJS - Ex 3</title>
</head>
<body data-ng-controller="ProfessorController as Professor">
  <div class="container">

        <h2>Exercício 1</h2>
        <div >
          <h2>{{Professor.titulo}}</h2>

          <ul>
            <li data-ng-repeat="professor in Professor.professores">
              {{ professor.nome }} - {{professor.email}} 
            </li>
          </ul>
        </div>
         
        <h2>Exercício 2</h2>
        <ul>
          <li data-ng-repeat="professor in Professor.professores">
            {{ professor.nome }} - {{professor.email}} - {{professor.idade}} - {{professor.idade | confereIdade}}
          </li>
        </ul>

  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

  <script>
    angular.module("BeMEAN", [])
      .controller('ProfessorController', ProfessorController)

      .filter('confereIdade', function() {
        return function(text) {
          if (text) {
            if (isNaN(text)) return 'Idade inválida';
            if (text >= 18) return 'Maior de idade';
            else return 'Menor de idade';
          }
        }
      });

    function ProfessorController(){
      var vm = this;
      vm.titulo = "BeMEAN - Professor";
      vm.professores = [
        {nome: 'Marco', email: 'marco@email.com', idade: '17'},
        {nome: 'Glimar', email: 'glimar@email.com', idade: 'abc'},
        {nome: 'Dulce', email: 'dulce@email.com', idade: '18'},
        {nome: 'Paola', email: 'paola@email.com', idade: '16'},
        {nome: 'Guilherme', email: 'gui@email.com', idade: '20'}
      ];
    }

  </script>
</body>
</html>
