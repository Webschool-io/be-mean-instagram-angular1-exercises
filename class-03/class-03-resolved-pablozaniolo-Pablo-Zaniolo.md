# AngularJS 1.5.x - Aula 03 - Exercício  

**github:** https://github.com/pablozaniolo  
**autor:** Pablo Zaniolo


##1. Criar um Controller de Professores, igual aos outros, seguindo nosso último padrão.

##2. Utilizar seu filtro criado na aula passada em algum dos seus valores.

```
<!DOCTYPE html>
<html lang="pt-br" data-ng-app="BeMean">
<head>
	<meta charset="UTF-8"/>
	<title>Be - Mean - Exercicio 3</title>
</head>
<body>

<div data-ng-controller="TeacherController as Teacher">
	<h1>{{ Teacher.title }}</h1>

	<ul data-ng-repeat="teacher in Teacher.teachers">
		<li>{{ teacher.name | uppercase }} {{ teacher.age | age }}</li>
	</ul>
</div>




<script src="angular.min.js"></script>

<script>
	angular.module('BeMean', [])
	.filter('age', age)
	.controller('TeacherController', TeacherController);

	function age() {
		return function(text) {
			if(text < 18) { return 'é menor de idade'}
			if(text >= 18) { return 'é maior de idade'}
		}
	}

	function TeacherController() {
		var vm = this;
		vm.title = "List	";
		vm.teachers = [
			{ name:"Suissa", age:30 }
		  , { name:"Jean", age:35 }
		]
	}
</script>
	
</body>
</html>

```