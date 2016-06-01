# Angularjs 1 - Aula 03 - Exercício

User: [Cerezini](https://github.com/cerezini)

Autor: Mateus Cerezini Gomes

Data: 1464056564542

## 1. Criar 1 Controller de Professores, igual aos outros, seguindo nosso último padrão.

```html
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be Mean</title>
  </head>
  <body data-ng-controller="TeacherController as vm">

    <h1>Teachers</h1>
    <ul>
      <li data-ng-repeat="t in vm.teachers">
        {{t.name}} - {{t.email}} - {{t.cursos}}
      </li>
    </ul>

    <script type="text/javascript" src="../../angular.min.js"></script>
    <script type="text/javascript">
      angular
        .module('BeMEAN', [])
        .controller('TeacherController', TeacherController);

      function TeacherController() {
        var vm = this;
        vm.teachers = [
          {name: 'Russomano', email: 'russomano@bol.com.br', cursos: 'Capoeira'},
          {name: 'Pedro Pedreira', email: 'pedropedra@bol.com.br', cursos: 'Artesanato, Surf'},
          {name: 'Paulo Pão de Batata', email: 'potatopaulo@potato.br', cursos: 'Web, Mongodb'},
          {name: 'Jaiminho', email: 'jaiminho@chaves.mx', cursos: 'Matemática, Inglês'}
        ];
      }
    </script>
  </body>
</html>
```

## 2. Utilizar seu filtro criado na aula passada em alguns dos seus valores.

```html
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be Mean</title>
  </head>
  <body data-ng-controller="TeacherController as vm">

    <h1>Teachers</h1>
    <ul>
      <li data-ng-repeat="t in vm.teachers">
        {{t.name}} - {{t.age | isAdult}} - {{t.email}} - {{t.cursos}}
      </li>
    </ul>

    <script type="text/javascript" src="../../angular.min.js"></script>
    <script type="text/javascript">
      angular
        .module('BeMEAN', [])
        .controller('TeacherController', TeacherController)
        .filter('isAdult', isAdult);

      function isAdult() {
        return (age) => {
          if (age && !(isNaN(age))) {
            if (age < 18) return 'Menor de 18 anos.';
            else return 'Maior de 18 anos.'
          }
        }
      }

      function TeacherController() {
        var vm = this;
        vm.teachers = [
          {name: 'Russomano', email: 'russomano@bol.com.br', cursos: 'Capoeira', age: 85},
          {name: 'Pedro Pedreira', email: 'pedropedra@bol.com.br', cursos: 'Artesanato, Surf', age: 11},
          {name: 'Paulo Pão de Batata', email: 'potatopaulo@potato.br', cursos: 'Web, Mongodb', age: 17},
          {name: 'Jaiminho', email: 'jaiminho@chaves.mx', cursos: 'Matemática, Inglês', age: 30}
        ];
      }
    </script>
  </body>
</html>
```
