Nome: Marco Comassetto

Github: [marcommas](https://github.com/marcommas/)

Data: 14/05/2016

```html
<!doctype html>
<html lang="pt-br" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
  <title>BeMEAN AngularJS - Ex 8</title>
  <style type="text/css">
  .wrapper{
    max-width: 800px;
    margin: 0 auto;
  }

  .ng-hide{
    height: 0;
  }

  .animateReverse{
    animation: animTextoVolta 2s  alternate;
  }
  .animate { 
    animation: animTexto 2s  alternate;
  }

  @keyframes animTexto {
    0%, 25% {
      opacity: 0;
      transform: translateX(-300px);
    }
    75%, 100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes animTextoVolta {
    0%, 25% {
      opacity: 0;
      transform: translateX(0px);
    }
    75%, 100% {
      opacity: 1;
      transform: translateX(-300px);
    }
  }


</style>
</head>
<body data-ng-controller="UserController as User">
  <section class="row wrapper">

    <h1>{{User.titulo}}</h1>
    <p class="col s12">
      <label><input type="text" data-ng-model="User.form.name" class="form-control" placeholder="Nome"></input></label>
      <label><input type="email" data-ng-model="User.form.email"  class="form-control" placeholder="Email"></input></label>
    </p>
    <button data-ng-click="User.add(User.form)" class="btn btn-large green waves-effect waves-light col s12" type="submit" name="action">Add</button>

    <button data-ng-hide="!User.editing" data-ng-click="User.save(User.form)" class="btn btn-large blue waves-effect waves-light col s12 animate" type="submit" name="action">Save</button>


    <span data-ng-init="predicate = 'name'; reverse = false;"></span>
    
    <table >
      <thead>
        <tr>
          <th colspan="{{User.keysLength + 1 }}" >
            <label><input ng-model="searchUser" placeholder="Busca" /></label>
          </th>
        </tr>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr  data-ng-repeat="user in User.users | filter:searchUser">
          <td>
            <input type="checkbox" id="user-{{$index}}" ng-model="user.selecionado"/>
            <label for="user-{{$index}}"></label>
          </td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td><button data-ng-click="User.edit(user, $index)" class="btn btn-large blue waves-effect waves-light col s12" type="submit" name="action">Edit</button></td>
        </tr>
       
      </tbody>
    </table>

    <button class="btn btn-large red waves-effect waves-light col s12" value="Add User" data-ng-click="User.remove(User.users)" type="submit" name="action">Remove</button>

  </section>



  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular-animate.js"></script>

  <script>
    angular.module("BeMEAN", ['ngAnimate'])
      .controller('UserController', UserController)

    function UserController() {
      var vm = this;
      vm.titulo = "Be MEAN - Listagem dos usuários";
      vm.editing = false;
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com'}
      , {name: 'João', email: 'joao@macioesedoso.com'}
      , {name: 'Franciele', email: 'fran@quimica.com'}
      ];

      function getKeyLength() {
        return Object.keys(angular.copy(vm.users[0])).length;
      }
      vm.keysLength = getKeyLength();

      vm.add = add;
      function add(user) {
        vm.users.push(angular.copy(user));
      }

      vm.remove = remove;
      function remove(users) {
        vm.users = users.filter(function (el){ return !el.selecionado });
      }

      vm.edit = edit;
      function edit(user, index) {
        vm.form = angular.copy(user);
        vm.form.index = index;
        vm.editing = true;
      }

      vm.save = save;
      function save(user) {
        var users = vm.users.map(function(el, i){
          if (i === user.index) {
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
