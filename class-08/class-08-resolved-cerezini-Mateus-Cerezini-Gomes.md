# Angularjs 1 - Aula 08 - Exercício

User: [Cerezini](https://github.com/cerezini)

Autor: Mateus Cerezini Gomes

Data: 1464056564542

## 1. Criar a mesma lógica de animação do botão **SAVE** para o botçao **EDIT**, porém utilizando uma animação de CSS diferente.

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
  <style>
    .wrapper {
      max-width: 600px;
      margin: 0 auto;
    }

    .animate {
      transition: all linear 0.5s;
    }

    .btnSave.ng-hide {
      height: 0;
    }

    .btnEdit.ng-hide {
      opacity: 0;
    }
  </style>
</head>
<body data-ng-controller="UserController as User">

  <section class="row wrapper">
    <h1>{{ User.title }}</h1>

    <p class="col s12">
      <label>
        <input type="text" data-ng-model="User.form.name" placeholder="Name">
      </label>
      <br>
      <label>
        <input type="email" data-ng-model="User.form.email" placeholder="Email">
      </label>
    </p>
    <button data-ng-click="User.add(User.form)" class="btn btn-large green waves-effect waves-light col s12">Add</button>
    <button data-ng-hide="!User.editing" data-ng-click="User.save(User.form)" class="btnSave btn btn-large animate blue waves-effect waves-light col s12">Save</button>
    <table>
      <thead>
        <tr>
          <th colspan="4">
            <label>
              <input ng-model="searchUser" placeholder="Search">
            </label>
          </th>
        </tr>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="user in User.users | filter:searchUser ">
          <td>
            <input type="checkbox" id="user-{{$index}}" ng-model="user.selecionado" />
            <label for="user-{{$index}}"></label>
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button data-ng-hide="User.editing" data-ng-click="User.edit(user, $index)" class="btn btnEdit animate blue waves-effect waves-light col s12" type="submit" name="action">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button data-ng-click="User.remove(User.users)" class="btn btn-large red waves-effect waves-light col s12" type="submit" name="action">Remove
    </button>
  </section>

  <script src="../../angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular-animate.js"></script>
  <script>
    angular.module('BeMEAN', ['ngAnimate'])
      .controller('UserController', UserController);
    function UserController() {
      var vm = this;
      vm.title = "Be MEAN - Usuários";
      vm.editing = false;
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com'}
      , {name: 'João', email: 'joao@macioesedoso.com'}
      , {name: 'Franciele', email: 'fran@quimica.com'}
      ];

      vm.add = add;
      function add(user) {
        vm.users.push(angular.copy(user));
      }

      vm.remove = remove;
      function remove(users) {
        vm.users = users.filter(function(el){ return !el.selecionado });
      }

      vm.edit = edit;
      function edit(user, index) {
        vm.form = angular.copy(user);
        vm.form.index = index;
        vm.editing = true;
      }

      vm.save = save;
      function save(user) {
        var users = vm.users.map(function(el, i) {
          if(i === user.index) {
            delete user.index;
            return user;
          }
          return el;
        });
        vm.users = users;
        vm.editing = false;
      }
    }
  </script>
</body>
</html>
```
