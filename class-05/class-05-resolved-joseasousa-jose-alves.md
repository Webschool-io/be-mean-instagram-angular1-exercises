# AngularJS - Aula 05 - Exercício
**user:** [joseasousa](https://github.com/joseasousa/)  
**autor:** Jose Alves De Sousa Neto

## 1 - Criar uma funcao que para ordenar uma tabela a partir de uma coluna, clickando na sua tr>th,ordenando pelo campo da coluna 

## 2 - Criar mais 1 Controller para Teachers com seu form para adição, listagem(defina um Array inicial) com a ordenação do exercício anterior, filtrp filter e tambem use o seu filtro criado na segunda aula



```html

<!DOCTYPE html>
<html lang="ptBR" data-ng-app="BeMean">

<head>
  <meta charset="utf-8">
  <title>Aula 5</title>
</head>

<body data-ng-controller="UserController as User">
  <div>
    <h1>{{User.titulo}}</h1>
  </div>
  <p>
    <input type="text" ng-model="form.User.name" placeholder="nome">
    <br>
    <input type="email" ng-model="form.User.email" placeholder="email">
  </p>
  <button type="button" name="button" data-ng-click="User.add(form.User)">Add</button>
  <span data-ng-init="predicate = 'name';reverse = true;"></span>
  <table>
    <thead>
      <tr>
        <td data-ng-repeat="(key,value) in User.users[0]">

          <a ng-click="User.sort(key)">{{key}}</a>


        </td>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="user in User.users | orderBy:User.predicate:User.reverse">
        <td data-ng-repeat="(key,value) in user">
          {{value}}</td>
      </tr>
    </tbody>
  </table>

  <div data-ng-controller="CursoController as Curso">
    <button type="button" name="button" data-ng-click="Curso.add()">Add</button>
    <h1>{{Curso.titulo}}</h1>
    <ul>
      <li data-ng-repeat="curso in Curso.cursos">
        {{curso.name}} - {{curso.teacher}}
      </li>
    </ul>

  </div>
 

  <div data-ng-controller="TeacherController as Teacher">
    <div>
      <h1>{{Teacher.titulo}}</h1>
    </div>
    <p>
      <input type="text" ng-model="form.Teacher.name" placeholder="nome">
      <br>
      <input type="number" ng-model="form.Teacher.age" placeholder="email">
    </p>
    <button type="button" name="button" data-ng-click="Teacher.add(form.Teacher)">Add</button>
    <span data-ng-init="predicate = 'name';reverse = true;"></span>
    <table>
      <thead>
        <tr>
          <td data-ng-repeat="(key,value) in Teacher.teachers[0]">
            <a ng-click="Teacher.sort(key)">{{key}}</a>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="teacher in Teacher.teachers | orderBy:Teacher.predicate:Teacher.reverse">
          <td>{{teacher.name }}</td>
          <td>{{teacher.age| demaior }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.js" charset="utf-8"></script>

  <script>
           
angular.module('BeMean', [])

    .controller('UserController', UserController)
    .controller('CursoController', CursoController)
    .controller('TeacherController', TeacherController)
    .filter('demaior', function () {
        return function (age) {
            if (age) {
                if (age < 18) { return "com " + age + " é de Menor" }
                else { return "com " + age + " é de Maior" }
            }
        }
    });

function UserController() {
    var vm = this;
    vm.titulo = "User";
    vm.predicate = '';
    vm.reverse = true;

    vm.users = [
        {
            "name": "Kimberly Gonzales",
            "email": "kgonzales0@unicef.org"
        }, {
            "name": "Jesse Morales",
            "email": "jmorales1@usgs.gov"
        }, {
            "name": "Russell Mills",
            "email": "rmills2@list-manage.com"
        }
    ];
    vm.add = function (user) {
        vm.users.push(user);
    }

    vm.sort = function (key) {
        vm.predicate = key;
        vm.reverse = !vm.reverse;
    }
}

function CursoController() {
    var vm = this;
    vm.titulo = "Cursos";
    vm.cursos = [
        {
            "name": "Be Mean",
            "teacher": "Suissa"
        }, {
            "name": "Learn ",
            "teacher": "Ivan"
        }, {
            "name": "Android",
            "teacher": "eu"
        }
    ];
    vm.add = function () {
        vm.cursos.push({ name: 'android', teacher: 'jose' });
    }
}

function TeacherController() {
    var vm = this;
    vm.titulo = "Professores";
    vm.predicate = 'name';
    vm.reverse = false;

    vm.teachers = [
        {
            "name": "Carinha",
            "age": 30
        }, {
            "name": "Outro Carinha",
            "age": 16
        }
    ];

    vm.add = function (teacher) {
        vm.teachers.push(teacher);
    }

    vm.sort = function (key) {
        vm.predicate = key;
        vm.reverse = !vm.reverse;
    }
}
        </script>
</body>

</html>

```