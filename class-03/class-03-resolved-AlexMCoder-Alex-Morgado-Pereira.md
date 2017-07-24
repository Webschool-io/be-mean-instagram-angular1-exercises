# Angularjs 1 - Aula 03 - Exercício

User: [alexmcoder](https://github.com/AlexMCoder)

Autor: Alex Morgado Pereira

## 1. Criar 1 Controller de Professores, igual aos outros, seguindo nosso último padrão.

```
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Aula 3</title>
  </head>
  <body data-ng-controller="TeacherController as vm">

    <h1>Professores</h1>
    <ul>
      <li data-ng-repeat="teacher in vm.teachers">
        {{teacher.name}} - {{teacher.email}} - {{teacher.cursos}}
      </li>
    </ul>

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>

    <script type="text/javascript">
      angular.module('BeMEAN', [])
        .controller('TeacherController', TeacherController);

      function TeacherController() {
        var vm = this;
        vm.teachers = [
          {name: 'Alex', email: 'alexmpprog@gmail.com.br', cursos: 'Laravel'},
          {name: 'Lucas Mota', email: 'Lucasmota@gmail.com.br', cursos: 'Laravel'},
          {name: 'Rafael', email: 'rafael@gmail.com.br', cursos: 'Laravel'}
        ];
      }
    </script>
  </body>
</html>
```

## 2. Utilizar seu filtro criado na aula passada em alguns dos seus valores.

```
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Aula 3</title>
  </head>
  <body data-ng-controller="TeacherController as vm">

    <h1>Professores</h1>
    <ul>
      <li data-ng-repeat="teacher in vm.teachers">
        {{teacher.name}} - {{teacher.email}} - {{teacher.cursos}} - {{teacher.age | isAdult}}
      </li>
    </ul>

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>

    <script type="text/javascript">
      angular.module('BeMEAN', [])
        .controller('TeacherController', TeacherController)
        .filter('isAdult', () => {
        return (age) => {

          if (age && !isNaN(age) ) {
            if(age < 18) return 'Menor de idade.';
            else return 'Maior de idade';
          }

          if(isNaN(age)) return 'digite sua idade';
        }
      });

      function TeacherController() {
        var vm = this;
        vm.teachers = [
          {name: 'Alex', email: 'alexmpprog@gmail.com.br', cursos: 'Laravel', age: 24},
          {name: 'Lucas Mota', email: 'Lucasmota@gmail.com.br', cursos: 'Laravel', age: 21},
          {name: 'Rafael', email: 'rafael@gmail.com.br', cursos: 'Laravel', age: 25}
        ];
      }
    </script>
  </body>
</html>
```
