# AngularJS - Aula 16 - Exercício
**User:** [gkal19](https://github.com/gkal19)
**Autor:** Gabriel Kalani
**Data** 1469113365482

### 1 - Refatorar o código para deixar no padrão que utilizamos do John Papa.
```js
// app.js
angular.module('BeMEAN', ['ngAnimate', 'ngRoute', 'User'])
  .config(config);

function config($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
    .otherwise({
      redirectTo: '/index'
    })
}
// users.js
angular.module('User', ['ngAnimate', 'ngRoute'])
    .config(config)
    .controller('UserController', UserController)
    .controller('UserDetailsController', UserDetailsController);

function config($routeProvider){
    $routeProvider
        .when('/users', {
            templateUrl: 'views/users-list.html',
            controller: 'UserController',
            controllerAs: 'User'
        })
        .when('/users/:id', {
            templateUrl: 'views/user-details.html',
            controller: 'UserDetailsController',
            controllerAs: 'UserDetails'
        });
}
```

### 2 - Criar a rota para a edição de um usuário, onde mesmo irá ter que clicar em botão na `View` dos detalhes do usuário onde o levará para:
> /users/INDEX/edit
```html
<!-- user-edit.html -->

<h3>Editar Usuário</h3>
<form name="User.userForm">
    <label for="name">Nome: </label>
    <input type="text" name="name" value="{{ UserDetails.users[UserDetails.routeParams.id].name }}">

    <br><br><br>

    <label for="email">Email: </label>
    <input type="email" name="email" data-ng-model="UsersDetails.form.email" value="{{ UserDetails.users[UserDetails.routeParams.id].email }}">
</form>
```

> Criei a rota no arquivo [users.js](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-16/gkal19/assets/js/users.js)

```js
.when('/users/:id/edit', {
			templateUrl: 'views/user-edit.html',
			controller: 'UserController',
			controllerAs: 'User'
		});
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-16/gkal19/index.html)