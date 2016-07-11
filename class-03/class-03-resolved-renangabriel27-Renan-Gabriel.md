# AngularJS - Aula 03 - Exercícios

Nome: Renan Gabriel Almeida Silva

Github: [renangabriel27](https://github.com/renangabriel27)

Data: 1468270882989

## 1) Criar 1 Controller de Professores, igual aos outros, seguindo nosso último padrão.
```html
<!DOCTYPE html>
<html data-ng-app="beMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be MEAN</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet">
  </head>
  <body data-ng-controller="ProfessorController as Professor">
      <h1>{{ Professor.titulo }}</h1>

      <table class="ui celled table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          <tr data-ng-repeat="professor in Professor.professors">
            <td>{{professor.name}}</td>
            <td>{{professor.email}}</td>
            <td>{{professor.idade}}</td>
            <td>{{professor.curso}}</td>
          </tr>
        </tbody>
      </table>

	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      <script>
        angular.module('beMEAN', [])
          .controller('ProfessorController', ProfessorController)

          function ProfessorController() {
            var vm = this;
            vm.titulo = "Be MEAN - Professores";
            vm.professors = [
              {name: 'Jean Carlos Nascimento', email: 'suissa@gmail.com', curso: 'beMEAN', idade: 27}
            , {name: 'Michael Douglas', email: 'jose@gmail.com', curso: 'PHP', idade: 28}
            , {name: 'José', email: 'jose@gmail.com', curso: 'HTML5', idade: 17}
            ];
          }
      </script>
  </body>
</html>

```

## 2) Utilizar seu filtro criado aula na passada em algum dos seus valores.

```html
<!DOCTYPE html>
<html data-ng-app="beMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be MEAN</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet">
  </head>
  <body data-ng-controller="ProfessorController as Professor">
      <h1>{{ Professor.titulo }}</h1>

      <table class="ui celled table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade / É maior de idade? </th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          <tr data-ng-repeat="professor in Professor.professors">
            <td>{{professor.name}}</td>
            <td>{{professor.email}}</td>
            <td>{{professor.idade | calculateAge}}</td>
            <td>{{professor.curso}}</td>
          </tr>
        </tbody>
      </table>

	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      <script>
        angular.module('beMEAN', [])
          .controller('ProfessorController', ProfessorController)

          .filter('calculateAge', function(){
            return function(text) {
             if(text !== undefined && !isNaN(text)) {
               if((text) >= 18) return text + ' | Maior de idade';
               
               return text + ' | Menor de idade';
             }
           }
          });

          function ProfessorController() {
            var vm = this;
            vm.titulo = "Be MEAN - Professores";
            vm.professors = [
              {name: 'Jean Carlos Nascimento', email: 'suissa@gmail.com', curso: 'beMEAN', idade: 27}
            , {name: 'Michael Douglas', email: 'jose@gmail.com', curso: 'PHP', idade: 28}
            , {name: 'José', email: 'jose@gmail.com', curso: 'HTML5', idade: 17}
            ];
          }
      </script>
  </body>
</html>
```
