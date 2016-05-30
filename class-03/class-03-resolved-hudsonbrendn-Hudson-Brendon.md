# AngularJS - Aula 03 - Exercício

Nome: Hudson Brendon
Github: [hudsonbrendon](https://github.com/hudsonbrendon)  
Data: 1463663947158

## 1- Criar 1 Controller de Professores, igual aos outros seguindo nosso último padrão.

```html
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be MEAN</title>
  </head>
  <body>
    <div data-ng-controller="TeacherController as Teacher">
      <ul>
        <li data-ng-repeat="teacher in Teacher.teaches">
          {{ teacher.name }} - {{ teacher.course }} - {{ teacher.age }}
        </li>
      </ul>
    </div>

  <script src="angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
    .controller('TeacherController', TeacherController)

    function TeacherController() {
      var vm = this;
      vm.titulo = "Be Mean - Professores";
      vm.teaches = [
        {name: "Hudson Brendon", course: "Python", age: 24},
        {name: "Débora", course: "English", age: 23},
        {name: "Hudson Brendon", course: "Django", age: 24},
        {name: "Emmanuele", course: "Ruby on Rails", age: 14}
      ];
    }
  </script>
  </body>
</html>
```

## 2- Utilizar seu filtro criado aula na passada em algum dos seus valores.

```html
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be MEAN</title>
  </head>
  <body>
    <div data-ng-controller="TeacherController as Teacher">
      <ul>
        <li data-ng-repeat="teacher in Teacher.teaches">
          {{ teacher.name }} - {{ teacher.course }} - {{ teacher.age | age }}
        </li>
      </ul>
    </div>

  <script src="angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
    .controller('TeacherController', TeacherController)
    .filter('age', function () {
        return function (text) {
          if (text) {
            if (text < 18) {
              return "Menor de idade"
            }
            else {
              return "Maior de idade"
            }
          }
        };
      });

    function TeacherController() {
      var vm = this;
      vm.titulo = "Be Mean - Professores";
      vm.teaches = [
        {name: "Hudson Brendon", course: "Python", age: 24},
        {name: "Débora", course: "English", age: 23},
        {name: "Hudson Brendon", course: "Django", age: 24},
        {name: "Emmanuele", course: "Ruby on Rails", age: 14}
      ];
    }
  </script>
  </body>
</html>
```
