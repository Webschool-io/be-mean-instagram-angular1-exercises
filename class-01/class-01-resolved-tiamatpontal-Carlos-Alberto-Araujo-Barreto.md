# Angular - Exercício 01 - resolvido

autor: Carlos Alberto de Araujo barreto


## Exercício 01 - Explique qual a definição de MVC, MVVM e MVP.

MVC(model-view-controller) - é definido como um modelo de 3 camadas: model, view e controller.
A camada model é responsável por toda definição dos padrões dos dados, a camada controller faz a comunicação entre a camada view e model, tanto na entrada dos dados à partir da camada view que é responsável pela exibição dos dados, como no retorno da camada model com as informações para a camada view.

MVVM(model-view-viewmodel) - modelo que facilita a separação do desenvolvimento da interface gráfica das regras de negócio e back-end. 
A camada viewmodel é um conversor de valor, e é responsável por converter os objetos fornecidos pela camada model em um formato que pode ser gerenciado e apresentado de maneira simples. Esta é mais model que view, pois lida com a maior parte da lógica de exibição das informações.

MVP(model-view-presenter) - é uma derivação do MVC e muito usado na construção de interfaces para o usuário.
A camada presenter assume a funcionalidade de "middle-man" e toda a lógica de apresentação das informações ficam por sua conta.

## Exercício 02 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

<!doctype html>
<html lang="pt-br" data-ng-app="ex01">
<head>
</head>
<body>
	<form>
		<label for="nome">Nome:
			<input type="text" name="nome" data-ng-model="nome"/>
		</label>
		<br/>
		<label for="idade">Idade:
			<input type="text" name="idade" data-ng-model="idade"/>
		</label>
	</form>	

	Olá, <span data-ng-bind="nome"></span>, você possui <span data-ng-bind="idade"></span> anos.

	<script src="angular.min.js"></script>
	<script>
		angular.module("ex01", []);
	</script>
</body>
</html>