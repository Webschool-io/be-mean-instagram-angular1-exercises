# AngularJS 1 - Aula 04 - Exercício
**user:** [MagnumCortez](https://github.com/MagnumCortez)  
**autor:** Magnum cortez

## 1- Adicionar mais 1 campo em todos os Controllers e utlizar ele em orderBy.

## 2- Utilizar esse valor adicional no ng-init para cada ng-repeat da View.

## 3- Criar um filtro para cada ng-repeat.

```html
<!DOCTYPE html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <title>Class 03</title>
</head>
<body data-ng_controller="UserController as User">
  <h1>{{User.titulo}}</h1>
  <label>search User: <input type="text" ng-model="searchUser"></label>
  <span data-ng-init="predicate = 'name'"></span>
  
  <table>
    <thead>
      <tr>
        <th data-ng-repeat="(key, value) in User.users[0]">{{key}}</th>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="user in User.users | orderBy:predicate | filter:searchUser">
        <td data-ng-repeat="(key, value) in user">{{value}}</td>
      </tr>
    </tbody>
  </table>

  
  <div data-ng-controller="TeacherController as Teacher">
    <h2>{{Teacher.titulo}}</h2>
    <label>search User: <input type="text" ng-model="searchTeacher"></label>
    <span data-ng-init="predicate = 'name'; reverse = true;"></span>
    <ul>
      <li data-ng-repeat="teacher in Teacher.teachers | orderBy:predicate:reverse | filter:searchTeacher">
        {{teacher.name}} - {{teacher.course}} - {{teacher.duration}}
      </li>
    </ul>
  </div>

<script src="angular.min.js"></script>
<script>
  angular.module("BeMEAN",[])
  .controller("UserController", UserController)
  .controller("TeacherController", TeacherController);

  function UserController() {
    var vm = this;
    vm.titulo = "Usuários";
    vm.users = [
      {name: 'Magnum Cortez', occupation: 'Developer PHP', age: 33},
      {name: 'Eduardo Soares', occupation: 'Developer PHP', age: 27},
      {name: 'Marcos Furtado', occupation: 'Developer PHP', age: 19},
      {name: 'Pedro Silva', occupation: 'Analista de Teste', age: 18},
      {name: 'Talita Camilo', occupation: 'Developer FrontEnd', age: 25},
      {name: 'Ana Brito', occupation: 'Analista de Teste', age: 22}
    ];
  }

  function TeacherController() {
    var vm = this;
    vm.titulo = "Professores";
    vm.teachers = [
      {name: 'Marcos', course: 'Linux', duration: '20 Horas'},
      {name: 'Eduardo', course: 'PHP - Designer Patterns', duration: '8 Horas'},
      {name: 'Yuri', course: 'Git e Bash', duration: '30 Horas'},
      {name: 'Valdir', course: 'node.js', duration: '18 Horas'}
    ];
  }
</script>
</body>
</html>
```