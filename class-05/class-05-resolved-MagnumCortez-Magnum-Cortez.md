# Angularjs 1 - Aula 05 - Exercício
**user:** [MagnumCortez](https://github.com/MagnumCortez)  
**autor:** Magnum cortez

## 1. Criar uma função para ordenar uma tabela à partir de uma coluna, *clickando* na sua *tr>th*, ordenando pelo campo da coluna.


## 2. Criar mais 1 *Controller* para *Teachers* com seu form para adição, listagem (defina um Array inicial) com a ordenação do exercício anterior, filtro filter e também use o seu filtro criado na segunda aula.

```html
<!DOCTYPE html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <title>Class 05</title>
</head>
<body data-ng_controller="UserController as User">
  <h1>{{User.titulo}}</h1>
  <label>search Info User: <input type="text" ng-model="searchUser"></label>
  <p>
    <label>Name: <input type="text" ng-model="form.User.name"></label>
    <br>
    <label>Occupation: <input type="text" ng-model="form.User.occupation"></label>
    <br>
    <label>Age: <input type="number" ng-model="form.User.age"></label>
    <button data-ng-click="User.add(form.User)">Add User</button>
  </p>
  <table border="1">
    <thead>
      <tr>
        <th data-ng-repeat="(key, value) in User.users[0]" data-ng-click="User.orderCol(key)">{{key}}</th>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="user in User.users | orderBy:User.predicate | filter:searchUser">
        <td data-ng-repeat="(key, value) in user">{{value}}</td>
      </tr>
    </tbody>
  </table>

  
  <div data-ng-controller="TeacherController as Teacher">
    <h2>{{Teacher.titulo}}</h2>
    <span data-ng-init="predicate = 'name'; reverse = true;"></span>
    <label>Search Info Teacher: <input type="text" ng-model="searchTeacher"></label>
    <p>
      <label>Name: <input type="text" ng-model="form.Teacher.name"></label><br>
      <label>Course: <input type="text" ng-model="form.Teacher.course"></label><br>
      <label>Duration: <input type="text" ng-model="form.Teacher.duration"></label><br>
      <label>Nivel: <input type="number" ng-model="form.Teacher.level"></label>
      <button data-ng-click="Teacher.add(form.Teacher)">Add Teacher</button>
    </p>

    <ul>
      <li data-ng-repeat="teacher in Teacher.teachers | orderBy:predicate:reverse | filter:searchTeacher">
        {{teacher.name}} - {{teacher.course}} - {{teacher.duration}} - {{teacher.level | nivel}}
      </li>
    </ul>
  </div>

<script src="angular.min.js"></script>
<script>
  angular.module("BeMEAN",[])
  .controller("UserController", UserController)
  .controller("TeacherController", TeacherController)
  .filter("nivel", function() {
    return function(levelCourse) {
      switch (levelCourse) {
        case 1:
          return 'Iniciante';
        case 2:
          return 'Iniciante-Intermediário';
        case 3:
          return 'Intermediário';
        case 4:
          return 'Intermediário-Avançado';
        case 5:
          return 'Avançado';
        default:
          return 'Sem Nível';
      }
    }
  });

  function UserController() {
    var vm = this;
    vm.titulo = "Usuários";
    vm.predicate = 'name';
    vm.users = [
      {name: 'Magnum Cortez', occupation: 'Developer PHP', age: 33},
      {name: 'Eduardo Soares', occupation: 'Developer PHP', age: 27},
      {name: 'Marcos Furtado', occupation: 'Developer PHP', age: 19},
      {name: 'Pedro Silva', occupation: 'Analista de Teste', age: 18},
      {name: 'Talita Camilo', occupation: 'Developer FrontEnd', age: 25},
      {name: 'Ana Brito', occupation: 'Analista de Teste', age: 22}
    ];

    vm.add = add;
    function add(user) {
      vm.users.push(angular.copy(user));
    }

    vm.orderCol = orderCol;
    function orderCol(col) {
      vm.predicate = col;
    }
  }

  function TeacherController() {
    var vm = this;
    vm.titulo = "Professores";
    vm.teachers = [
      {name: 'Marcos', course: 'Linux', duration: '20 Horas', level: 3},
      {name: 'Eduardo', course: 'PHP - Designer Patterns', duration: '8 Horas', level: 2},
      {name: 'Yuri', course: 'Git e Bash', duration: '30 Horas', level: 4},
      {name: 'Valdir', course: 'node.js', duration: '18 Horas', level: 5}
    ];

    vm.add = add;
    function add(teacher) {
      vm.teachers.push(angular.copy(teacher));
    }
  }
</script>
</body>
</html>
```