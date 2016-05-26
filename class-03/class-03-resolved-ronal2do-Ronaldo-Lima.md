Nome: Ronaldo Lima
Github: ronal2do
Data: 1464274290

# Angularjs 1 - Aula 03 - Exercício

## 1. Criar 1 Controller de Professores, igual aos outros, seguindo nosso último padrão.

```html
<!DOCTYPE html>
<html data-ng-app="AnyApp">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="http://bulma.io/css/main.css">
    <title>Aula 3 - ex 01</title>
  </head>
  <body data-ng-controller="TeacherController as Teacher">

    
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
      
        <h1 class="title">Teachers</h1>
        <ul>
          <li data-ng-repeat="teacher in Teacher.teachers">
            {{ teacher.name }} - 
            {{ teacher.salary | currency }} - 
            <strong>{{ teacher.course | uppercase }}</strong>
          </li>
        </ul>
      </div>
    </div>
   

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      
    <script type="text/javascript">
      angular
        .module('AnyApp', [])
        .controller('TeacherController', TeacherController);

        function TeacherController() {
          var vm = this;
          vm.teachers = [
            {name: 'Kyung Oghenero', salary: '3200', course: 'Node'},
            {name: 'Nika Gnaeus', salary: '4200', course: 'D3'},
            {name: 'Chariovalda Lynna', salary: '5500', course: 'React'},
            {name: 'Manuel Gautier', salary: '1900', course: 'Vue'}
          ];
        }
    </script>
  </body>
</html>


```

## 2. Utilizar seu filtro criado na aula passada em alguns dos seus valores.

```html
<!DOCTYPE html>
<html data-ng-app="AnyApp">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="http://bulma.io/css/main.css">
    <title>Aula 3 - ex 02</title>
  </head>
  <body data-ng-controller="TeacherController as Teacher">

    
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
      
        <h1 class="title">Teachers</h1>
        <ul>
          <li data-ng-repeat="teacher in Teacher.teachers">
            {{ teacher.name }} - 
            {{ teacher.salary | currency }} - 
            <strong>{{ teacher.course | uppercase }}</strong>
            <br><strong>Horário da aula</strong> {{ teacher.entrance }} - {{ teacher.entrance | whatTime }} <hr>
          </li>
        </ul>
      </div>
    </div>
   

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      
    <script type="text/javascript">
      angular
        .module('AnyApp', [])
        .controller('TeacherController', TeacherController)
        .filter('whatTime', function() {
                return function(text) {
                    if(text) {
                        var hour = text;
                       
                        var options = [
                            hour <= 12,  // antes do meio dia
                            hour > 12 && hour <= 18, 
                            hour > 18 && hour <= 24,
                            hour < 24 // limita até 24
                          ];

                        switch (options.indexOf(true)) {
                            case (0):
                                return 'Aula diurna!';
                            case (1):
                                return 'Aula vespertina!';
                            case (2):
                                return 'Aula noturna!';
                            default:
                                return 'Horário inválido';
                         }
                    };
                };
            });

        function TeacherController() {
          var vm = this;
          vm.teachers = [
            {name: 'Kyung Oghenero', salary: '3200', course: 'Node', entrance: 12},
            {name: 'Nika Gnaeus', salary: '4200', course: 'D3', entrance: 10},
            {name: 'Chariovalda Lynna', salary: '5500', course: 'React', entrance: 19},
            {name: 'Manuel Gautier', salary: '1900', course: 'Vue', entrance: 08}
          ];
        }
    </script>
  </body>
</html>


```