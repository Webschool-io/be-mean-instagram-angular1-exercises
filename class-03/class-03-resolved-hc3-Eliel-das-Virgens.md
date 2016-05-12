# AngularJS 1.5.x - Aula 03 - Exercício  
**user:** [hc3](https://github.com/hc3)  
**autor:** Eliel das Virgens

## Criar 1 controller de professores, igual aos outros , seguindo nosso último padrão


## Utilizar seu filtro criado na aula passada em algum dos seus valores.

segue os dois exercícios no mesmo código.

```html
<html lang="pt-br" data-ng-app="aula02">

<head>
    <meta charset="UTF-8">
    <title>aula02 - Filtros</title>
	<!-- Compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

</head>

<body>
	<div class="container" data-ng-controller="UserController as User">
		<h1>{{User.titulo}}</h1>
		<table>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Email</th>

				</tr>
			</thead>

			<tbody>
				<tr data-ng-repeat="user in User.users">
					<td>{{ user.name | lowercase }}</td>
					<td>{{ user.email | uppercase }}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="container" data-ng-controller="CursoController as Curso">
		<h1>{{Curso.titulo}}</h1>
		<table>
			<thead>
				<tr>
					<th>Descrição</th>
					<th>Professor</th>
				</tr>
			</thead>
				
			<tbody>
				<tr data-ng-repeat="curso in Curso.cursos">
					<td>{{ curso.descricao | lowercase }}</td>
					<td>{{ curso.professor | uppercase }}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="container" data-ng-controller="ProfessorController as Professor">
		<h1>{{Professor.titulo}}</h1>
		<table>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Idade</th>
				</tr>
			</thead>
				
			<tbody>
				<tr data-ng-repeat="professor in Professor.professores">
					<td>{{ professor.nome | lowercase }}</td>
					<td>{{ professor.idade | calculaIdade}}</td>
				</tr>
			</tbody>
		</table>
	</div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
 
  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
          
    <script>
        angular.module('aula02', [])
          .filter('calculaIdade',function() {
    				return function(text) {
    					if(text < 18) { return 'Menor de idade'}
    					if(text >= 18) { return 'Maior de idade'}
    				}
    			})
    			.controller('UserController',UserController)
    			.controller('CursoController',CursoController)
    			.controller('ProfessorController',ProfessorController);
    			
    			function UserController() {
    				var vm = this;
    				vm.titulo = "Be Mean - Lista Usuários";
    				vm.users = [
    					{name:"Eliel",email:"eliel@bol.com.br"}
    					,{name:"Jose",email:"jose@bol.com.br"}
    					,{name:"Martin",email:"martin@bol.com.br"}
    					,{name:"Steve",email:"steve@bol.com.br"}
    				]
    			}
    			
    			function CursoController() {
    				var vm = this;
    				vm.titulo = "Be Mean - Lista Cursos";
    				vm.cursos = [
    					{descricao:"Javascript",professor:"Jhon Papa"}
    					,{descricao:"PHP",professor:"Neri"}
    					,{descricao:"Java",professor:"Silveira"}
    					,{descricao:"Phyton",professor:"Silveira"}
    				]
    			}
    			
    			function ProfessorController() {
    				var vm = this;
    				vm.titulo = "Be Mean - Lista Professores";
    				vm.professores = [
    					{nome:"Jean",idade:30}
    					,{nome:"Jhon Papa",idade:35}
    					,{nome:"Addy Osmani",idade:35}
    					,{nome:"Linus Turvald",idade:40}
    				]
    			}
    </script>
</body>

</html>
```