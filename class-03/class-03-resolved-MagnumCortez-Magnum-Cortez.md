# AngularJS 1.5.x - Aula 03 - Exercício  
**user:** [MagnumCortez](https://github.com/MagnumCortez)  
**autor:** Magnum cortez

## 1. Criar 1 Controller de Professores, igual aos outros, seguindo nosso último padrão.

```html
<!DOCTYPE html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <title>Class 03</title>
</head>
<body data-ng_controller="UserController as User">
  <h1>{{User.titulo}}</h1>
  <ul>
    <li data-ng-repeat="user in User.users">
      {{user.name}} - {{user.occupation}}
    </li>
  </ul>

  <div data-ng-controller="TeacherController as Teacher">
    <h2>{{Teacher.titulo}}</h2>
    <ul>
      <li data-ng-repeat="teacher in Teacher.teachers">
        {{teacher.name}} - {{teacher.course}}
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
      {name: 'Magnum', occupation: 'Developer PHP'},
      {name: 'Eduardo', occupation: 'Developer PHP'},
      {name: 'Marcos', occupation: 'Developer PHP'},
      {name: 'Pedro', occupation: 'Analista de Teste'}
    ];
  }

  function TeacherController() {
    var vm = this;
    vm.titulo = "Professores";
    vm.teachers = [
      {name: 'Yuri', course: 'Git e Bash'},
      {name: 'Marcos', course: 'Linux'},
      {name: 'Eduardo', course: 'PHP - Designer Patterns'}
    ];
  }
</script>
</body>
</html>
```

## 2. Utilizar seu filtro criado na aula passada em alguns dos seus valores.

```html
<!DOCTYPE html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <title>Class 03</title>
</head>
<body data-ng_controller="UserController as User">
  <h1>{{User.titulo}}</h1>
  <ul>
    <li data-ng-repeat="user in User.users">
      {{user.name | uppercase}} - {{user.occupation}}
    </li>
  </ul>

  <div data-ng-controller="TeacherController as Teacher">
    <h2>{{Teacher.titulo}}</h2>
    <ul>
      <li data-ng-repeat="teacher in Teacher.teachers">
        {{teacher.name}} ({{teacher.idade | maioridade }})  - {{teacher.course}}
      </li>
    </ul>
  </div>

<script src="angular.min.js"></script>
<script>
  angular.module("BeMEAN",[])
  .controller("UserController", UserController)
  .controller("TeacherController", TeacherController)
  .filter('maioridade', function() {
    return function(idade) {
      if (!isNaN(idade)){
        if (idade >= 18) {
          return "Maior de Idade";
        }
        return "Menor de Idade";
      }
    }
  });

  function UserController() {
    var vm = this;
    vm.titulo = "Usuários";
    vm.users = [
      {name: 'Magnum Cortez', occupation: 'Developer PHP'},
      {name: 'Eduardo Soares', occupation: 'Developer PHP'},
      {name: 'Marcos Furtado', occupation: 'Developer PHP'},
      {name: 'Pedro Silva', occupation: 'Analista de Teste'}
    ];
  }

  function TeacherController() {
    var vm = this;
    vm.titulo = "Professores";
    vm.teachers = [
      {name: 'Yuri', idade: 23, course: 'Git e Bash'},
      {name: 'Marcos', idade: 17, course: 'Linux'},
      {name: 'Eduardo', idade: 27, course: 'PHP - Designer Patterns'},
      {name: 'Talita', idade: 16, course: 'FrontEnd'}
    ];
  }
</script>
</body>
</html>
```