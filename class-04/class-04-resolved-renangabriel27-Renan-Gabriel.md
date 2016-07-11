# AngularJS - Aula 04 - Exercícios

Nome: Renan Gabriel Almeida Silva

Github: [renangabriel27](https://github.com/renangabriel27)

Data:1468270882989

## 1) Adicionar mais 1 campo em todos os Controllers e utilizar ele em orderBy.

```html
<!DOCTYPE html>
<html data-ng-app="beMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be MEAN</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet">
  </head>
  <body>
      <section data-ng-controller="UserController as User">
        <h1>{{ User.titulo }}</h1>
        <table class="ui celled table">
          <thead>
            <tr>
              <th data-ng-repeat="(key, value) in User.users[0]">{{ key }}</th>
            </tr>
          </thead>
            <tbody>
              <tr data-ng-repeat="user in User.users | orderBy:'telefone'">
                <td data-ng-repeat="(key, value) in user">{{ value }}</td>
              </tr>
            </tbody>
          </table>
      </section>

      <section data-ng-controller="CursoController as Curso">
        <h2>{{ Curso.titulo }}</h2>
        <table class="ui celled table">
          <thead>
            <tr>
              <th data-ng-repeat="(key, value) in Curso.cursos[0]">{{ key }}</th>
            </tr>
          </thead>
          <tbody>
            <tr data-ng-repeat="curso in Curso.cursos | orderBy:'pagefb'">
              <td data-ng-repeat="(key, value) in curso">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section data-ng-controller="ProfessorController as Professor">
        <h2>{{ Professor.titulo }} </h2>
        <table class="ui celled table">
          <thead>
            <tr>
              <th data-ng-repeat="(key, value) in Professor.professors[0]">{{ key }}</th>
            </tr>
          </thead>
          <tbody>
            <tr data-ng-repeat="professor in Professor.professors | orderBy:'github'">
              <td data-ng-repeat="(key, value) in professor">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </section>

	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      <script>
        angular.module('beMEAN', [])
          .controller('UserController', UserController)
          .controller('CursoController', CursoController)
          .controller('ProfessorController', ProfessorController)

          function UserController() {
            var vm = this;
            vm.titulo = "Be MEAN - Usuários";
            vm.users = [
              {name: 'Renan', email: 'renan@gmail.com', telefone: '8818-3045'}
            , {name: 'Carlos', email: 'carlos@gmail.com', telefone: '9939-4055'}
            , {name: 'Thomas', email: 'thomas@gmail.com', telefone: '3638-4506'}
            ];
          }

          function CursoController() {
            var vm = this;
            vm.titulo = "Be MEAN - Cursos";
            vm.cursos = [
              {name: 'Be MEAN', teacher: 'Suissa', pagefb: 'bemean@fb.com'}
            , {name: 'Learning Machine', teacher: 'Ivan Gustavo',  pagefb: 'learning@fb.com'}
            , {name: 'Laravel', teacher: 'Michael Douglas',  pagefb: 'phplaravel@fb.com'}
            ];
          }

          function ProfessorController() {
            var vm = this;
            vm.titulo = "Be MEAN - Professores";
            vm.professors = [
              {name: 'Jean Carlos Nascimento', email: 'suissa@gmail.com', curso: 'beMEAN', idade: 27, github: 'suissa'}
            , {name: 'Michael Douglas', email: 'jose@gmail.com', curso: 'PHP', idade: 28, github: 'michaeldouglas'}
            , {name: 'José', email: 'jose@gmail.com', curso: 'HTML5', idade: 17, github: 'jose'}
            ];
          }


      </script>
  </body>
</html>
```

## 2) Utilizar esse valor adicional no ng-init para cada ng-repeat da View.
```html
<!DOCTYPE html>
<html data-ng-app="beMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be MEAN</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet">
  </head>
  <body>
      <span data-ng-init="fb = 'pagefb';  tel = 'telefone'; git = 'github'"></span>

      <section data-ng-controller="UserController as User">
        <h1>{{ User.titulo }}</h1>
        <table class="ui celled table">
          <thead>
            <tr>
              <th data-ng-repeat="(key, value) in User.users[0]">{{ key }}</th>
            </tr>
          </thead>
            <tbody>
              <tr data-ng-repeat="user in User.users | orderBy:tel">
                <td data-ng-repeat="(key, value) in user">{{ value }}</td>
              </tr>
            </tbody>
          </table>
      </section>

      <section data-ng-controller="CursoController as Curso">
        <h2>{{ Curso.titulo }}</h2>
        <table class="ui celled table">
          <thead>
            <tr>
              <th data-ng-repeat="(key, value) in Curso.cursos[0]">{{ key }}</th>
            </tr>
          </thead>
          <tbody>
            <tr data-ng-repeat="curso in Curso.cursos | orderBy:fb">
              <td data-ng-repeat="(key, value) in curso">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section data-ng-controller="ProfessorController as Professor">
        <h2>{{ Professor.titulo }} </h2>
        <table class="ui celled table">
          <thead>
            <tr>
              <th data-ng-repeat="(key, value) in Professor.professors[0]">{{ key }}</th>
            </tr>
          </thead>
          <tbody>
            <tr data-ng-repeat="professor in Professor.professors | orderBy:git">
              <td data-ng-repeat="(key, value) in professor">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </section>

	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      <script>
        angular.module('beMEAN', [])
          .controller('UserController', UserController)
          .controller('CursoController', CursoController)
          .controller('ProfessorController', ProfessorController)

          function UserController() {
            var vm = this;
            vm.titulo = "Be MEAN - Usuários";
            vm.users = [
              {name: 'Renan', email: 'renan@gmail.com', telefone: '8818-3045'}
            , {name: 'Carlos', email: 'carlos@gmail.com', telefone: '9939-4055'}
            , {name: 'Thomas', email: 'thomas@gmail.com', telefone: '3638-4506'}
            ];
          }

          function CursoController() {
            var vm = this;
            vm.titulo = "Be MEAN - Cursos";
            vm.cursos = [
              {name: 'Be MEAN', teacher: 'Suissa', pagefb: 'bemean@fb.com'}
            , {name: 'Learning Machine', teacher: 'Ivan Gustavo',  pagefb: 'learning@fb.com'}
            , {name: 'Laravel', teacher: 'Michael Douglas',  pagefb: 'phplaravel@fb.com'}
            ];
          }

          function ProfessorController() {
            var vm = this;
            vm.titulo = "Be MEAN - Professores";
            vm.professors = [
              {name: 'Jean Carlos Nascimento', email: 'suissa@gmail.com', curso: 'beMEAN', idade: 27, github: 'suissa'}
            , {name: 'Michael Douglas', email: 'jose@gmail.com', curso: 'PHP', idade: 28, github: 'michaeldouglas'}
            , {name: 'José', email: 'jose@gmail.com', curso: 'HTML5', idade: 17, github: 'jose'}
            ];
          }


      </script>
  </body>
</html>
```

## 3) Criar um campo de filtro para cada ng-repeat.
```html
<!DOCTYPE html>
<html data-ng-app="beMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be MEAN</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet">
  </head>
  <body>
      <span data-ng-init="fb = 'pagefb'; tel = 'telefone'; git = 'github'"></span>

      <section data-ng-controller="UserController as User">

        <h2> {{ User.titulo }} </h2>
        <table class="ui celled table">
          <thead>
            <tr>
              <th colspan="3">
                <div class="ui input right aligned">
                  <input type="text" ng-model="searchUser" placeholder="Procurar usuários..">
                </div>
              </th>
            </tr>
            <tr>
              <th data-ng-repeat="(key, value) in User.users[0]">{{ key }}</th>
            </tr>
          </thead>
            <tbody>
              <tr data-ng-repeat="user in User.users | orderBy:tel | filter:searchUser">
                <td data-ng-repeat="(key, value) in user">{{ value }}</td>
              </tr>
            </tbody>
          </table>
      </section>

      <section data-ng-controller="CursoController as Curso">
        <h2>{{ Curso.titulo }}</h2>
        <table class="ui celled table">
          <thead>
            <tr>
              <th colspan="3">
                <div class="ui input right aligned">
                  <input type="text" ng-model="searchCurso" placeholder="Procurar cursos..">
                </div>
              </th>
            </tr>
            <tr>
              <th data-ng-repeat="(key, value) in Curso.cursos[0]">{{ key }}</th>
            </tr>
          </thead>
          <tbody>
            <tr data-ng-repeat="curso in Curso.cursos | orderBy:fb | filter:searchCurso">
              <td data-ng-repeat="(key, value) in curso">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section data-ng-controller="ProfessorController as Professor">
        <h2>{{ Professor.titulo }} </h2>
        <table class="ui celled table">
          <thead>
            <tr>
              <th colspan="3">
                <div class="ui input right aligned">
                  <input type="text" ng-model="searchProfessor" placeholder="Procurar professores..">
                </div>
              </th>
            </tr>
            <tr>
              <th data-ng-repeat="(key, value) in Professor.professors[0]">{{ key }}</th>
            </tr>
          </thead>
          <tbody>
            <tr data-ng-repeat="professor in Professor.professors | orderBy:git | filter:searchProfessor">
              <td data-ng-repeat="(key, value) in professor">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </section>

	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      <script>
        angular.module('beMEAN', [])
          .controller('UserController', UserController)
          .controller('CursoController', CursoController)
          .controller('ProfessorController', ProfessorController)

          function UserController() {
            var vm = this;
            vm.titulo = "Be MEAN - Usuários";
            vm.users = [
              {name: 'Renan', email: 'renan@gmail.com', telefone: '8818-3045'}
            , {name: 'Carlos', email: 'carlos@gmail.com', telefone: '9939-4055'}
            , {name: 'Thomas', email: 'thomas@gmail.com', telefone: '3638-4506'}
            ];
          }

          function CursoController() {
            var vm = this;
            vm.titulo = "Be MEAN - Cursos";
            vm.cursos = [
              {name: 'Be MEAN', teacher: 'Suissa', pagefb: 'bemean@fb.com'}
            , {name: 'Learning Machine', teacher: 'Ivan Gustavo',  pagefb: 'learning@fb.com'}
            , {name: 'Laravel', teacher: 'Michael Douglas',  pagefb: 'phplaravel@fb.com'}
            ];
          }

          function ProfessorController() {
            var vm = this;
            vm.titulo = "Be MEAN - Professores";
            vm.professors = [
              {name: 'Jean Carlos Nascimento', email: 'suissa@gmail.com', curso: 'beMEAN', idade: 27, github: 'suissa'}
            , {name: 'Michael Douglas', email: 'michael@gmail.com', curso: 'PHP', idade: 28, github: 'michaeldouglas'}
            , {name: 'José', email: 'jose@gmail.com', curso: 'HTML5', idade: 17, github: 'jose'}
            ];
          }


      </script>
  </body>
</html>
```
