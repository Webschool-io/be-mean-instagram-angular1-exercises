# AngularJS - Aula 01 - Exercício 1 e 2
**autor:** Rafael Costa
**user:** [costaceta](https://github.com/costaceta)
**data:** 1483315200
Data: 02/01/2017

## Exercício 1 - Explique qual é a definição de MVC, MVVM e MVP.

### MVC = Model View Controller.

É um padrão de arquitetura de software, no qual sua aplicação é separada em 3 camadas.

####View:

Camada de interação do usuário.

####Model:

Camada de manipulação de dados.

####Controller:

Camanda de controle.

#### MVVM = Model View View Model


É um padrão que foi criado em 2005 por John Gossman, um dos arquitetos do WPF e Silverlight na Microsoft. O MVVM assemelha-se em alguns aspectos o MVC (Model View Controller) e ao MVP (Model View Presenter).

####View:

Tem a responsabilidade de definir a aparência ou a estrutura que o usuário vê na tela.

###ViewModel:

Tem como responsabilidade disponibilizar para a View uma lógica de apresentação sem ter nenhum conhecimento específico sobre a view, ou sobre como ela é implementada.

####Model:

Responsável por encapsular a lógica de negócios e os dados.

### MVP = Model View Presenter

O MPV é divido em três partes bem distintas e com responsabilidades específicas, são elas o Model, View e Presenter.

####View:

Responsável por exibir os dados, não contém regra do negócio a não ser disparar eventos que notificam mudança de estado
dos dados que ele exibe.

####Model:

Um objeto Model implementa uma interface que expõe os campos que o presenter irá atualizar quando sofrerem alteração na view

####Presenter:

Faz a ligação do View com o Model.

## Exercício 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.


### Html


```html

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Class 01 - Exercício 02</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-ng-app="class01">

<div class="box">
  <h2 class="box__title">Mensagem ouvidoria</h2>
  <label for="nome">
    <input class="box__input" type="text" placeholder="Nome" data-ng-model="nome">
  </label>
  <label for="email">
    <input class="box__input" type="email" placeholder="E-mail" data-ng-model="email">
  </label>
  <label for="assunto">
    <input class="box__input" type="text" placeholder="assunto" data-ng-model="assunto">
  </label>
  <label for="msn">
    <textarea class="box__input" type="text" placeholder="Mensagem" data-ng-model="msn">
    </textarea>
  </label>
</div>

<div class="box">
  <h2 class="box__title">
    Dados fornecidos:
  </h2>
  <p><strong>Nome:</strong> {{ nome }}</p>
  <p><strong>E-mail:</strong> {{ email }}</p>
  <p><strong>Assunto:</strong> {{ assunto }}</p>
  <p><strong>Mensagem:</strong> {{ msn }}</p>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
<script>
    angular.module('class01', []);
</script>
</body>
</html>

```

```css

/*Reset*/

*{
  margin: 0;
  padding: 0;
}

/*Font*/

@import url('https://fonts.googleapis.com/css?family=Reem+Kufi');

/*Geral*/

body{
  background: #fafafa;
  font-family: 'Reem Kufi', sans-serif;
}
p{
  text-align: left;
  margin-bottom: 5px;
}

/*Box*/

.box{
  border: 1px solid #ececec;
  border-radius: 5px;
  box-sizing: border-box;
  background: #fff;
  margin: 2em auto;
  max-width: 400px;
  padding: 1.5em;
  width: 100%;
}
.box__title{
  color: #666;
  margin-bottom: 15px;
  text-align: center;
}
.box__input{
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  display: block;
  margin-bottom: 20px;
  padding: 1em;
  width: 100%;
}

```
