# AngularJS 1.5.x - Aula 01 - Exercício  
**user:** [hc3](https://github.com/hc3)  
**autor:** Eliel das Virgens

## Explique qual a definição de MVC, MVVM e MVP.  
MVC = padrão amplamente conhecido como uma junção de varios design patterns OO , o significado de sua sigla é Model , View , Controller
e ele defende a separaçao das responsabilidades onde model e view se comunicam através de um controller um padrão usado em varias linguagens... 

MVP = é uma evolução do o MVC que se comunica de forma bidirecional com as outras camadas, evitando que o model tenha que passar pelo controller
para atualizar a view.

MVVM = padrão criado por John Gossman, e promove a total separação, o model não conhece a view e vice e versa sendo que a conversa entre os dois 
é intermediada pelo view model é nesse momento que entra em cena o two way databinding.

## fiz uma pesquisa e o que consegui entender de cada um foi ##

MVC = é uma padrão mais conhecido existem muitos artigos sobre ele, ele é um padrão de arquitetura que faz uso de muitos design patterns muito usando 
em linguagens como java , php , delphi, é um marco na arquitetura de software pois ele promove muita organização ao projeto.

MVP = é uma evolução do MVC usando um tipo de listener ou observer como presenter para poder notificar a view de mudanças no model

MVVM = é uma evolução que pode-se dizer uma versão final do MVP , nele é usando um view model que no caso particular do Angular acaba por torna-se des-
necessário o uso do $scope ou this , deixando o código mais elegante e influênciando até no comportamento do código dos diferentes cenários.



## Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```html
<html lang="pt-br" data-ng-app="aula01">

<head>
    <meta charset="UTF-8">
    <title>aula01</title>
	<!-- Compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

</head>

<body>
	<div class="container">
		<form>
			<label for="nome">Nome:
				<input type="text" data-ng-model="nome">
			</label>
		</form>

		<table>
			<thead>
				<tr>
					<th>Nome</th>
				</tr>
			</thead>
				<tr>
					<td>{{ nome }}</td>
				</tr>
			<tbody>
			
			</tbody>
		</table>
	</div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
 
  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
          
    <script>
        angular.module('aula01', []);
    </script>
</body>

</html>
```