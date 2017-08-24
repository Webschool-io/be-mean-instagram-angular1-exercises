# AngularJS - Aula 09 - Exercício
**user:** [MagnumCortez](https://github.com/MagnumCortez)  

**autor:** Magnum cortez


## Criar uma animação melhor com *keyframes* para **entrada** do usuário na lista.

## Criar uma animação melhor com *keyframes* para **saída** do usuário na lista.

## Criar uma animação melhor com *keyframes* para **busca** do usuário na lista.

## Criar uma animação melhor com *keyframes* para **ordenação** na lista.


```html
<!DOCTYPE html>
<html lang="en" data-ng-app="BeMEAN">
<head>
    <meta charset="utf-8">
    <title>Class 09 - Animate</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
    <style>
        .wrapper{
            max-width: 600px;
            margin: 0 auto;
        }
        .animate {
            transition: all linear 0.5s;
        }
        .ng-hide {
            height: 0px;
        }
        .btnEdit {
            -webkit-transform: scale(0.1);
            -ms-transform: scale(0.1);
            transform: scale(0.1);
        }
        .item.ng-enter {
            animation-name: enterEffect;
            animation-duration: 1s;
        }
        .item.ng-enter-acitve {
            animation-name: enterEffect;
            animation-duration: 1s;
        }
        @-webkit-keyframes enterEffect {
            0%   { transform: scale(0); opacity: 0;}
            70%   { transform: scale(1.1);}
            100%   { transform: scale(1); opacity: 1;}
        }
        @keyframes enterEffect {
            0%   { transform: scale(0); opacity: 0; }
            70%   { transform: scale(1.1); }
            100%   { transform: scale(1); opacity: 1;}
        }
        .item.ng-leave {
            animation-name: leaveEffect;
            animation-duration: 1.5s;
        }
        .item.ng-leave-active {
            animation-name: leaveEffect;
            animation-duration: 1.5s;
        }
        @-webkit-keyframes leaveEffect {
            0%   { transform: scale(1); }
            10%   { transform: scale(1.1); opacity: 1; }
            100%   { transform: scale(0); opacity: 0; }
        }
        @keyframes leaveEffect {
            0%   { transform: scale(1); }
            10%   { transform: scale(1.1); opacity: 1; }
            100%   { transform: scale(0); opacity: 0; }
        }
        .item.ng-move {
            animation-name: moveEffect;
            animation-duration: 2s;
        }
        .item.ng-move.ng-move-active {          
            animation-name: moveEffect;
            animation-duration: 2s;
        }
        @-webkit-keyframes moveEffect {
            0%   { color: red; background-color: #FFF }
            50%   { color: blue; background-color: #EEE }
            100%   { color: black; background-color: #FFF }
        }
        @keyframes moveEffect {
            0%   { color: red; background-color: #FFF}
            50%   { color: blue; background-color: #EEE }
            100%   { color: black; background-color: #FFF }
        }
    </style>
</head>
<body data-ng_controller="UserController as User">
    <section class="row wrapper">
        <h1>{{User.titulo}}</h1>
        <p class="col s12">
            <label>
                <input type="text" ng-model="User.form.name" placeholder="Name">
            </label>
            <br>
            <label>
                <input type="email" ng-model="User.form.email" placeholder="Email">
            </label>
            <br>
            <label>
                <input type="text" ng-model="User.form.occupation" placeholder="Occupation">
            </label>
            <br>
            <label>
                <input type="number" ng-model="User.form.age" placeholder="Age">
            </label>
            
            <button data-ng-click="User.add(User.form)" class="btn btn-large green waves-effect waves-light col s12" data-ng-hide="User.editing">Add User</button>

            <button data-ng-click="User.save(User.form)" class="btn btn-large blue waves-effect waves-light col s12" data-ng-show="User.editing">Save User</button>
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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Occupation</th>
                    <th>Age</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr class="item" data-ng-repeat="user in User.users | orderBy:User.predicate: User.reverse | filter:searchUser">
                    <td>
                        <input type="checkbox" id="user-{{$index}}" ng-model="user.selecionado"/>
                        <label for="user-{{$index}}"></label> <!-- Usa-se por causa do materializeCSS -->
                    </td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.occupation }}</td>
                    <td>{{ user.age }}</td>
                    <td>
                        <button data-ng-click="User.edit(user, $index)" class="btn btn-large blue waves-effect waves-light col s12" type="submit" data-ng-class="User.editing ? 'btnEdit' : ''">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button data-ng-click="User.orderBy('name')" class="btn btn-large black waves-effect 
        waves-light col s6">Order Por Nome</button>
        <button data-ng-click="User.orderBy('email')" class="btn btn-large black waves-effect waves-light col s6">Order Por Email</button>
        <button data-ng-click="User.remove(User.users)" class="btn btn-large red waves-effect waves-light col s12">Delete</button>
    </section>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-animate.js" charset="utf-8"></script>
<script>
    angular.module("BeMEAN",['ngAnimate'])
    .controller("UserController", UserController)
    
    function UserController() {
        var vm = this;
        vm.titulo = "Usuários";
        vm.predicate = 'name';
        vm.editing = false;
        vm.reverse = false;

        vm.users = [
            {name: 'Eduardo Soares', email: 'eduardo@email.com.br', occupation: 'Developer PHP', age: 27},
            {name: 'Magnum Cortez', email: 'magnum@email.com.br', occupation: 'Developer PHP', age: 33},
            {name: 'Marcos Furtado', email: 'marcos@email.com.br', occupation: 'Developer PHP', age: 19}            
        ];
        vm.keyLength = Object.keys(vm.users[0]).length;
        
        vm.add = add;
        function add(user) {
            vm.users.push(angular.copy(user));
            vm.form = {};
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
                if (i === user.index) {
                    delete user.index;
                    return user;
                }
                return el;
            });
            vm.users = angular.copy(users);
            vm.editing = false;
            vm.form = {};
        }

        vm.remove = remove;
        function remove(users) {
            vm.users = users.filter(function(el) { return !el.selecionado });
        }

        vm.orderBy = orderBy;
        function orderBy(field) {
            vm.predicate = field;
            vm.reverse = !vm.reverse;
        }
    }
</script>
</body>
</html>
```