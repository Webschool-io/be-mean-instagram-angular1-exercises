# Angularjs 1 - Aula 06 - Exercício

User: [Cerezini](https://github.com/cerezini)

Autor: Mateus Cerezini Gomes

Data: 1464056564542

## 1. Criar a função de *delete* utilizando *splice* em vez de *filter*.

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
  <style>
    .wrapper {
      max-width: 800px;
      margin: 0 auto;
    }
  </style>
</head>
<body data-ng-controller="UserController as User">

  <div class="wrapper row">
    <h1>{{ User.title }}</h1>

    <p class="col s12">
      <label><input type="text" data-ng-model="form.user.name" placeholder="Name"></label>
      <label><input type="email" data-ng-model="form.user.email" placeholder="Email"></label>
      <button class="btn btn-large green waves-effect waves-light col s12" data-ng-click="User.add(form.user)">ADD</button>
    </p>
    <p class="col s12">
      <label><input type="text" data-ng-model="searchUser" placeholder="Search"></label>
    </p>

    <table>
      <thead>
        <tr>
          <th></th>
          <th data-ng-click="User.orderBy(key)">Name</th>
          <th data-ng-click="User.orderBy(key)">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="u in User.users | orderBy:User.predicate:User.reverse | filter : searchUser">
          <td>
            <input type="checkbox" id="user-{{$index}}" data-ng-model="u.selected">
            <label for="user-{{$index}}"></label>
          </td>
          <td>{{ u.name }}</td>
          <td>{{ u.email }}</td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-large red waves-effect waves-light col s12" data-ng-click="User.remove()">DELETE</button>

  </div>

  <script src="../../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController);

    function UserController() {
      var vm = this;
      vm.title = 'Be MEAN - Users';
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com'},
        {name: 'João', email: 'joao@macioesedoso.com'},
        {name: 'Franciele', email: 'fran@quimica.com'}
      ];

      // Order
      vm.predicate = '';
      vm.reverse = false;
      vm.orderBy = orderBy;

      function orderBy(key) {
        if (key === vm.predicate) vm.reverse = !vm.reverse;
        else {
          vm.predicate = key;
          vm.reverse = false;
        }
      }

      // Add and Delete
      vm.add = add;
      vm.remove = remove;

      function add(user) {
        vm.users.push(user);
      }

      function remove() {
        let usersList = angular.copy(vm.users);
        let ajust = 0;
        usersList.forEach( (elem, index) => {
          if (elem.selected) {
            vm.users.splice(index - ajust, 1);
            ajust++;
          }
        });
      }
    }
  </script>
</body>
</html>

```
