# AngularJS - Aula 04 - Exercício  
**user:** [charles7421] (https://github.com/charles7421)  
**autor:** Charles de Freitas Garcia  
**date:** 17/05/2016 23:01

## 1) Adicionar mais 1 campo em todos os Controllers e utilizar ele em orderBy. 

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Exercício 04 - Angular - BeMEAN</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	<body data-ng-app="ex03">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
				<fieldset>
					<legend>Exercício 04 - CRUD read/retrieve</legend>
					<div class="col-md-12" data-ng-controller="UserController as User">
						<h2> {{ User.titulo}} </h2>
						<table>
							<thead>
								<tr>
									<th data-ng-repeat="(key, value) in User.users[0]">{{ key }}</th>
								</tr>
								<tbody>
									<tr data-ng-repeat="user in User.users | orderBy:'user'">
										<td data-ng-repeat="(key, value) in user" style="width: 200px">{{ value }}</td>
									</tr>
								</tbody>
							</thead>
						</table>
					</div>
					<div class="col-md-12" data-ng-controller="CursoController as Curso">
						<h2> {{ Curso.titulo}} </h2>
						<table>
							<thead>
								<tr>
									<th data-ng-repeat="(key, value) in Curso.cursos[0]">{{ key }}</th>
								</tr>
								<tbody>
									<tr data-ng-repeat="curso in Curso.cursos | orderBy:'user'">
										<td data-ng-repeat="(key, value) in curso" style="width: 200px">{{ value }}</td>
									</tr>
								</tbody>
							</thead>
						</table>
					</div>
					<div class="col-md-12" data-ng-controller="ProfessorController as Professor">
						<h2> {{ Professor.titulo}} </h2>
						<table>
							<thead>
								<tr>
									<th data-ng-repeat="(key, value) in Professor.professores[0]">{{ key }}</th>
								</tr>
								<tbody>
									<tr data-ng-repeat="professor in Professor.professores | orderBy:'user'">
										<td data-ng-repeat="(key, value) in professor" style="width: 200px">{{ value }}</td>
									</tr>
								</tbody>
							</thead>
						</table>
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
		       		{name: 'Suissa', email: 'suissa@suissa.com.br', user: 'ID-003'},
		       		{name: 'João', email: 'joao@suissa.com.br', user: 'ID-002'},
		       		{name: 'Franciele', email: 'franciele@suissa.com.br', user: 'ID-001'}
	       		];
	       	}


	       	function CursoController() {
	       		var vm = this;
	       		vm.titulo = "Be Mean - Cursos";
	       		vm.cursos = [
		       		{name: 'Be Mean', teacher: 'Suissa', user: 'ID-003'},
		       		{name: 'Machine Learning', teacher: 'Ivan Gustavo', user: 'ID-002'},
		       		{name: 'Laravel', teacher: 'Michael Douglas', user: 'ID-001'}
	       		];
	       	}


	       	function ProfessorController() {
	       		var vm = this;
	       		vm.titulo = "Be Mean - Professores";
	       		vm.professores = [
		       		{name: 'Suissa', curso: 'Be Mean', user: 'ID-003'},
		       		{name: 'João', curso: 'Be Mean', user: 'ID-002'},
		       		{name: 'Franciele', curso: 'Be Mean', user: 'ID-001'}
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
## 2) Utilizar esse valor adicional no ng-init para cada ng-repeat da View. 

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Exercício 04 - Angular - BeMEAN</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	<body data-ng-app="ex03">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
				<fieldset>
					<legend>Exercício 04 - CRUD read/retrieve</legend>
					<span data-ng-init="ordenar = 'user';"></span>
					<div class="col-md-12" data-ng-controller="UserController as User">
						<h2> {{ User.titulo}} </h2>
						<table>
							<thead>
								<tr>
									<th data-ng-repeat="(key, value) in User.users[0] | orderBy:ordenar">{{ key }}</th>
								</tr>
								<tbody>
									<tr data-ng-repeat="user in User.users | orderBy:ordenar">
										<td data-ng-repeat="(key, value) in user" style="width: 200px">{{ value }}</td>
									</tr>
								</tbody>
							</thead>
						</table>
					</div>
					<div class="col-md-12" data-ng-controller="CursoController as Curso">
						<h2> {{ Curso.titulo}} </h2>
						<table>
							<thead>
								<tr>
									<th data-ng-repeat="(key, value) in Curso.cursos[0]">{{ key }}</th>
								</tr>
								<tbody>
									<tr data-ng-repeat="curso in Curso.cursos | orderBy:ordenar">
										<td data-ng-repeat="(key, value) in curso" style="width: 200px">{{ value }}</td>
									</tr>
								</tbody>
							</thead>
						</table>
					</div>
					<div class="col-md-12" data-ng-controller="ProfessorController as Professor">
						<h2> {{ Professor.titulo}} </h2>
						<table>
							<thead>
								<tr>
									<th data-ng-repeat="(key, value) in Professor.professores[0]">{{ key }}</th>
								</tr>
								<tbody>
									<tr data-ng-repeat="professor in Professor.professores | orderBy:ordenar">
										<td data-ng-repeat="(key, value) in professor" style="width: 200px">{{ value }}</td>
									</tr>
								</tbody>
							</thead>
						</table>
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
		       		{name: 'Suissa', email: 'suissa@suissa.com.br', user: 'ID-003'},
		       		{name: 'João', email: 'joao@suissa.com.br', user: 'ID-002'},
		       		{name: 'Franciele', email: 'franciele@suissa.com.br', user: 'ID-001'}
	       		];
	       	}


	       	function CursoController() {
	       		var vm = this;
	       		vm.titulo = "Be Mean - Cursos";
	       		vm.cursos = [
		       		{name: 'Be Mean', teacher: 'Suissa', user: 'ID-003'},
		       		{name: 'Machine Learning', teacher: 'Ivan Gustavo', user: 'ID-002'},
		       		{name: 'Laravel', teacher: 'Michael Douglas', user: 'ID-001'}
	       		];
	       	}


	       	function ProfessorController() {
	       		var vm = this;
	       		vm.titulo = "Be Mean - Professores";
	       		vm.professores = [
		       		{name: 'Suissa', curso: 'Be Mean', user: 'ID-003'},
		       		{name: 'João', curso: 'Be Mean', user: 'ID-002'},
		       		{name: 'Franciele', curso: 'Be Mean', user: 'ID-001'}
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

## 3) Criar um campo de filtro para cada ng-repeat.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Exercício 04 - Angular - BeMEAN</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	<body data-ng-app="ex03">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
				<fieldset>
					<legend>Exercício 04 - CRUD read/retrieve</legend>
					<span data-ng-init="ordenar = 'user';"></span>
					<div class="col-md-12" data-ng-controller="UserController as User">
						<h2> {{ User.titulo}} </h2>
						<table>
							<thead>
								<tr>
									<th data-ng-repeat="(key, value) in User.users[0] | orderBy:ordenar">{{ key }}</th>
								</tr>
								<tbody>
									<label>Busca: <input type="text" class="form-control" ng-model="SearchUser"></label>
									<tr data-ng-repeat="user in User.users | orderBy:ordenar | filter:SearchUser">
										<td data-ng-repeat="(key, value) in user" style="width: 200px">{{ value }}</td>
									</tr>
								</tbody>
							</thead>
						</table>
						<hr>
					</div>
					<div class="col-md-12" data-ng-controller="CursoController as Curso">
						<h2> {{ Curso.titulo}} </h2>
						<table>
							<thead>
								<tr>
									<th data-ng-repeat="(key, value) in Curso.cursos[0]">{{ key }}</th>
								</tr>
								<tbody>
									<label>Busca: <input type="text" class="form-control" ng-model="SearchCurso"></label>
									<tr data-ng-repeat="curso in Curso.cursos | orderBy:ordenar | filter:SearchCurso">
										<td data-ng-repeat="(key, value) in curso" style="width: 200px">{{ value }}</td>
									</tr>
								</tbody>
							</thead>
						</table>
						<hr>
					</div>
					<div class="col-md-12" data-ng-controller="ProfessorController as Professor">
						<h2> {{ Professor.titulo}} </h2>
						<table>
							<thead>
								<tr>
									<th data-ng-repeat="(key, value) in Professor.professores[0]">{{ key }}</th>
								</tr>
								<tbody>
									<label>Busca: <input type="text" class="form-control" ng-model="SearchProfessor"></label>
									<tr data-ng-repeat="professor in Professor.professores | orderBy:ordenar | filter:SearchProfessor">
										<td data-ng-repeat="(key, value) in professor" style="width: 200px">{{ value }}</td>
									</tr>
								</tbody>
							</thead>
						</table>
						<hr>
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
		       		{name: 'Suissa', email: 'suissa@suissa.com.br', user: 'ID-003'},
		       		{name: 'João', email: 'joao@suissa.com.br', user: 'ID-002'},
		       		{name: 'Franciele', email: 'franciele@suissa.com.br', user: 'ID-001'}
	       		];
	       	}


	       	function CursoController() {
	       		var vm = this;
	       		vm.titulo = "Be Mean - Cursos";
	       		vm.cursos = [
		       		{name: 'Be Mean', teacher: 'Suissa', user: 'ID-003'},
		       		{name: 'Machine Learning', teacher: 'Ivan Gustavo', user: 'ID-002'},
		       		{name: 'Laravel', teacher: 'Michael Douglas', user: 'ID-001'}
	       		];
	       	}


	       	function ProfessorController() {
	       		var vm = this;
	       		vm.titulo = "Be Mean - Professores";
	       		vm.professores = [
		       		{name: 'Suissa', curso: 'Be Mean', user: 'ID-003'},
		       		{name: 'João', curso: 'Be Mean', user: 'ID-002'},
		       		{name: 'Franciele', curso: 'Be Mean', user: 'ID-001'}
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