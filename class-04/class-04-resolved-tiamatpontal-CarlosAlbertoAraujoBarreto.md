# Angular - Exercício 04 - resolvido

autor: Carlos Alberto de Araujo barreto

## Exercício 01 - Adicionar mais um campo em todos os Controllers e utilizar ele em orderBy.

## Exercício 02 - Utilizar esse valor adicional no ng-init para cada ng-repeat da View.

## Exercício 03 - Criar um campo de filtro para cada ng-repeat.

```
<!doctype html>
<html lang="pt-br" data-ng-app="bemean">
<head>
	<meta charset="utf-8">
	<title>Exercicio 04</title>
</head>
<body>
	<div data-ng-controller="ProfessorController as Professor" data-ng-init="predicate='nome'">
		<h2>{{Professor.titulo}}</h2>
		<br/>
		<label><input type="text" data-ng-model="searchProfessor"/></label>
		<table>
			<thead>
				<tr>
					<th data-ng-repeat="(key, value) in Professor.professores[0]">{{key}}</th>
				</tr>
			</thead>
			<tbody>	
				<tr data-ng-repeat="professor in Professor.professores | orderBy:predicate | filter:searchProfessor">
					<td data-ng-repeat="(key, value) in professor">{{value}}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<br/>

	<div data-ng-controller="UsuarioController as Usuario" data-ng-init="predicate='nome'">
		<h2>{{Usuario.titulo}}</h2>
		<br/>
		<label><input type="text" data-ng-model="searchUsuario"/></label>
		<table>
			<thead>
				<tr>
					<th data-ng-repeat="(key, value) in Usuario.usuarios[0]">{{key}}</th>
				</tr>
			</thead>
			<tbody>	
				<tr data-ng-repeat="usuario in Usuario.usuarios | orderBy:predicate | filter:searchUsuario">
					<td data-ng-repeat="(key, value) in usuario">{{value}}</td>
				</tr>
			</tbody>
		</table>	
	</div>
	<br/>

	<div data-ng-controller="CursoController as Curso" data-ng-init="predicate='nome'">
		<h2>{{Curso.titulo}}</h2>
		<br/>
		<label><input type="text" data-ng-model="searchCurso"/></label>
		<table>
			<thead>
				<tr>
					<th data-ng-repeat="(key, value) in Curso.cursos[0]">{{key}}</th>
				</tr>
			</thead>
			<tbody>	
				<tr data-ng-repeat="curso in Curso.cursos | orderBy:predicate | filter:searchCurso">
					<td data-ng-repeat="(key, value) in curso">{{value}}</td>
				</tr>
			</tbody>
		</table>	
	</div>

	<script src="angular.min.js"></script>
	<script>
		angular.module("bemean", [])
			.controller("ProfessorController", ProfessorController)
			.controller("UsuarioController", UsuarioController)
			.controller("CursoController", CursoController);

		function ProfessorController($scope) {
			var vm = this;
			vm.titulo = "Professores do EaD";
			vm.professores = [
				{nome: "Joe Pass", disciplina: "Jazz Guitar Modulo 1", idade: 15}
				,{nome: "Kiko Loureiro", disciplina: "Shred Guitar Modulo 1", idade: 42}
			];
		}

		function UsuarioController($scope) {
			var vm = this;
			vm.titulo = "Usuarios do EaD";
			vm.usuarios = [
				{nome: "José", email: "jose@gmail.com", idade: 16}
				,{nome: "Mayara", email: "mayara@gmail.com", idade: 15}
				,{nome: "Samara", email: "samara@gmail.com", idade: 25}
				,{nome: "Ricardo", email: "ricardo@gmail.com", idade: 21}
			];
		}

		function CursoController($scope) {
			var vm = this;
			vm.titulo = "Cursos EaD";
			vm.cursos = [
				{nome: "Angular", duracao: "1 semestre"}
				,{nome: "NodeJs", duracao: "2 semestres"}
				,{nome: "MongoDb", duracao: "2 semestres"}
				,{nome: "Express", duracao: "1 semestre"}
			];
		}

	</script>
</body>
</html>
```
