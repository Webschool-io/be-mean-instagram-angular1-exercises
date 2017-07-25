# AngularJS 1 - Aula 09 - Exercício
**user:** [AlexMCoder](https://github.com/AlexMCoder)

**autor:** Alex Morgado Pereira


## Criar uma animação melhor com *keyframes* para **entrada** do usuário na lista.

## Criar uma animação melhor com *keyframes* para **saída** do usuário na lista.

## Criar uma animação melhor com *keyframes* para **ordenação** na lista.


```html
<!DOCTYPE html>

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

    h1{
        font-size: 30px;
        font-weight: bold;
        color: blue;
    }

    .animate{
        transition: all linear 0.5s;
    }

    .ng-hide{
        height: 0;
    }

    .item.ng-enter{
        animation-name: fade;
        animation-duration: 5s;
    }

    .item.ng-enter.ng-enter-active{
        animation-name: fade;
        animation-duration: 5s;
    }

    .item.ng-leave{
        animation-name: bottomLast;
        animation-duration: 5s;
    }

    .item.ng-leave.ng-leave-active{
        animation-name: bottomLast;
        animation-duration: 5s;
    }

    .item.ng-move{
        animation-name: bigLast;
        animation-duration: 5s;
    }

    .item.ng-move.ng-move-active{
        animation-name: bigLast;
        animation-duration: 5s;
    }

    /* KEYFRAMES */
    @-webkit-keyframes fade {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes fade {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    @-webkit-keyframes bottomLast {
      from { top: 0; left: 0; }
      to   { top: 100px; left: 100px; }
    }

    @keyframes bottomLast {
      from { top: 0; left: 0; }
      to   { top: 100px; left: 100px; }
    }

    @-webkit-keyframes bigLast {
        0% {
          font-size: 10px;
        }
        30% {
          font-size: 15px;
        }
        100% {
          font-size: 12px;
        }
    }

    @keyframes bigLast {
        0% {
          font-size: 10px;
        }
        30% {
          font-size: 15px;
        }
        100% {
          font-size: 12px;
        }
    }
    </style>
</head>

<body data-ng-controller="UserController as User">
    <section class="row wrapper">
        <h1>{{ User.titulo }}</h1>

        <p class="col s12">
            <label>
                <input type="text" data-ng-model="User.form.name" placeholder="Name">
            </label>

            <br>

            <label>
                <input type="email" data-ng-model="User.form.email" placeholder="Email">
            </label>
        </p>

        <button data-ng-click="User.add(User.form, User.users)" class="btn btn-large green waves-effect waves-light col s12" type="submit" name="action">Add</button>

        <button data-ng-hide="!User.editing" data-ng-click="User.save(User.form)" class="btn btn-large blue waves-effect waves-light col s12 animate" type="submit" name="action">Save</button>

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
                <tr class="item" data-ng-repeat="user in User.users | filter:searchUser | orderBy:User.predicate:User.reverse ">
                    <td>
                        <input type="checkbox" id="user-{{$index}}" ng-model="user.selecionado" />
                        <label for="user-{{$index}}"></label>
                    </td>

                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>

                    <td>
                        <button data-ng-click="User.edit(user, $index)" class="btn blue waves-effect waves-light col s12" type="submit" name="action">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <br><br><br>

        <button data-ng-click="User.orderByName()" class="btn btn-large blue waves-effect waves-light col s12 animate" type="submit" name="action">Order Name</button>

        <br><br><br><br>

        <button data-ng-click="User.orderByEmail()" class="btn btn-large blue waves-effect waves-light col s12 animate" type="submit" name="action">Order Email</button>

        <br><br><br><br>

        <button data-ng-click="User.remove(User.users)" class="btn btn-large red waves-effect waves-light col s12" type="submit" name="action">Remove</button>
    </section>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular-animate.js"></script>

    <script>
    angular.module('BeMEAN', ['ngAnimate'])
        .controller('UserController', UserController);

    function UserController() {
        var vm = this;

        vm.form = {};
        vm.titulo = "Be MEAN - Users";
        vm.editing = false;
        vm.reverse = false;
        vm.users = [
                {name: 'Suissa', email: 'suissera@manoveio.com'}
                , {name: 'João', email: 'joao@macioesedoso.com'}
                , {name: 'Franciele', email: 'fran@quimica.com'}
                , {name: 'Alex', email: 'alex@gmail.com'}
        ];

        function getKeyLength() {
            return Object.keys(angular.copy(vm.users[0])).length;
        }
        vm.keysLength = getKeyLength();


        function orderByName(){
            vm.predicate = 'name';
            vm.reverse = !vm.reverse;
        }
        vm.orderByName = orderByName;

        function orderByEmail(){
            vm.predicate = 'email';
            vm.reverse = !vm.reverse;
        }
        vm.orderByEmail = orderByEmail;

        vm.add = add;
        function add(user) {
            vm.users.push(angular.copy(user));
            vm.form = {};
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
            function saveUser(el, i){
                if(i === user.index) {
                    delete user.index;
                    return angular.copy(user);
                }
                return el;
            }

            var users = vm.users.map(saveUser);
            vm.users = users;
            vm.editing = false;
            vm.form = {};
        }
    }
    </script>
</body>
</html>
```
