# AngularJS - Aula 17 - Exercício

**User:** [gkal19](https://github.com/gkal19)
**Autor:** Gabriel Kalani
**Data** 1469115056274

## Crie uma rota/view que receba o nome de um usuário do GitHub na URL **users/github/:user** e mostre **pelo menos** 8 atributos, com sua imagem de avatar em uma estrutura visual mais correta.
```html
<!-- users-github.html -->
<h2 class="h2">Dados do usuário</h2>

<div class="col s12 m7">
	<div class="card">
		<div class="card-image">
			<img src="{{ UserGitHub.user.avatar_url }}" alt="Avatar do github do {{ UserGitHub.user.name }}" />
			<span class="card-title">{{ UserGitHub.user.name }}</span>
		</div>

		<div class="card-content">
			<p><strong>Nome: </strong> {{ UserGitHub.user.name }}</p>
			<p><strong>Username: </strong> {{ UserGitHub.user.login }}</p>
			<p><strong>Criado: </strong> {{ UserGitHub.user.created_at }}</p>
			<p><strong>Repositórios Públicos: </strong> {{ UserGitHub.user.public_repos }}</p>
			<p><strong>Localização: </strong> {{ UserGitHub.user.location }}</p>
		</div>

		<div class="card-action">
			<a href="{{ UserGitHub.user.blog }}">Blog</a>
			<a href="mailto:{{ UserGitHub.user.email }}">E-mail</a>
		</div>
	</div>
</div>
```

> Agora, criamos a rota no `ùsers.js`

```js
.when('/users/github/:user', {
    templateUrl: 'views/users-github.html',
    controller: 'UserGitHubController',
    controllerAs: 'UserGitHub'
})
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-17/gkal19/index.html)