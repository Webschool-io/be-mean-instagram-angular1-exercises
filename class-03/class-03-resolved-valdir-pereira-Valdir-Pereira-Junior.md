# AngularJS - Aula 03 - Exercício

Nome: **Valdir Pereira Júnior**  

Github: [valdir-pereira](https://github.com/valdir-pereira)  

Data: 10/08/2016

## 1- Criar 1 Controller de Professores, igual aos outros seguindo nosso último padrão.

```html

<!DOCTYPE html>
<html lang="en" data-ng-app="exercise03">
<head>
	<meta charset="UTF-8">
	<title> Exercise 03 </title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body data-ng-controller="UserController as User">
	
	<h1> {{User.titulo}} </h1>	
	<ul>
		<li data-ng-repeat="user in User.users">
			{{user.name}} - {{user.email}}
		</li>
	</ul>	

	<div data-ng-controller="CourseController as Curso">
		<h1> {{Curso.titulo}} </h1>
		<ul>
			<li data-ng-repeat="curso in Curso.cursos">
				{{curso.name}} - {{curso.teacher}}
			</li>
		</ul>
	</div>


	<div data-ng-controller="ProfessorController as Professor">
		<h1>{{Professor.titulo}} </h1>

		<table class="table table-striped">
			<thead>
				<tr>
					<th>#</th>
					<th>Nome</th>
					<th>Idade</th>
					<th>Salário</th>
				</tr>
			</thead>
			<tbody>
				<tr data-ng-repeat="professor in Professor.professores">
					<th>{{$index + 1}}</th>
					<td>{{professor.name}}</td>
					<td>{{professor.age}}</td>
					<td>{{professor.salario}}</td>
				</tr>
			</tbody>
		</table>
	</div>


	
	<script src="angular.min.js"></script>
	<script>
	angular.module('exercise03', [])
		.controller('ProfessorController', ProfessorController)
		.controller('UserController', UserController)
		.controller('CourseController', CourseController);

		function ProfessorController() {
			var vm = this;
			vm.titulo = "Professores do Be MEAN";
			vm.professores = [
				{name: 'Suissa', age: 30, salario: 8580, horarioAula: '13:00'},
				{name: 'João', age: 33, salario: 12420, horarioAula: '19:00'},
				{name: 'Francine', age: 26, salario: 14500, horarioAula: '8:00'}
			];
		}

		function UserController() {
			var vm = this;
			vm.titulo = "Be MEAN - Usuários";
			vm.users = [
			  {name: 'Suissa', email: 'suissera@manoveio.com'}
			, {name: 'João', email: 'joao@macioesedoso.com'}
			, {name: 'Franciele', email: 'fran@quimica.com'}
			];
		}

		function CourseController() {
			var vm = this;
			vm.titulo = "Be MEAN - Cursos";
			vm.cursos = [
			  {name: 'Be MEAN', teacher: 'suissa'}
			, {name: 'Learn Machine', teacher: 'Ivan Gustavo'}
			, {name: 'Laravel', teacher: 'Michel Douglas'}
			];
		}
	</script>
</body>
</html>
```

## 2- Utilizar seu filtro criado aula na passada em algum dos seus valores. 

```html
<!DOCTYPE html>
<html lang="en" data-ng-app="exercise03">
<head>
	<meta charset="UTF-8">
	<title> Exercise 03 </title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>	
	<div data-ng-controller="ProfessorController as Professor">
		<h1>{{Professor.titulo}} </h1>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>#</th>
					<th>Nome</th>
					<th>Idade</th>
					<th>Salário</th>
					<th>Horário da aula</th>
				</tr>
			</thead>
			<tbody>
				<tr data-ng-repeat="professor in Professor.professores">
					<th>{{$index + 1}}</th>
					<td>{{professor.name | uppercase}}</td>
					<td>{{professor.age}}</td>
					<td>{{professor.salario | currency: 'R$ '}}</td>
					<td>Sua aula será as {{professor.horarioAula}} hs no período da {{professor.horarioAula | calcTime}}</td>
				</tr>
			</tbody>
		</table>
	</div>
	
	<script src="angular.min.js"></script>
	<script>
	angular.module('exercise03', [])
		.controller('ProfessorController', ProfessorController)
		.filter('calcTime', function(){
			return function(text) {
				if(text) {
					var horas = parseInt(text.substring(0, 2), 10);
					var minutos = parseInt(text.substring(3,5), 10);
					var periodos =[horas <= 12, horas > 12 && horas <= 18, horas > 18 && horas <= 24];

					switch(periodos.indexOf(true)){
						case (0):
							return 'manhã'
						case (1):
							return 'tarde'
						case (2):
							return 'noite'
						case 'default':
							return 'hora inválida'
					}
				}
			}
		});

		function ProfessorController() {
			var vm = this;
			vm.titulo = "Professores do Be MEAN";
			vm.professores = [
				{name: 'Suissa', age: 30, salario: 8580, horarioAula: '13:00'},
				{name: 'João', age: 33, salario: 12420, horarioAula: '19:00'},
				{name: 'Francine', age: 26, salario: 14500, horarioAula: '8:00'}
			];
		}
	</script>
</body>
</html>
```

