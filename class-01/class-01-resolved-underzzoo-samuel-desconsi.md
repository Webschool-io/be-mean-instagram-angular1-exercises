## 1 - Explique qual é a definição de MVC, MVVM e MVP

### MVC: 

#### Model: 
Trabalha tanto com o controller quanto com a view, notificando ambos quando ocorre mudança de estado, sendo assim, nas view as saídas sempre estarão atualizadas e nos controllers os conjuntos de dados também estarão.

#### View: 
Solicita do modelo, através do controlador, a informação que ela necessita para gerar uma representação de saída.

#### Controller: 
Pode enviar comandos para a view para alterar a apresentação. Pode também enviar comandos para o modelo para atualizar seu status.

### MVVM

#### Model: 
Inclui todo o código que implementa a lógica central do aplicativo e define os tipos necessários para modelar o domínio do aplicativo. Essa camada é completamente independente das camadas view e view model.

#### View: 
Define a interface do usuário usando a marcação declarativa. A marcação de vinculação de dados define a conexão entre os componentes específicos da interface do usuário e vários membros de view model (e, às vezes, de model).

#### View Model: 
Fornece destinos de vinculação de dados para a camada view. Em muitos casos, view model expõe a camada model diretamente ou fornece membros que encapsulam membros específicos da camada model. A camada view model também pode definir membros para controlar os dados que sejam relevantes à interface do usuário, mas não à camada model, como a ordem de exibição de uma lista de itens.

### MVP

#### Model: 
Define os dados que serão exibidos, ou alterados pelo usuário.

#### View: 
Exibe os dados, não contem nenhuma regra de negócio.

#### Presenter: 
Atua sobre o model e a view, quando os dados sofrem alterações no model ele recarrega a view e quando a view sofre alterações sincroniza o model.

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

<!doctype html>
<html class="no-js" lang="pt-br" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Be MEAN</title>
    <link rel="stylesheet" href="css/foundation.min.css">
  </head>
  <body data-ng-app="BeMean">
    
		<section>
			<div class="row" style="margin-top: 2em;">
				<div class="columns medium-12">
					<h3>Crie sua postagem</h3>
					<hr/>
				</div>
			</div>
			
			<div class="row">
				<div class="columns medium-4">
					<label>
						Título: <input type="text" data-ng-model="titulo"/>
					</label>
					<label>
						Sub-titulo: <input type="text" data-ng-model="stitulo"/>
					</label>
					<label>
						Autor: <input type="text" data-ng-model="autor"/>
					</label>
					<label>
						Categoria: <input type="text" data-ng-model="categoria"/>
					</label>
					<label>
						Texto: <textarea rows="5" type="text" data-ng-model="texto"></textarea>
					</label>
				</div>
				<div class="columns medium-8 text-center">
					<h2 style="color: darkblue">{{titulo}} <br/><small>{{stitulo}}</small></h2>
					<hr style="max-width: 50%"/>
					<small><strong>Autor:</strong> {{autor}} | <strong>Categoria</strong>: {{categoria}}</small>
					<br/><br/>
					<p class="text-justify">{{texto}}</p>
				</div>
			</div>
		</section>
		
		
    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/foundation.min.js"></script>
    <script src="js/app.js"></script>
	<script src="js/angular.min.js"></script>
	<script>
		angular.module('BeMean', []);
	</script>
  </body>
</html>

