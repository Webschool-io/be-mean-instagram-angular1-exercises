# AngularJS 1.5.x - Aula 17 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468987301844


## Crie uma rota/view que receba o nome de um usuário do GitHub na URL **users/github/:user** e mostre **pelo menos** 8 atributos, com sua imagem de avatar em uma estrutura visual mais correta.

`users.js`
```js
.when('/users/github/:user', {
    templateUrl: 'views/users-github.html',
    controller: 'UserGitHubController',
    controllerAs: 'UserGitHub'
})
```

`users-github.html`
```html
<h2 class="h2">Dados do user</h2>

<div class="col s12 m7">
	<div class="card">
		<div class="card-image">
			<img src="{{ UserGitHub.user.avatar_url }}" alt="Avatar do github do {{ UserGitHub.user.name }}" />
			<span class="card-title">{{ UserGitHub.user.name }}</span>
		</div>

		<div class="card-content">
			<p><strong>Nome: </strong> {{ UserGitHub.user.name }}</p>
			<p><strong>Username: </strong> {{ UserGitHub.user.login }}</p>
			<p><strong>Usuário desde: </strong> {{ UserGitHub.user.created_at }}</p>
			<p><strong>Repositórios Públicos: </strong> {{ UserGitHub.user.public_repos }}</p>
			<p><strong>Localização: </strong> {{ UserGitHub.user.location }}</p>
		</div>

		<div class="card-action">
			<a href="{{ UserGitHub.user.blog }}">Blog</a>
			<a href="mailto:{{ UserGitHub.user.email }}">Email</a>
		</div>
	</div>
</div>
```

![https://raw.githubusercontent.com/ednilsonamaral/be-mean-instagram-angular1/af6d86d276323a58b5dc430e97b066d117de93c8/img/print_aula_17.png](Print)

* [Arquivos](/exercicio)
