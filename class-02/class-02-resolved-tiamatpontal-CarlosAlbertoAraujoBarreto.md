# Angular - Exercício 02 - resolvido

autor: Carlos Alberto de Araujo barreto


## Exercício 01 - Crie um exemplo para pelo menos 5 filtros padrões do Angular

```
<!doctype html>
<html lang="pt-br" data-ng-app="bemean">
<head>
	<meta charset="utf-8">
	<title>{{titulo}}</title>
</head>
<body>
	<label for="nome">Nome:
		<input type="text" data-ng-model="nome"/>
	</label>	
	<br/>
	Ola {{nome | uppercase}}, os dias úteis são {{[
	{dia: "segunda"},
	{dia: "terça"},
	{dia: "quarta"},
	{dia: "quinta"}
	] | orderBy: "dia"}}.<br/>
	Dia da semana {{07/26/2016 | date:"EEEE"}}.<br/>
	17,599999 arredondado é: {{17.599999 | number:0}}.<br/>
	Nosso pokemon convertido em json: <pre>{{{"nome": "pikachu"} | json}}</pre>
	<script src="angular.min.js"></script>
	<script>
		angular.module("bemean", []);
	</script>
</body>
</html>
```
## Exercício 02 - Crie 1 filtro novo onde você passe um input a sua idade e ele diga se você é maior ou menor que 18 anos.
```
<!doctype html>
<html lang="pt-br" data-ng-app="bemean">
<head>
	<meta charset="utf-8">
	<title>{{titulo}}</title>
</head>
<body>
	<label for="nome">Sua idade:
		<input type="text" data-ng-model="idade"/>
	</label>	
	<br/>
	{{idade | maioridade}}
	<script src="angular.min.js"></script>
	<script>
		angular.module("bemean", [])
			.filter('maioridade', function(){
				return function(text) {
					if(text == undefined || text == "") return "";
					else						
						if(text < 18) 
							return "Menor de 18 anos.";
						else
							return "Maior de 18 anos";
				}
			});
	</script>
</body>
</html>
```
## Exercício 03 - Crie 1 filtro que receba um horário, entre 0:00 e 23:59, e diga:
- Bom dia. // Até as 12:00
- Boa tarde. // até as 18:00
- Boa noite. // 
Dependendo do horário

```
<!doctype html>
<html lang="pt-br" data-ng-app="bemean">
<head>
	<meta charset="utf-8">
	<title>{{titulo}}</title>
</head>
<body>
	<label for="horario">Entre com o horário:
		<input type="text" data-ng-model="horario"/>
	</label>	
	<br/>
	{{horario | saudacao}}
	<script src="angular.min.js"></script>
	<script>
		angular.module("bemean", [])
			.filter('saudacao', function(){
				return function(text) {
					if(text == undefined || text == "" || text.indexOf(":") == -1)
						return "";
					else
						var array = text.split(":");
						if(array[0] == undefined || array[1] == undefined || array[0] == "" || array[1] == "")
							return "";
						else{
							var hora = array[0];
							var minuto = array[1];
							if(hora >= 0 && minuto >= 0 && hora <= 23 && minuto <= 59 )
								if(hora <= 12 || (hora == 12 && minuto == 0))
									return "Bom dia.";
								else{
									if(hora <= 18 || (hora == 18 && minuto == 0))
										return "Boa tarde.";
									else
										return "Boa noite.";
								}
							else
								return "";
						}
				}
			});
	</script>
</body>
</html>
```