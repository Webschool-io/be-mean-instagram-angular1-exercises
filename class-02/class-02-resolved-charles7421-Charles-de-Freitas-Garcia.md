# AngularJS - Aula 02 - Exercício  
**user:** [charles7421] (https://github.com/charles7421)  
**autor:** Charles de Freitas Garcia


## Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Exercício 02 - Angular - BeMEAN</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	<body data-ng-app="ex02">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
				<fieldset>
					<legend>Exercício 02 - Filtros</legend>
					<div class="col-md-8 col-md-offset-2">
						<label for="limit">LimitTO</label>
						<input id="limit" type="text" class="form-control" data-ng-model="stringToLimit">	
					</div>					
					<div class="col-md-6">
						<label for="money">Converter em moeda</label>
						<input id="money" type="text" class="form-control" data-ng-model="stringToMoney">	
					</div>
					<div class="col-md-6">
						<label for="json">Converter em JSON</label>
						<input id="json" type="text" class="form-control" data-ng-model="stringToJSON">	
					</div>
					<div class="col-md-6">
						<label for="uppercase">Converter em Maiúsculo</label>
						<input id="uppercase" type="text" class="form-control" data-ng-model="stringToUpper">	
					</div>
					<div class="col-md-6">
						<label for="lowercase">Converter em Minúsculo</label>
						<input id="lowercase" type="text" class="form-control" data-ng-model="stringToLower">	
					</div>
				</fieldset>
					
				</div>
			</div>
			<div class="col-md-12">
				<hr>				
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					<div class="col-md-6">
						<label>Number convertido em moeda</label>
						{{ stringToMoney | currency:"R$ "}}
					</div>
					<div class="col-md-6">
						<label>String convertido em JSON</label>
						{{ stringToJSON | json }}
					</div>
					<div class="col-md-6">
						<label>String convertido em Maiúsculo</label>
						{{ stringToUpper | uppercase}}
					</div>
					<div class="col-md-6">
						<label>String convertido em Minúsculo</label>
						{{ stringToLower | lowercase}}
					</div>
					<div class="col-md-8 col-md-offset-2">
						<label class="">Limitado</label>
						{{ stringToLimit | limitTo:5}}
					</div>
				</div>
				<hr>
			</div>
		</div>
	</body>
	<script src="angular.min.js"></script>
	<script>
		angular.module('ex02', []);
	</script>
	<style>
		body { color: #000; margin-top: 50px;}
		label { display: block }
		.fonte { font-size: 1.3em; }
		.padding { padding: 20px 0; }
	</style>
	</html>
```


## Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior que 18 anos.

```html

...
<div class="col-md-8 col-md-offset-2">
	<label for="idade">Idade</label>
	<input id="idade" type="text" class="form-control" data-ng-model="stringToIdade">	
</div>

<div class="col-md-8 col-md-offset-2">
	<label class="">Maior ou Menor</label>
	{{ stringToLimit | verificarIdade}}
</div>

<script>
	angular.module('ex02', [])
	       .filter("verificarIdade", function () {
	       		return function (text) {
	       			if (text) {
	       				if (text >= 18) {
	       					return "Maior";
	       				} else {
	       					return "Menor";
	       				}
	       			}
	       		}
	       });
</script>



```



## Crie 1 filtro que receba um horário e entre as 0:00 e 23:59 diga:

* Bom Dia    // até 12:00
* Boa Tarde  // até 18:00
* Boa Noite  


```html
...
<div class="col-md-8 col-md-offset-2">
	<label for="hora">Digite a hora</label>
	<input id="hora" type="time" class="form-control" data-ng-model="stringToHora">	
</div>

<div class="col-md-12 text-center">
	<div class="col-md-8 col-md-offset-2">
		<label class="">Resultado:</label>
		{{ stringToHora | verificarPeriodo}}
	</div>
</div>

<script>
	angular.module('ex02', [])
	       .filter("verificarPeriodo", function () {
	       		return function (text) {
	       			if (text) {
	       				var hora = text.split(":")[0];
	       				switch (true) {
	       					case (hora >= 0 && hora < 12):
		       					return "Bom dia!";
		       					break;
	       					case (hora >= 12 && hora < 18) :
		       					return "Boa Tarde!";
		       					break;
	       					case (hora >= 18 && hora <= 23) :
	       						return "Boa noite!";
	       						break;
	       					default:
	       						return "É Hora de dar tchau! É hora de dar tchau ...";
	       						break;
	       				}
	       			}
	       		}
	       });
</script>

```
