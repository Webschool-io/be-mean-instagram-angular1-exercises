# 1 - Explique qual é a definição de MVC, MVVM e MVP

## MVC:
* Model: Responsável pela leitura e escrita dos dados. Podemos realizarManipulação dos dados e validações;
* View: Exibição dos dados por meio de HTML ou XML;
* Controller: Defini os controladores da página que será mostrado pelo usuário.

## MVP:
* Model: Responsável pela leitura e escrita dos dados. Podemos realizarManipulação dos dados e validações;
* View: Exibição dos dados por meio de HTML ou XML;
* Presenter: Ela atua na View e no Model.

## MVVM:
* Model: Responsável pela leitura e escrita dos dados. Podemos realizarManipulação dos dados e validações;
* View: Exibição dos dados por meio de HTML ou XML;
* ViewModel: Sua responsabilidade é disponibilizar para View uma lógica de apresentação

# 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados

```
<html data-ng-app="BeMEAN">
<head>
	<meta charset="UTF-8">
	<title>Exercício</title>
</head>
<body>
	<label for="nome">Digite um nome:
		<input type="text" data-ng-model="nome">
	</label>

	<br>

	Seja bem vindo {{ nome }}

	<script src="angular.min.js"></script>
	<script>
		angular.module('BeMEAN', [])
	</script>
</body>
</html>
```