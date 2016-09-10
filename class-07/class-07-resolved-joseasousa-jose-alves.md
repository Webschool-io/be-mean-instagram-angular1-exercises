# AngularJS - Aula 07 - Exercício
**user:** [joseasousa](https://github.com/joseasousa/)  
**autor:** Jose Alves De Sousa Neto

## 1 - Fazer a função do save o Controller de Professores e utilizar o forEach em vez do map



```html
<!DOCTYPE html>
<html lang="ptBR" data-ng-app="BeMean">

<head>
    <meta charset="utf-8">
    <title>Exercicio 7</title>
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">

    <style>
        .wrapper {
            max-width: 600px;
            margin: 0 auto;
        }
    </style>
</head>

<body data-ng-controller="ProfessorController as Prof">
    <div class="row wrapper">

        <div>
            <h1>{{Prof.titulo}}</h1>
        </div>
        <p class="col s12">
            <input type="text" data-ng-model="Prof.form.name" placeholder="nome">
            <br>
            <input type="email" data-ng-model="Prof.form.email" placeholder="email">
        </p>
        <button type="button" class="btn btn-large green waves-effect waves-ligtht col s6" name="button" data-ng-click="Prof.add(Prof.form)">Add</button>
        <button type="button" class="btn btn-large blue waves-effect waves-ligtht col s6" name="button" data-ng-click="Prof.save(Prof.form)">Save</button>

        <table>

            <thead>
                <tr>
                    <th colspan="{{Prof.keyslength+1}}">
                        <input type="text" data-ng-model="Prof.filtro" placeholder="Busca">
                    </th>
                </tr>
                <tr>
                    <th data-ng-repeat="(key,value) in Prof.profs[0]">
                        {{key}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr data-ng-repeat="prof in Prof.profs |filter:Prof.filtro">
                    <td data-ng-repeat="(key,value) in prof">
                        {{value}}</td>
                    <td>
                        <button type="button" class="btn btn-large red waves-effect waves-ligtht col s6" name="button" data-ng-click="Prof.removeByEmail(prof.email)">DELETE</button>
                        <button type="button" class="btn btn-large blue waves-effect waves-ligtht col s6" name="button" data-ng-click="Prof.edit(prof,$index)">UPDATE</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.js" charset="utf-8"></script>
    <script >
angular.module('BeMean', [])
  .controller('ProfessorController', ProfessorController);

function ProfessorController() {
  var vm = this;

  vm.titulo = "Professor";
  vm.profs = [
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
  vm.keyslength = getKeyLenth();

  function getKeyLenth() {
    return Object.keys(angular.copy(vm.profs[0])).length;
  }

  vm.add = add;
  function add(prof) {
    vm.profs.push(angular.copy(prof));
  }

  vm.edit = edit;
  function edit(prof, index) {
    vm.form = angular.copy(prof);
    vm.form.index = index;
  }

  vm.save = save;
  function save(prof) {
    var profs = vm.profs.forEach(function (el, i) {
      if (i === prof.index) {
        delete prof.index;
        vm.profs.splice(vm.profs.indexOf(el), 1, prof);
      }
    });
  }
  
  vm.removeByEmail = removeByEmail;
  function removeByEmail(email) {
    vm.profs = vm.profs.filter(function (el) { return el.email !== email });
  }

  vm.sort = sort;
  function sort(key) {
    vm.predicate = key;
    vm.reverse = !vm.reverse;
  }
}           

    </script>
</body>

</html>

```
