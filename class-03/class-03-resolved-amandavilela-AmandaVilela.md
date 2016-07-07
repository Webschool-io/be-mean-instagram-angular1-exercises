# AngularJS 1 - Aula 03 - Exercício

Nome: Amanda Vilela

Github: amandavilela

Data: 03/07/2016 - 17:18

## Criar 1 controller de professores, igual aos outros , seguindo nosso último padrão
## Utilizar seu filtro criado na aula passada em algum dos seus valores.

```
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Exercicio 3</title>
  </head>
  <body>
    <section data-ng-controller="UserController as User">
      <h1>{{ User.titulo }}</h1>
      <ul>
        <li data-ng-repeat="user in User.users">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
      <div data-ng-controller="CursoController as Curso">
        <h2>{{ Curso.titulo }}</h2>
        <ul>
          <li data-ng-repeat="curso in Curso.cursos">
            {{ curso.name }} - {{ curso.teacher }}
          </li>
        </ul>
      </div>
      <div data-ng-controller="ProfessorController as Professor">
        <h2>{{ Professor.titulo }}</h2>
        <ul>
          <li data-ng-repeat="professor in Professor.professores">
            {{ professor.name }} - {{ professor.age | maioridade }}
          </li>
        </ul>
      </div>
    </section>
  <script type="text/javascript" src="js/angular.min.js"></script>
  <script type="text/javascript">
  angular.module('BeMEAN', [])
    .filter("maioridade", function() {
      return function (age) {
        if (age) {
          if (age >= 18) return "maior de idade";
          if (age < 18 ) return "menor de idade";
          else return "idade inválida";
        }
      }
    })
    .controller('UserController', UserController)
    .controller('CursoController', CursoController)
    .controller('ProfessorController', ProfessorController);

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
      vm.titulo = "Be MEAN - Listagem dos cursos";
      vm.cursos = [
          {name: 'Be MEAN', teacher: 'Suissa'}
        , {name: 'Learning Machine', teacher: 'Ivan Gustavo'}
        , {name: 'Laravel', teacher: 'Michael Douglas'}
      ];
    }

    function ProfessorController() {
      var vm = this;
      vm.titulo = "Be MEAN - Listagem dos professores";
      vm.professores = [
          {name: 'Suissa', age: 28}
        , {name: 'John Papa', age: 34}
        , {name: 'Nicholas Zakas', age: 35}
      ];
    }
  </script>
  </body>
</html>
```
