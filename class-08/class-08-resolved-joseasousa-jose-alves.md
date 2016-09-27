# AngularJS - Aula 08 - Exercício
**user:** [joseasousa](https://github.com/joseasousa/)  
**autor:** Jose Alves De Sousa Neto

## 1 - Criar a mesma lógica de animação do botão SAVE, para o botão EDIT,porém utilizando uma animação, de CSS, DIFERENTE.



```html

<!DOCTYPE html>
<html lang="ptBR" data-ng-app="BeMean">

<head>
    <meta charset="utf-8">
    <title>Exercicio 8</title>
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">


    <style>
        .wrapper {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .animate {
            transition: all linear 0.5s;
        }
        
        .animate-edit {
            transition: ease-in-out 0.6s;
        }
        
        .ng-hide {
            height: 0;
        }
    </style>
</head>

<body data-ng-controller="UserController as User">
    <div class="row wrapper">

        <div>
            <h1>{{User.titulo}}</h1>
        </div>
        <p class="col s12">
            <input type="text" data-ng-model="User.form.name" placeholder="nome">
            <br>
            <input type="email" data-ng-model="User.form.email" placeholder="email">
        </p>
        <button type="button" class="btn btn-large  green waves-effect waves-ligtht col s12" name="button" data-ng-click="User.add(form.User)">Add</button>
        <button type="button" class="btn btn-large blue animate waves-effect waves-ligtht col s12" name="button" data-ng-click="User.save(User.form)"
            data-ng-hide="!User.editing">Save</button>

        <table>

            <thead>
                <tr>
                    <th colspan="{{User.keyslength+1}}">
                        <input type="text" data-ng-model="User.filtro" placeholder="Busca">
                    </th>
                </tr>
                <tr>
                    <th data-ng-repeat="(key,value) in User.users[0]">
                        {{key}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr data-ng-repeat="user in User.users |filter:User.filtro">
                    <td data-ng-repeat="(key,value) in user">
                        {{value}}</td>
                    <td>
                        <button type="button" class="btn btn-large red waves-effect waves-ligtht col s12" name="button" data-ng-click="User.removeSplice(user.email)">DELETE</button>

                    </td>
                    <td>
                        <button type="button" data-ng-hide="User.editing" class="btn btn-large animate-edit blue waves-effect waves-ligtht col s12"
                            name="button" data-ng-click="User.edit(user,$index)">UPDATE</button>
                    </td>

                </tr>
            </tbody>
        </table>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.js" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-animate.js" charset="utf-8"></script>
    <script charset="utf-8">     
    angular.module('BeMean', ['ngAnimate'])
  .controller('UserController', UserController);

function UserController() {
  var vm = this;
  vm.editing =false;

  vm.titulo = "Usuario";
  vm.users = [
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
    return Object.keys(angular.copy(vm.users[0])).length;
  }

  vm.add = add;
  function add(user) {
    vm.users.push(angular.copy(user));
  }

  vm.edit = edit;
  function edit(user, index) {
    vm.form = angular.copy(user);
    vm.form.index = index;
    vm.editing =true;
  }

  vm.save = save;
  function save(user) {
    var users = vm.users.map(function (el, i) {
      if (i === user.index) {
        delete user.index;
        return user;
      }
      return el;
    });

    vm.users = users;
    vm.editing = false;
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

</script>
</body>

</html>

```
