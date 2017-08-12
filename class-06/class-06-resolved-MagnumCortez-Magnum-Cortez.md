# AngularJS - Aula 06 - Exercício
**user:** [MagnumCortez](https://github.com/MagnumCortez)  

**autor:** Magnum cortez

## 1 - Criar função de delete utilizando splice em vez de filter

```html
<!DOCTYPE html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <title>Class 06</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
  <style>
    .wrapper{
      max-width: 600px;
      margin: 0 auto;
    }
  </style>
</head>
<body data-ng_controller="UserController as User">
  <section class="row wrapper">
    <h1>{{User.titulo}}</h1>
    <p class="col s12">
      <label>
        <input type="text" ng-model="form.User.name" placeholder="Name">
      </label>
      <br>
      <label>
        <input type="email" ng-model="form.User.email" placeholder="Email">
      </label>
      <br>
      <label>
        <input type="text" ng-model="form.User.occupation" placeholder="Occupation">
      </label>
      <br>
      <label>
        <input type="number" ng-model="form.User.age" placeholder="Age">
      </label>
      
      <button data-ng-click="User.add(form.User)" class="btn btn-large green waves-effect waves-light col s12">Add User</button>
    </p>

    <span data-ng-init="predicate = 'name'; reverse = true;"></span>
    <table border="1">
      <thead>
        <tr>
          <th colspan="{{ User.keyLength +1 }}">
            <label>
              <input ng-model="searchUser" placeholder="Search">
            </label>
          </th>
        </tr>
        <tr>
          <th></th>
          <th data-ng-repeat="(key,value) in User.users[0]">
                    <a ng-click="User.sort(key)">{{key}}</a>
                </th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="user in User.users | orderBy:User.predicate | filter:searchUser">
          <td>
            <input type="checkbox" id="user-{{$index}}" ng-model="user.selecionado"/>
            <label for="user-{{$index}}"></label> <!-- Usa-se por causa do materializeCSS -->
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.occupation }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>
    <button data-ng-click="User.remove(User.users)" class="btn btn-large red waves-effect waves-light col s12">Delete</button>
  </section>

<script src="angular.min.js"></script>
<script>
  angular.module("BeMEAN",[])
  .controller("UserController", UserController)
  
  function UserController() {
    var vm = this;
    vm.titulo = "Usuários";
    vm.predicate = 'name';
    vm.users = [
      {name: 'Magnum Cortez', email: 'magnum@email.com.br', occupation: 'Developer PHP', age: 33},
      {name: 'Eduardo Soares', email: 'eduardo@email.com.br', occupation: 'Developer PHP', age: 27},
      {name: 'Marcos Furtado', email: 'marcos@email.com.br', occupation: 'Developer PHP', age: 19},
      {name: 'Pedro Silva', email: 'pedro@email.com.br', occupation: 'Analista de Teste', age: 18},
      {name: 'Talita Camilo', email: 'talita@email.com.br', occupation: 'Developer FrontEnd', age: 25},
      {name: 'Ana Brito', email: 'ana@email.com.br', occupation: 'Analista de Teste', age: 22}
    ];
    vm.keyLength = Object.keys(vm.users[0]).length;

    vm.add = add;
    function add(user) {
      vm.users.push(angular.copy(user));
    }

    vm.remove = remove;
    function remove(users) {
      for (var i = vm.users.length-1; i >=0; i--) {
        if (vm.users[i].selecionado) {
          vm.users.splice(i, 1);
        }
      }
    }

    vm.sort = sort;
    function sort(col) {
      vm.predicate = col;
    }
  }
</script>
</body>
</html>
```