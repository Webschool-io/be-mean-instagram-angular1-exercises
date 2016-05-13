# AngularJS 1.5.x - Aula 04 - Exercício  
**user:** [hc3](https://github.com/hc3)  
**autor:** Eliel das Virgens

## Adicionar masi 1 campo em todos os controllers e utilizar ele em orderBy
- campos adicionados foram 
- User - nivel_acesso
- Curso - qnt_aulas
- Professor - idade 


## Utilizar esse valor adicional no ng-init para cada ng-repeat da view

```html
<span data-ng-init="predicate= 'nivel_acesso'; reverse= false;"></span>
<span data-ng-init="predicate= 'qnt_aulas'"></span>
<span data-ng-init="predicate= 'idade'"></span>
```

## Criar um campo de filtro para cada ng-repeat,
```html
<label>Busca:<input data-ng-model="searchUser"></label>
<tr data-ng-repeat="user in User.users | orderBy:'predicate' | filter:searchUser">
<label>Busca:<input data-ng-model="searchCurso"></label>
<tr data-ng-repeat="curso in Curso.cursos | orderBy:'predicate' | filter:searchCurso">
<label>Busca:<input data-ng-model="searchProfessor"></label>
<tr data-ng-repeat="professor in Professor.professores | orderBy:'predicate' | filter:searchProfessor">
```

## PAGINA COM O EXEMPLO


```html
<html lang="pt-br" data-ng-app="aula04">

<head>
    <meta charset="UTF-8">
    <title>aula04</title>
	<!-- Compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

</head>

<body>
	<div class="container" data-ng-controller="UserController as User">
		<h1>{{User.titulo}}</h1>
		<span data-ng-init="predicate= 'nivel_acesso'; reverse= false;"></span>
		<label>Busca:<input data-ng-model="searchUser"></label>
		<table>
			<thead>
				<tr>
					<th data-ng-repeat="(key,value) in User.users[0]">{{ key }}</th>
				</tr>
			</thead>

			<tbody>
				<tr data-ng-repeat="user in User.users | orderBy:'predicate' | filter:searchUser">
					<td data-ng-repeat="(key,value) in user">{{ value }}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="container" data-ng-controller="CursoController as Curso">
		<h1>{{Curso.titulo}}</h1>
		<span data-ng-init="predicate= 'qnt_aulas'"></span>
		<label>Busca:<input data-ng-model="searchCurso"></label>
		<table>
			<thead>
				<tr>
					<th data-ng-repeat="(key,value) in Curso.cursos[0]">{{ key }}</th>
				</tr>
			</thead>
				
			<tbody>
				<tr data-ng-repeat="curso in Curso.cursos | orderBy:'predicate' | filter:searchCurso">
					<td data-ng-repeat="(key,value) in curso">{{ value }}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="container" data-ng-controller="ProfessorController as Professor">
		<h1>{{Professor.titulo}}</h1>
		<span data-ng-init="predicate= 'idade'"></span>
		<label>Busca:<input data-ng-model="searchProfessor"></label>
		<table>
			<thead>
				<tr>
					<th data-ng-repeat="(key,value) in Professor.professores[0]">{{ key }}</th>
				</tr>
			</thead>
				
			<tbody>
				<tr data-ng-repeat="professor in Professor.professores | orderBy:'predicate' | filter:searchProfessor">
					<td data-ng-repeat="(key,value) in professor">{{ value }}</td>
				</tr>
			</tbody>
		</table>
	</div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
 
  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
          
    <script>
        angular.module('aula04', [])
			.controller('UserController',UserController)
			.controller('CursoController',CursoController)
			.controller('ProfessorController',ProfessorController);
			
			function UserController() {
				var vm = this;
				vm.titulo = "Be Mean - Lista Usuários";
				vm.users = [
					{name:"Eliel",email:"eliel@bol.com.br",nivel_acesso:"SUPER ADMIN"}
					,{name:"Jose",email:"jose@bol.com.br",nivel_acesso:"BASIC"}
					,{name:"Martin",email:"martin@bol.com.br",nivel_acesso:"ADMIN"}
					,{name:"Steve",email:"steve@bol.com.br",nivel_acesso:"BASIC"}
				]
			}
			
			function CursoController() {
				var vm = this;
				vm.titulo = "Be Mean - Lista Cursos";
				vm.cursos = [
					{descricao:"Javascript",professor:"Jhon Papa",qnt_aulas:100}
					,{descricao:"PHP",professor:"Neri",qnt_aulas:40}
					,{descricao:"Java",professor:"Silveira",qnt_aulas:250}
					,{descricao:"Phyton",professor:"Silveira",qnt_aulas:35}
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