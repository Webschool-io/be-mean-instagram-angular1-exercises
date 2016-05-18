# AngularJS - Aula 03 - Exercício  
**user:** [charles7421] (https://github.com/charles7421)  
**autor:** Charles de Freitas Garcia


## Criar 1 controller de professores, igual aos outros , seguindo nosso último padrão

and 

## Utilizar seu filtro criado na aula passada em algum dos seus valores.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Exercício 03 - Angular - BeMEAN</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	<body data-ng-app="ex03">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
				<fieldset>
					<legend>Exercício 03 - Controllers</legend>
					<div class="col-md-12" data-ng-controller="UserController as User">
						<h2> {{ User.titulo}} </h2>
						<ul>
							<li data-ng-repeat="user in User.users">
								{{ user.name }} - {{ user.email }}
							</li>
						</ul>
					</div>
					<div class="col-md-12" data-ng-controller="CursoController as Curso">
						<h2> {{ Curso.titulo}} </h2>
						<ul>
							<li data-ng-repeat="curso in Curso.cursos">
								{{ curso.name }} - {{ curso.teacher }}
							</li>
						</ul>
					</div>
					<div class="col-md-12" data-ng-controller="ProfessorController as Professor">
						<h2> {{ Professor.titulo}} </h2>
						<ul>
							<li data-ng-repeat="professor in Professor.professores">
								{{ professor.name }} - {{ professor.curso }} - {{ professor.idade | verificarIdade }}
							</li>
						</ul>
					</div>
				</fieldset>
					
				</div>
			</div>
		</div>
	</body>
	<script src="angular.min.js"></script>
	<script>
		angular.module('ex03', [])
			   .filter("verificarIdade", function () {
 	       		return function (text) {
 	       			if (text) {
        				if (text >= 18) {
      						return "Maior";
   						} else {
      					return "Menor";
      					}
      				}
      			}})
			   .controller('UserController', UserController)
			   .controller('CursoController', CursoController)
			   .controller('ProfessorController', ProfessorController);

	       	function UserController() {
	       		var vm = this;
	       		vm.titulo = "Be Mean - Usuários";
	       		vm.users = [
		       		{name: 'Suissa', email: 'suissa@suissa.com.br'},
		       		{name: 'João', email: 'joao@suissa.com.br'},
		       		{name: 'Franciele', email: 'franciele@suissa.com.br'}
	       		];
	       	}

	       	function CursoController() {
	       		var vm = this;
	       		vm.titulo = "Be Mean - Cursos";
	       		vm.cursos = [
		       		{name: 'Be Mean', teacher: 'Suissa'},
		       		{name: 'Machine Learning', teacher: 'Ivan Gustavo'},
		       		{name: 'Laravel', teacher: 'Michael Douglas'}
	       		];
	       	}

	       	function ProfessorController() {
	       		var vm = this;
	       		vm.titulo = "Be Mean - Professores";
	       		vm.professores = [
		       		{name: 'Suissa', curso: 'Be Mean', idade: '18'},
		       		{name: 'João', curso: 'Be Mean', idade: '45'},
		       		{name: 'Franciele', curso: 'Be Mean', idade: '16'}
	       		];
	       	}
	</script>
	<style>
		body { color: #000; margin-top: 50px;}
		label { display: block }
		.fonte { font-size: 1.3em; }
		.padding { padding: 20px 0; }
	</style>
</html>

```