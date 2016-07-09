# AngularJS - Aula 05 - Exercícios

Nome: Renan Gabriel Almeida Silva

Github: [renangabriel27](https://github.com/renangabriel27)

Data: 09/07/2016 19:44

## 1) Criar uma função que para ordenar uma tabela a partir de uma coluna, clickando na sua tr>th, ordenando pelo campo da coluna.

```html
<!DOCTYPE html>
<html data-ng-app="beMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be MEAN</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="ui centered grid">
      <section data-ng-controller="UserController as User" class="fourteen wide column">
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
              <th data-ng-repeat="(key, value) in User.users[0]"><a href="" ng-click="User.orderByParam(key)">{{ key }}</a></th>
            </tr>
          </thead>
            <tbody>
              <tr data-ng-repeat="user in User.users | orderBy:User.param | filter:searchUser">
                <td data-ng-repeat="(key, value) in user">{{ value }}</td>
              </tr>
            </tbody>
          </table>
      </section>

      <section data-ng-controller="CursoController as Curso" class="fourteen wide column">
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
              <th data-ng-repeat="(key, value) in Curso.cursos[0]"><a href="" ng-click="Curso.orderByParam(key)">{{ key }}</a></th>
            </tr>
          </thead>
          <tbody>
            <tr data-ng-repeat="curso in Curso.cursos | orderBy:Curso.param | filter:searchCurso">
              <td data-ng-repeat="(key, value) in curso">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section data-ng-controller="TeacherController as Teacher" class="fourteen wide column">
        <h2>{{ Teacher.titulo }} </h2>
        <table class="ui celled table">
          <thead>
            <tr>
              <th colspan="5">
                <div class="ui input right aligned">
                  <input type="text" ng-model="searchTeacher" placeholder="Procurar professores..">
                </div>
              </th>
            </tr>
            <tr>
              <th data-ng-repeat="(key, value) in Teacher.teachers[0]"><a href="" ng-click="Teacher.orderByParam(key)">{{ key }}</a></th>
            </tr>
          </thead>
          <tbody>
            <tr data-ng-repeat="teacher in Teacher.teachers | orderBy:Teacher.param | filter:searchTeacher">
              <td data-ng-repeat="(key, value) in teacher">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    </div>
	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      <script>
        angular.module('beMEAN', [])
          .controller('UserController', UserController)
          .controller('CursoController', CursoController)
          .controller('TeacherController', TeacherController)

          function UserController() {
            var vm = this;
            vm.titulo = "Be MEAN - Usuários";
            vm.users = [
              {nome: 'Renan', email: 'renan@gmail.com', telefone: '8818-3045'}
            , {nome: 'Carlos', email: 'carlos@gmail.com', telefone: '9939-4055'}
            , {nome: 'Thomas', email: 'thomas@gmail.com', telefone: '3638-4506'}
            ];

            vm.add = add;
            function add(user) {
              vm.users.push(angular.copy(user));
            }

            vm.orderByParam = orderByParam;
            function orderByParam(param) {
              vm.param = param;
            }
          }

          function CursoController() {
            var vm = this;
            vm.titulo = "Be MEAN - Cursos";
            vm.cursos = [
              {nome: 'Be MEAN', teacher: 'Suissa', pagefb: 'bemean@fb.com'}
            , {nome: 'Learning Machine', teacher: 'Ivan Gustavo',  pagefb: 'learning@fb.com'}
            , {nome: 'Laravel', teacher: 'Michael Douglas',  pagefb: 'phplaravel@fb.com'}
            ];

            vm.orderByParam = orderByParam;
            function orderByParam(param) {
              vm.param = param;
            }
          }

          function TeacherController() {
            var vm = this;
            vm.titulo = "Be MEAN - Professores";
            vm.teachers = [
              {nome: 'Jean Carlos Nascimento', email: 'suissa@gmail.com', curso: 'beMEAN', idade: 27, github: 'suissa'}
            , {nome: 'Michael Douglas', email: 'michael@gmail.com', curso: 'PHP', idade: 28, github: 'michaeldouglas'}
            , {nome: 'José', email: 'jose@gmail.com', curso: 'HTML5', idade: 17, github: 'jose'}
            ];

            vm.orderByParam = orderByParam;
            function orderByParam(param) {
              vm.param = param;
            }
          }


      </script>
  </body>
</html>
```

## 2) Criar mais 1 Controller para Teachers com seu form para adição, listagem (defina um Array inicial) com a ordenação do exercício anterior, filtro filter e também use o seu filtro criado na segunda aula.

```html
<!DOCTYPE html>
<html data-ng-app="beMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be MEAN</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="ui centered grid">
      <section data-ng-controller="UserController as User" class="fourteen wide column">
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
              <th data-ng-repeat="(key, value) in User.users[0]"><a href="" ng-click="User.orderByParam(key)">{{ key }}</a></th>
            </tr>
          </thead>
            <tbody>
              <tr data-ng-repeat="user in User.users | orderBy:User.param | filter:searchUser">
                <td data-ng-repeat="(key, value) in user">{{ value }}</td>
              </tr>
            </tbody>
          </table>
      </section>

      <section data-ng-controller="CursoController as Curso" class="fourteen wide column">
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
              <th data-ng-repeat="(key, value) in Curso.cursos[0]"><a href="" ng-click="Curso.orderByParam(key)">{{ key }}</a></th>
            </tr>
          </thead>
          <tbody>
            <tr data-ng-repeat="curso in Curso.cursos | orderBy:Curso.param | filter:searchCurso">
              <td data-ng-repeat="(key, value) in curso">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section data-ng-controller="TeacherController as Teacher" class="fourteen wide column">
        <h2>{{ Teacher.titulo }} </h2>

        <div class="ui equal width form">
          <h4 class="ui dividing header">Adicionar professor</h4>
          <div class="fields">
            <div class="field">
              <label>Nome</label>
              <input type="text" placeholder="nome" data-ng-model="form.Teacher.name">
            </div>
            <div class="field">
              <label>Email</label>
              <input type="email" placeholder="email" data-ng-model="form.Teacher.email">
            </div>
          </div>
          <div class="fields">
            <div class="field">
              <label>Curso</label>
              <input type="text" placeholder="curso" data-ng-model="form.Teacher.curso">
            </div>
            <div class="field">
              <label>Idade</label>
              <input type="text" placeholder="idade" data-ng-model="form.Teacher.idade">
            </div>
            <div class="field">
              <label>Github</label>
              <input type="text" placeholder="github" data-ng-model="form.Teacher.github">
            </div>
          </div>
          <button data-ng-click="Teacher.add(form.Teacher)" class="ui primary small button">Adicionar</button>
        </div>

        <table class="ui celled table">
          <thead>
            <tr>
              <th colspan="5">
                <div class="ui input right aligned">
                  <input type="text" ng-model="searchTeacher" placeholder="Procurar professores..">
                </div>
              </th>
            </tr>
            <tr>
              <th data-ng-repeat="(key, value) in Teacher.teachers[0]"><a href="" ng-click="Teacher.orderByParam(key)">{{ key }}</a></th>
            </tr>
          </thead>
          <tbody>
            <tr data-ng-repeat="teacher in Teacher.teachers | orderBy:Teacher.param |filter:searchTeacher">
              <td data-ng-repeat="(key, value) in teacher">{{ value | calculateAge }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    </div>
	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      <script>
        angular.module('beMEAN', [])
          .controller('UserController', UserController)
          .controller('CursoController', CursoController)
          .controller('TeacherController', TeacherController)

          .filter('calculateAge', function() {
            return function(text) {
              if(text !== undefined && !isNaN(text)) {
                if((text) >= 18) return text + ' | Maior de idade';
                return text + ' | Menor de idade';
              } else {
                return text;
              }
            }
          });

          function UserController() {
            var vm = this;
            vm.titulo = "Be MEAN - Usuários";
            vm.users = [
              {nome: 'Renan', email: 'renan@gmail.com', telefone: '8818-3045'}
            , {nome: 'Carlos', email: 'carlos@gmail.com', telefone: '9939-4055'}
            , {nome: 'Thomas', email: 'thomas@gmail.com', telefone: '3638-4506'}
            ];

            vm.orderByParam = orderByParam;
            function orderByParam(param) {
              vm.param = param;
            }
          }

          function CursoController() {
            var vm = this;
            vm.titulo = "Be MEAN - Cursos";
            vm.cursos = [
              {nome: 'Be MEAN', teacher: 'Suissa', pagefb: 'bemean@fb.com'}
            , {nome: 'Learning Machine', teacher: 'Ivan Gustavo',  pagefb: 'learning@fb.com'}
            , {nome: 'Laravel', teacher: 'Michael Douglas',  pagefb: 'phplaravel@fb.com'}
            ];

            vm.orderByParam = orderByParam;
            function orderByParam(param) {
              vm.param = param;
            }
          }

          function TeacherController() {
            var vm = this;
            vm.titulo = "Be MEAN - Professores";
            vm.teachers = [
              {nome: 'Jean Carlos Nascimento', email: 'suissa@gmail.com', curso: 'beMEAN', idade: 27, github: 'suissa'}
            , {nome: 'Michael Douglas', email: 'michael@gmail.com', curso: 'PHP', idade: 28, github: 'michaeldouglas'}
            , {nome: 'José', email: 'jose@gmail.com', curso: 'HTML5', idade: 17, github: 'jose'}
            ];

            vm.add = add;
            function add(teacher) {
              vm.teachers.push(angular.copy(teacher));
            }

            vm.orderByParam = orderByParam;
            function orderByParam(param) {
              vm.param = param;
            }
          }


      </script>
  </body>
</html>
```
