# AngularJS - Aula 15 - Exercício
**User:** [gkal19](https://github.com/gkal19)
**Autor:** Gabriel Kalani
**Data** 1469109820596

### 1 - Refatorar a view para mostrar os dados em um Form
```html
<div class="card-panel">
	<form>
		<label for="name">Nome: </label>
		<input type="text" name="name" value="{{ UserDetails.users[UserDetails.routeParams.id].name }}">

		<br><br><br>

		<label for="email">E-mail: </label>
		<input type="email" name="email" value="{{ UserDetails.users[UserDetails.routeParams.id].email }}">
	</form>
</div>
```

### 2 - Criar mais 1 rota que busque pelo email.
```html
<!-- user-details.html -->
<h2>Dados do user</h2>

<p>Buscar user: {{ UserDetails.routeParams.email }}</p>

<p class="card-panel">
	Nome: {{ UserDetails.users[UserDetails.routeParams.users.email].name }}

	<br>

	Email: {{ UserDetails.users[UserDetails.routeParams.users.email].email }}
</p>
```

```js
// app.js
.when('/users/:email', {
  templateUrl: 'views/user-details.html',
  controller: 'UserDetailsController',
  controllerAs: 'UserDetails'
})
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-15/gkal19/index.html)