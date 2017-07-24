# AngularJS - Aula 06 - Exercício
**user:** [alexMCoder](https://github.com/AlexMCoder/)

**autor:** Alex Morgado Pereira

## 1 - Criar função de delete utilizando splice em vez de filter

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

</div>

  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController)
      .controller('CourseController', CourseController)
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
  </script>
</body>
</html>
```