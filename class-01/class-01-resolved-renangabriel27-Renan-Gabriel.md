# AngularJS - Aula 01 - Exercícios

Nome: Renan Gabriel Almeida Silva

Github: [renangabriel27](https://github.com/renangabriel27)

Data: 08/07/2016 - 20:58 

## 1. Explique qual a definição de MVC, MVVM e MVP.

### Model View (C VM P)

São padrões de arquitetura de software, que buscam separar as responsabilidades em camadas.

- **Model** = Encarregado de resolver os problemas do domínio estudado, e pela persistência de dados.
- **View** = Responsável pela parte de exibição de informações para o usuário.

### Model View Controller (MVC)

- **Controller** = Utilizado para coordenar o fluxo de informações, não possui conhecimento sobre as regras de negócio.

![MVC](https://media-mediatemple.netdna-ssl.com/wp-content/uploads/2015/10/01-mvc-500-opt.png)

### Model View ViewModel (MVVM)

É semelhante ao MVC em alguns aspectos, porém tem algumas diferenças nele a camada Model não conhece a View e vice-versa.
A View conhece a ViewModel e se comunica com ela através do mecanismo de binding.

- **ViewModel** = Disponibiliza uma lógica de apresentação para a View, ela não tem nenhum conhecimento sobre a View,
apenas implementa propriedades e comandos, para que a View possa preencher seus controles e notifica a mesma, caso haja alteração de estado.

![MVVM](http://i.stack.imgur.com/Swv8V.png)

### Model View Presenter (MVP)

- **Presenter**: É a ligação entre View e Model, possui papel de mediador entre eles. Ele é responsável de atualizar a
View quando o Model é alterado e de sincronizar o Model em relação a View.

![MVP](https://cdn-images-1.medium.com/max/800/1*iMuc9jbaouP8N751hg6-Qw.png)

## 2. Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet">
  </head>
  <body data-ng-app="form">
    <section class="ui container">
      <form class="ui form">
        <header class="ui dividing header">
          <h1> Formulário </h1>
        </header>

        <div class="field">
          <label>Nome</label>
          <input type="text" name="first-name" placeholder="First Name" data-ng-model="nome">
          <p> {{ nome }} </p>
        </div>
        <div class="field">
          <label>Email</label>
          <input type="text" name="last-name" placeholder="Last Name" data-ng-model="email">
          <p> {{ email }} </p>
        </div>
        <div class="field">
          <label>Telefone</label>
          <input type="text" name="telefone" placeholder="telefone" data-ng-model="telefone">
          <p> {{ telefone }} </p>
        </div>
        <div class="field">
          <label>CEP</label>
          <input type="text" name="cep" placeholder="cep" data-ng-model="cep">
          <p> {{ cep }} </p>
        </div>
        <div class="field">
          <label>Mensagem</label>
          <textarea data-ng-model="mensagem"> </textarea>
          <p> {{ mensagem}} </p>
        </div>

        <button class="ui button" type="submit">Enviar</button>
      </form>
    </section>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    <script>
      angular.module('form', [])
    </script>
  </body>
</html>
```
