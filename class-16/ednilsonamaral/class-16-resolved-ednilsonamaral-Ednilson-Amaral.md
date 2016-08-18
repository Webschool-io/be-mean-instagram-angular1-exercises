# AngularJS 1.5.x - Aula 16 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468980942519


## Refatorar o código do *config* para deixar no padrão que utilizamos do John Papa.

Seguindo o *Style Guide* do John Papa, a `config` deve ser passada como uma `function`. Refatorando, ficou da seguinte da forma:

`app.js`
```js
angular.module('BeMEAN', ['ngAnimate', 'ngRoute', 'User'])
  .config(config);

function config($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
    .otherwise({
      redirectTo: '/index'
    })
}
```

`users.js`
```js
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


## Criar a rota para a **edição** de um usuário, onde mesmo irá ter que clicar em botão na View dos detalhes do usuário onde o levará para: `/users/{{INDEX}}/edit`

`user.js` (rota)  
```js
.when('/users/:id/edit', {
    templateUrl: 'views/user-edit.html',
    controller: 'UserController',
    controllerAs: 'User'
});
```

`users-detail.html`
```html
<a href="/users/{{ UserDetails.routeParams.id }}/edit">- Editar esse User -</a>
```

`user-edit.html`
```html
<h3>Editing User</h3>

<form name="User.userForm">
	<label for="name">Nome: </label>
	<input type="text" name="name" value="{{ UserDetails.users[UserDetails.routeParams.id].name }}">

	<br><br><br>

	<label for="email">Email: </label>
	<input type="email" name="email" data-ng-model="UsersDetails.form.email" value="{{ UserDetails.users[UserDetails.routeParams.id].email }}">
</form>
```

* [Arquivos](/exercicio)
