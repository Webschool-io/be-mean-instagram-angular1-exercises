Nome: Igor Oliveira


Github: https://github.com/DevIgor


Data: 10/06/2016



# 1 - Explique qual é a definição de MVC, MVVM e MVP

## MVC:
### Model:
   Responsável pela leitura e escrita de dados e também pela validação dos mesmos
## View:
   Faz a exibição dos dados por meio de um arquivo HTML ou XML
### Controller:
   Recebe todas as requisições do usuário e ele vai controlar quais models e quais views serão mostradas para o usuário

## MVVM:
### Model:
   Encapsula a lógica de negócios e os dados
### View:
   Vai definir a aparência e/ou a estrutura que será exibida para o usuário.
### ViewModel:
   Sua responsabilidade é disponibilizar para View uma lógica de apresentação

## MVP:
### Model:
  Vai definir os dados que serão mostrados e/ou alternados pelo usuário
### View:
  Vai exibir os dados 
### Presenter:
  Vai atuar sobre o viwe e o model

 
# 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados

<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Exercicio Aula1 | AngularJS</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<script src="angular.min.js"></script>
	<script>
		angular.module('aula1', [])
	</script>

	<style>
		h1 {
			text-align: center;
			font-family: arial;
			
		}
		p {
			font-family: arial;
			font-size: 25px;

		}

		span {
			color: #000000;
		}
	</style>
</head>
<body data-ng-app="aula1" style="background-color: #CCC; text-align: center;">
<h1>Form Webschool.io</h1>
<form>
	<label for="nome">Seu nome: <br>
		<input type="text" class="form-control" data-ng-model="nome"><br><br>
	</label>
	<label for="idade">Sua Idade: <br>
		<input type="text" class="form-control" data-ng-model="idade"><br><br>
	</label>
	<label for="email">Seu Email: <br>
		<input type="text" class="form-control" data-ng-model="email"><br><br>
	</label>
	<label for="frase">Complete a frase: <br> Webschool.io é <br>
		<input type="text" class="form-control" data-ng-model="frase"> <br><br>
	</label>

	<!-- Exibindo os resultados -->
	<p>Nome: <span data-ng-bind="nome"></span></p>
	<p>Idade: <span data-ng-bind="idade"></span></p>
	<p>Email: <span data-ng-bind="email"></span></p>
	<p>Frase: Webschool.io é <span data-ng-bind="frase"></span></p>
</form>	
</body>
</html>
