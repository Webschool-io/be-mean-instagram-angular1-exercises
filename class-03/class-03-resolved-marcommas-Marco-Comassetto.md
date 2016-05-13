Nome: Marco Comassetto

Github: [marcommas](https://github.com/marcommas/){:target="_blank"}

Data: 12/05/2016
```html
<!doctype html>
<html lang="pt-br" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <title>BeMEAN AngularJS - Ex 3</title>
</head>
<body data-ng-controller="UserController as User">
  <div class="container">

      <h1>{{User.titulo}}</h1>
      <ul>
        <li data-ng-repeat="user in User.users">{{ user.name }} - {{user.email}} </li>
      </ul>

      <div data-ng-controller="CursoController as Curso">
        <h2>{{Curso.titulo}}</h2>

        <ul>
          <li data-ng-repeat="curso in Curso.cursos">
            {{ curso.name }} - {{curso.teacher}} 
          </li>
        </ul>
      </div>

      <h2>Exercício 1</h2>
      <div data-ng-controller="ProfessorController as Professor">
        <h2>{{Professor.titulo}}</h2>

        <ul>
          <li data-ng-repeat="professor in Professor.professores">
            {{ professor.nome }} - {{professor.email}} 
          </li>
        </ul>
      
       
        <h2>Exercício 2</h2>
        <ul>
          <li data-ng-repeat="professor in Professor.professores">
            {{ professor.nome }} - {{professor.email}} - {{professor.idade}} - {{professor.idade | confereIdade}}
          </li>
        </ul>
      </div>


  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

  <script>
    angular.module("BeMEAN", [])
      .controller('UserController', UserController)
      .controller('CursoController', CursoController)
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

    function UserController() {
      var vm = this;
      vm.titulo = "Be MEAN - Listagem dos usuários";
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com'}
      , {name: 'João', email: 'joao@macioesedoso.com'}
      , {name: 'Franciele', email: 'fran@quimica.com'}
      ];
    }

    function CursoController() {
      var vm = this;
      vm.titulo = "Be MEAN - Cursos";
      vm.cursos = [
        {name: 'Be Mean', teacher: 'suissa'}
      , {name: 'Learn Machine', teacher: 'Ivan'}
      , {name: 'Laravel', teacher: 'Michel'}
      ];
    }

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
