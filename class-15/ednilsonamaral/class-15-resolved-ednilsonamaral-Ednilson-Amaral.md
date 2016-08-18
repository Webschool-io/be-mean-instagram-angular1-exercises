# AngularJS 1.5.x - Aula 15 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468962226790


## Refatorar a View para mostrar os dados em um Form.

```html
<div class="card-panel">
	<form>
		<label for="name">Nome: </label>
		<input type="text" name="name" value="{{ UserDetails.users[UserDetails.routeParams.id].name }}">

		<br><br><br>

		<label for="email">Email: </label>
		<input type="email" name="email" value="{{ UserDetails.users[UserDetails.routeParams.id].email }}">
	</form>
</div>
```

* [Arquivos](/exercicio01)

## Criar mais 1 rota que busque pelo **email**.

`users.html`
```html
<td><a href="#/users/{{user.email}}">{{ user.name }}</a></td>
```

`user-details.html`
```html
<p>Buscar o user pelo email: {{ UserDetails.routeParams.email }}</p>

<p class="card-panel">
	Nome: {{ UserDetails.users[UserDetails.routeParams.users.email].name }}

	<br>

	Email: {{ UserDetails.users[UserDetails.routeParams.users.email].email }}
</p>
```

`app.js`
```js
.when('/users/:email', {
  templateUrl: 'views/user-details.html',
  controller: 'UserDetailsController',
  controllerAs: 'UserDetails'
})
```

* [Arquivos](/exercicio02)
