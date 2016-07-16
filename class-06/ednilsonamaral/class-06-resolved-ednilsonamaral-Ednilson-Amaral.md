# AngularJS 1.5.x - Aula 03 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468638276611


## Criar a função de `delete` utilizando `splice` em vez de `filter`.


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
    </style>
</head>

<body data-ng-controller="UserController as User">
    <section class="row wrapper">
        <h1>{{ User.titulo }}</h1>

        <p class="col s12">
            <label>
                <input type="text" data-ng-model="form.User.name" placeholder="Name">
            </label>

            <br>

            <label>
                <input type="email" data-ng-model="form.User.email" placeholder="Email">
            </label>
        </p>

        <button data-ng-click="User.add(form.User)" class="btn btn-large green waves-effect waves-light col s12" type="submit" name="action">Add</button>

        <span data-ng-init="predicate = 'name'; reverse = true; "></span>

        <table>
            <thead>
                <tr>
                    <th colspan="{{ User.keysLength + 1 }}">
                        <label>
                            <input ng-model="searchUser" placeholder="Search">
                        </label>
                    </th>
                </tr>

                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                <tr data-ng-repeat="user in User.users | orderBy:predicate:reverse | filter:searchUser ">
                    <td>
                        <input type="checkbox" id="user-{{$index}}" ng-model="user.selecionado" />
                        <label for="user-{{$index}}"></label>
                    </td>

                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>

        <button data-ng-click="User.remove(User.users)" class="btn btn-large red waves-effect waves-light col s12" type="submit" name="action">Remove</button>
    </section>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <script>
    angular.module('BeMEAN', [])
        .controller('UserController', UserController);

    function UserController() {
        var vm = this;
        vm.titulo = "Be MEAN - Usuários";
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
            users.forEach(function(element, index) {
                if (users[index].selecionado) {
                    users.splice(users.indexOf(element), 1);
                }
            });
        }
    }
    </script>
</body>
</html>
```
