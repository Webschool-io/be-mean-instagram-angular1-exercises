# AngularJS 1.5.x - Aula 02 - Exercício  
**user:** [hc3](https://github.com/hc3)  
**autor:** Eliel das Virgens

## Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.
```html
<html lang="pt-br" data-ng-app="aula02">

<head>
    <meta charset="UTF-8">
    <title>aula02 - Filtros</title>
	<!-- Compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

</head>

<body>
	<div class="container">

		<form>
			<label for="nome">Nome:
				<input type="text" data-ng-model="nome">
			</label>
			<label for="nome">Sobrenome:
				<input type="text" data-ng-model="sobrenome">
			</label>
			<label for="cpf">CPF:
				<input type="text" data-ng-model="cpf">
			</label>
			<label for="nome">Nascimento:
				<input type="text" data-ng-model="nascimento">
			</label>
			<label for="nome">Valor:
				<input type="text" data-ng-model="valor">
			</label>
			
		</form>

		<table>
			<thead>
				<tr>
					<th>Nome</th>
					<th>SobreNome</th>
					<th>Cpf</th>
					<th>Nascimento</th>
					<th>Valor</th>
				</tr>
			</thead>
				<tr>
					<td>{{ nome | lowercase }}</td>
					<td>{{ sobrenome | uppercase }}</td>
					<td>{{ cpf }}</td>
					<td>{{ nascimento | date:'dd-MM-yyyy' }}</td>
					<td>{{ valor | currency }}</td>
				</tr>
			<tbody>
			
			</tbody>
		</table>
	</div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
 
  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
          
    <script>
        angular.module('aula02', []);
    </script>
</body>

</html>
```

## Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior que 18 anos.


```html
<html lang="pt-br" data-ng-app="aula02">

<head>
    <meta charset="UTF-8">
    <title>aula02 - Filtros</title>
	<!-- Compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

</head>

<body>
	<div class="container">

		<form>
			<label for="nome">idade:
				<input type="number" data-ng-model="idade">
			</label>
		</form>
		a idade {{idade | calculaIdade}}
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
			});
    </script>
</body>

</html>

```

## Crie 1 filtro que receba um horário e entre as 0:00 e 23:59 diga 
Bom dia // até 12:00
Boa tarde  // até 18:00
boa noite 

```html
<html lang="pt-br" data-ng-app="aula02">

<head>
    <meta charset="UTF-8">
    <title>aula02 - Filtros</title>
	<!-- Compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

</head>

<body>
	<div class="container">

		<form>
			<label for="nome">Hora:
				<input type="time" data-ng-model="hora">
			</label>
		</form>
		a hora {{hora | calculaHora}}
	</div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
 
  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
          
    <script>
        angular.module('aula02', [])
			.filter('calculaHora',function() {
				return function(text) {
					if(text){
						var hora = text.getHours();
						if(hora >= 0 && hora <= 12) {return 'Bom dia'}
						if(hora >= 12 && hora <= 18) {return 'Boa tarde'}
						if(hora >= 18 && hora <= 23) {return 'Boa noite'}
					}
				}
			});
    </script>
</body>

</html>
```
