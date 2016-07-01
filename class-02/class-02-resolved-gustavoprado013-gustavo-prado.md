# AngularJS - Aula 02 - Exercício
**user:** [gustavoprado013](https://github.com/gustavoprado013)  
**autor:** Gustavo Prado

## 1 - Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

```html
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <title>Exercício 02 - AngularJS</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

  <style>
    .jumbotron{
      width: 800px;
      text-align: center;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
    }
    .input{
      width: 400px;
      margin: auto;
    }
  </style>


  <script>
      angular.module('BeMean', []);

  </script>

</head>

<body data-ng-app="BeMean">

	<div class="jumbotron">
		<form class="input">
      <div class="form-group">

  				<input type="text" class="form-control" data-ng-model="nome" placeholder="Nome">

  				<input type="text" class="form-control" data-ng-model="sobrenome" placeholder="Sobrenome">

  				<input type="text" class="form-control" data-ng-model="cpf" placeholder="CPF">

  				<input type="text" class="form-control" data-ng-model="nascimento" placeholder="Nascimento">

  				<input type="text" class="form-control" data-ng-model="valor" placeholder="Valor">

      </div>
		</form>
  </br>
		<table class="table">
			<thead>
				<tr>
					<th>Nome</th>
					<th>Sobrenome</th>
					<th>CPF</th>
					<th>Nascimento</th>
					<th>Salário</th>
				</tr>
			</thead>
				<tr>
					<td>{{ nome | uppercase }}</td>
					<td>{{ sobrenome | lowercase }}</td>
					<td>{{ cpf | limitTo:11 }}</td>
					<td>{{ nascimento | date:'dd-MM-yyyy' }}</td>
					<td>{{ valor | currency }}</td>
				</tr>
			<tbody>

			</tbody>
		</table>
	</div>

</body>
</html>
```

## Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior que 18 anos.


```html
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Exercício 02 - AngularJS</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <style media="screen">
      .estilo{
        margin-top: 200px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }
    </style>

    <script>
        angular.module('BeMean', [])
			.filter('calculaIdade',function() {
				return function(text) {
					if(text < 18) { return 'menor de idade'}
					if(text >= 18) { return 'maior de idade'}
				}
			});
    </script>

</head>

<body data-ng-app="BeMean">
	<div class="container">

		<form class="estilo">
				<input type="number" data-ng-model="idade" placeholder="Idade">
      </br></br>
        Você é {{idade | calculaIdade}}
		</form>

	</div>

</body>

</html>
```

## Crie 1 filtro que receba um horário e entre as 0:00 e 23:59 e diga
##Bom dia // até 12:00
##Boa tarde  // até 18:00
##Boa noite  

```html
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Exercício 03 - AngularJS</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <style media="screen">
      .estilo{
        margin-top: 200px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }
    </style>

    <script>
        angular.module('BeMean', [])
			.filter('calculaHora',function() {
				return function(text) {
					if(text){
						var hora = text.getHours();
						if(hora >= 0 && hora <= 12) {return 'Bom dia!'}
						if(hora >= 12 && hora <= 18) {return 'Boa tarde!'}
						if(hora >= 18 && hora <= 23) {return 'Boa noite!'}
					}
				}
			});
    </script>
</head>

<body data-ng-app="BeMean">
	<div class="container">

		<form class="estilo">

				<input type="time" data-ng-model="hora" placeholder="Digite a hora - ex.:12:00">

    </br>
      {{hora | calculaHora}}
		</form>

	</div>
</body>
</html>
```
