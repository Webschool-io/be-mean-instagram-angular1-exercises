Nome: Pablo Zaniolo

Github: (https://github.com/pablozaniolo)

Data: 1465598640

## 1 - Explique qual é a definição de MVC, MVVM e MVP

**MVC:** Model View Controller - Model é a camada de dados, Controller manipula os dados
e a View apresenta os dados.

**MVVM:** Model View ViewModel - View Model disponibiliza para a view uma lógica de
apresentação. As camadas Model e View se comunicam através da camada
ViewModel. ViewModel recebe notificação de eventos e realiza alguma ação.

**MVP:** Model View Presenter - Presenter faz a comunicação entre Model e View

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Be Mean</title>
</head>
<body data-ng-app="bemean">
	<form>
		<input type="text" data-ng-model="name" placeholder="Nome">
		<br />
		<input type="number" data-ng-model="age" placeholder="Idade">
		<br />
		<textarea cols="30" rows="10" data-ng-model="dream" placeholder="Seu sonho"></textarea>
	</form>
	
	<p><b>Magia acontecendo:</b></p>
	<p><b>Nome:</b> {{ name }}</p>
	<p><b>Idade:</b> {{ age }}</p>
	<p><b>Seu sonho:</b> {{ dream }}</p>

	<script src="./angular.min.js"></script>
	<script>
		angular.module('bemean', []);
	</script>
</body>
</html>
```