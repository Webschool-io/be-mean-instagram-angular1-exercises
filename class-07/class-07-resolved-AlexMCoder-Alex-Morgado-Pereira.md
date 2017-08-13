# AngularJS - Aula 07 - Exercício
**user:** [AlexMCoder](https://github.com/AlexMCoder/)

**autor:** Alex Morgado Pereira

## 1 - Fazer a função do save o Controller de Professores e utilizar o forEach em vez do map

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>

  <meta charset="UTF-8">
  <title>Be MEAN</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css">

  <style>
    .wrapper{
      max-width: 600px;
      margin: 0 auto;
    }
  </style>

</head>
<body data-ng-controller="UserController as User">
  <div class="row wrapper">

    <div>
        <h1>{{User.titulo}}</h1>
    </div>
    <p class="col s12">
        <input type="text" data-ng-model="form.User.name" placeholder="nome">
        <br>
        <input type="email" data-ng-model="form.User.email" placeholder="email">
        <br>
        <input type="number" data-ng-model="form.User.age" placeholder="age">
    </p>
    <button type="button" class="btn btn-large green waves-effect waves-ligtht col s12" name="button" data-ng-click="User.add(form.User)">Add</button>

    <table>

        <thead>
            <tr>
                <th colspan="{{User.keyslength+1}}">
                    <input type="text" data-ng-model="User.filtro" placeholder="Busca">
                </th>
            </tr>
            <tr>
                <th data-ng-repeat="(key,value) in User.users[0]">
                    <a ng-click="User.sort(key)">{{key}}</a>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr data-ng-repeat="user in User.users |filter:User.filtro| orderBy:User.predicate:User.reverse">
                <td data-ng-repeat="(key,value) in user">
                    {{value}}</td>
                <td>
                    <button type="button" class="btn btn-large red waves-effect waves-ligtht col s12" name="button" data-ng-click="User.removeSplice(user.email)">DELETE</button>
                </td>
            </tr>
        </tbody>
    </table>

    <div data-ng-controller="TeacherController as Prof">
            <h1>{{Prof.titulo}}</h1>
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
  </div>

</div>

  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController)
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

    function UserController() {
      var vm = this;
      vm.title = 'Be MEAN - Users';
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com', age: 30}
      , {name: 'João', email: 'joao@macioesedoso.com', age: 68}
      , {name: 'Franciele', email: 'fran@quimica.com', age: 17}
      ];

      vm.keyslength = getKeyLenth();

      function getKeyLenth() {
        return Object.keys(angular.copy(vm.users[0])).length;
      }

      vm.add = add;
      function add(user) {
        vm.users.push(angular.copy(user));
      }

      vm.removeSplice = removeSplice;
      function removeSplice(email) {
        vm.users.forEach(function (element, index) {
          if (vm.users[index].email === email) {
            vm.users.splice(vm.users.indexOf(element), 1);
          }
        })
      }

      vm.removeByEmail = removeByEmail;
      function removeByEmail(email) {
        vm.users = vm.users.filter(function (el) { return el.email !== email });
      }

      vm.sort = sort;
      function sort(key) {
        vm.predicate = key;
        vm.reverse = !vm.reverse;
      }
    }

    function TeacherController() {
      var vm = this;

      vm.titulo = "Professor";
      vm.profs = [
        {
          "name": "Alex Morgado",
          "email": "alexmpprog@gmail.com"
        }, {
          "name": "Lucas",
          "email": "lucas@gmail.com"
        }, {
          "name": "Rafael",
          "email": "rafael@gmail.com"
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