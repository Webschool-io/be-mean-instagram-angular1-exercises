# Angular - Exercício 03 - resolvido

autor: Carlos Alberto de Araujo barreto


## Exercício 01 - Criar um Controller de Professores, igual aos outros, seguindo nosso último padrão.
```
<!doctype html>
<html lang="pt-br" data-ng-app="bemean">
<head>
	<meta charset="utf-8">
	<title>Exercicio 01</title>
</head>
<body data-ng-controller="ProfessoresController as Professores">
	<h1>{{ Professores.titulo}}</h1>
	<ul data-ng-repeat="professor in Professores.professores">
		<li>{{professor.nome}} - {{professor.disciplina}}</li>
	</ul>
	<script src="angular.min.js"></script>
	<script>
		angular.module("bemean", [])
			.controller("ProfessoresController", ProfessoresController);

		function ProfessoresController($scope) {
			var vm = this;
			vm.titulo = "Professores do EaD";
			vm.professores = [
				{nome: "Joe Pass", disciplina: "Jazz Guitar Modulo 1"}
				,{nome: "Kiko Loureiro", disciplina: "Shred Guitar Modulo 1"}
			];
		}
	</script>
</body>
</html>
```
## Exercício 02 - Utilizar seu filtro criado na aula passada em alguns dos seus valores.
```
<!doctype html>
<html lang="pt-br" data-ng-app="bemean">
<head>
	<meta charset="utf-8">
	<title>Exercicio 02</title>
</head>
<body data-ng-controller="ProfessoresController as Professores">
	<h1>{{ Professores.titulo}}</h1>
	<ul data-ng-repeat="professor in Professores.professores">
		<li>{{professor.nome}} - {{professor.disciplina}} - {{professor.idade | maioridade}}</li>
	</ul>
	<script src="angular.min.js"></script>
	<script>
		angular.module("bemean", [])
			.controller("ProfessoresController", ProfessoresController)
			.filter('maioridade', function(){
				return function(text){
					if(text == undefined || text == "") return "";
					else						
						if(text < 18) 
							return "Menor de 18 anos.";
						else
							return "Maior de 18 anos";
				}
			});

		function ProfessoresController($scope) {
			var vm = this;
			vm.titulo = "Professores do EaD";
			vm.professores = [
				{nome: "Joe Pass", disciplina: "Jazz Guitar Modulo 1", idade: 15}
				,{nome: "Kiko Loureiro", disciplina: "Shred Guitar Modulo 1", idade: 42}
			];
		}
	</script>
</body>
</html>
```