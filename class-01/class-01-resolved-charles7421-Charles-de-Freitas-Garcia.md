## 1 - Explique qual é a definição de MVC, MVVM e MVP

 ### MVC

O padrão MVC é o que chamamos de Model-View-Controler, e está dividido da seguinte maneira:

**Model**: Trabalha tanto com o controller quanto com a view, notificando ambos quando ocorre mudança de estado, sendo assim, nas view as saídas sempre estarão atualizadas e nos controllers os conjuntos de dados também estarão.

**View**: Solicita da model, através da Controller, a informação que ela necessita para gerar uma representação de saída.

**Controller**: Pode enviar comandos para a view para alterar a apresentação. Pode também enviar comandos para o modelo para atualizar seu status.

MVC foi descrito pela primeira vez por Trygve Reenskaug em 1979 para interagir com uma maquina da XEROX que tinha um mouse, o controller era o responsável por interagir com os dispositivos externos, fazendo assim a view e o model ficarem sincronizados.

### MVP

Model - View - Presenter, é baseado no MVC e dividido em:

**Model**: Define os dados que serão exibidos, ou alterados pelo usuário.

**View** : Exibe os dados, não contem nenhuma regra de negócio.

**Presenter**: Atua sobre o model e a view, quando os dados sofrem alterações no model, ele recarrega a view e quando a view sofre alterações sincroniza o model.

### MVVM

O padrão MVVM é denominado de Model-View-View-Model, foi desenvolvido em 2005 por John Gossman, um dos arquitetos da Microsoft, divide-se assim:

**Model**: Inclui todo o código que implementa a lógica central do aplicativo e define os tipos necessários para modelar o domínio do aplicativo. Essa camada é completamente independente das camadas view e view model.

**View**: A marcação de vinculação de dados define a conexão entre os componentes específicos da interface do usuário e vários membros de view model (e, às vezes, de model).

**View Model**: Fornece destinos de vinculação de dados para a camada view. Em muitos casos, view model expõe a camada model diretamente ou fornece membros que encapsulam membros específicos da camada model. A camada view model também pode definir membros para controlar os dados que sejam relevantes à interface do usuário, mas não à camada model, como a ordem de exibição de uma lista de itens.


## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

* HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Exercício 01 - Angular - BeMEAN</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link rel=stylesheet href="style.css">

	<body data-ng-app="ex01">
		<div class="container">
			<div class="row">
				<div class="col-md-12">				
					<fieldset>
						<legend>Gerador anti-cagada</legend>
						<div class="col-md-6">
							<div class="form-group">
								<label for="txtNome">Nome</label>
								<input type="text" name="txtNome" class="form-control" data-ng-model="nome">
							</div>
							<div class="form-group">
								<label for="txtGithubUser">Github User</label>
								<input type="text" name="txtGithubUser" class="form-control" data-ng-model="githubUser">
							</div>					
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="txtModulo">Seu módulo atual</label>
								<select name="txtModulo" class="form-control" data-ng-model="modulo">
									<option value="MongoDB">MongoDB</option>
									<option value="NodeJS">NodeJS</option>
									<option value="Angular" selected>Angular</option>
								</select>
							</div>
							<div class="form-group">
								<label for="txtExercicio">Exercício atual</label>
								<input type="text" name="txtExercicio" placeholder="Números" class="form-control" data-ng-model="exercicioAtual">
							</div>					
						</div>
					</fieldset>	
				</div>
			</div>
			<div class="col-md-12">
				<hr>				
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12">
							<h2>Nome arquivo .md</h2>
							<hr>
							<p class="fonte text-left">
								Favor sempre usar este: class-{{ exercicioAtual | zeroEsquerda }}-resolved-{{ githubUser | lowercase }}-{{ nome | espacos | lowercase }}
								<br>
								E no início da resposta do Markdown use:
								<br>
								Nome: ({{ nome }})
								Github: (https://github.com/{{ githubUser | lowercase }})
								Data: (Data Atual (Timestamp))
								<br>
								<h3>NENHUM ARQUIVO FORA DESSE PADRÃO SERÁ ACEITO!!!</h3>
							</p>							
						</div>
					</div>
					<div class="padding">
						
					</div>
					<div class="row">
						<div class="col-md-12">
							<h2>O Envio</h2>
							<hr>
							<p class="fonte text-left">
								Caso você faça um pull antes de fazer o seu Pull Request por favor COMITE APENAS SEU ARQUIVO, 
								<br>
								<h4>NÃO FAÇA git add .!!</h4>
								<br>
								Faça:
								<br><br>
								Crie o arquivo na pasta class-{{ exercicioAtual | zeroEsquerda }}.
								<br>
								Faça o exercício. Depois...
								<br>
								git add . ou git nome_do_arquivo
								<br>
								git commit -m {{ nome }} - {{modulo}} - Exercício {{ exercicioAtual }} resolvido
								<br>
								git push origin master
								<hr>
							</p>								
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
	<script src="angular.min.js"></script>
	<script src="app.js"></script>
	</html>
```

```css

/* style.css - Exercício 01 - Angular - BeMEAN */

body { color: #000; margin-top: 50px;}
.fonte { font-size: 1.3em; }
.padding { padding: 20px 0; }

```

```js
/* app.js    - Exercício 01 - Angular - BeMEAN */

angular.module('ex01', [])
.filter("espacos", function () {
	return function (text) {
		if (text) return text.replace(" ", "-");
	}})
.filter("zeroEsquerda", function () {
	return function (text) {
		if (text) { return (0 + text).slice(-2)}
	}
});

```


