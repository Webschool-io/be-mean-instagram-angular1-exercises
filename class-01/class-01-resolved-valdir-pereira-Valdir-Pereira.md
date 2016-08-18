# AngularJS 1 - Aula01 - Exercício
Nome: Valdir Pereira
[Github profile ](https://github.com/valdir-pereira)

Data: 09/08/2016

## 1 - Explique qual é a definição de MVC, MVVM e MVP

### MVC: Model/View/Controller

#### Model
Camada de dados, responsável pela leitura/escrita e suas validações

#### View
Aprenta os dados para o usuário.

#### Controller
Manipula os dados que vem das requisições do usuário.


### MVP: Model/View/Presenter

#### Model
É a interface que define os dados a serem exibidos.

#### View
Responsável pela aprentação dos dados do Model e os comandos dos usuários (events) 

#### Presenter
Trabalha sobre o Model e a View. Ele recebe os dados do Model e trabalha para que eles sejam exibidos na view.


### MVVM: Model-View / ViewModel
#### Model
É onde fica a camada de negocios.

#### View
A view não tem nenhum conhecimento do model, a view é ativa e contem comportamentos, eventos e data binding.

#### ViewModel
É responsável por apresentar uma separação e exposição dos métodos e comandos para gerenciar o estado da view e manipular o model.


## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```
<!DOCTYPE html>
<html lang="en" data-ng-app="exercise01">
<head>
	<meta charset="UTF-8">
	<title> Exercise 01 </title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>

	<div class="container">
		<div class="row">
			<form>
				<div class="form-group">
					<label for="nome">Nome</label>
					<input type="text" class="form-control" data-ng-model="nome">
				</div>
				<div class="from-group">
					<label for="pokemon">Seu melhor Pokemon</label>
					<input type="text" class="form-control" data-ng-model="pokemon">
				</div>
			</form>

			<h2 class="text-info">{{nome}} </h2>
			<h2 class="text-info">{{pokemon}} </h2>

		</div>
	</div>

	<script src="angular.min.js"></script>
	<script>
		angular.module('exercise01', []);
	</script>
</body>
</html>

```
