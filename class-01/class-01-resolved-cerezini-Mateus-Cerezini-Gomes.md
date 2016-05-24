# Angularjs 1 - Aula 01 - Exercício

User: [Cerezini](https://github.com/cerezini)

Autor: Mateus Cerezini Gomes

Data: 1464056564542

## 1. Explique qual a definição de MVC, MVVM e MVP.

### MVC - Model View Controller

A arquitetura de uma aplicação é divida em três componentes:

- **Model** = Gerencia diretamente os dados, as regras e lógicas da aplicação;
- **View** = É a representação da informação, a apresentação dos dados do model;
- **Controller** = Recebe comandos e os converte em ações sobre a view e o model.

![MVC Componentes](https://upload.wikimedia.org/wikipedia/commons/a/a0/MVC-Process.svg)

As interações entre os componentes se dá:

1. Usuário interagi com o controller;
2. Controller manipula o model;
3. Mudanças no model são refletidas na view;
4. Usuário visualiza as modificações na view.

### MVVM - Model View ViewModel

Uma variação do MVC, separa a View Layoult da View Regras de Negócio, obtendo-se teoricamente maior produtividade. Os designers poderiam focar na experiência com o usuário e suas necessidades, e deixar que as regras de negócios e outras lógicas envolvidas fossem tratadas nas outras camadas, pelos desenvolvedores da aplicação.

- **Model** = Dados;
- **View** = Interface com o usuário;
- **ViewModel** = Uma abstração da view expondo propriedades públicas e comandos. Ele possui um *binder* responsável por mediar a comunicação da view com o model.

![MVVM Componentes](https://upload.wikimedia.org/wikipedia/commons/8/87/MVVMPattern.png)

### MVP - Model View Presenter

Uma variação do MVC muito usado para criar interfaces com o usuário.

- **Model**: Dados a serem apresentados ou modificados na interface com o usuário;
- **View**: Um interface passiva que apresenta os dados do *model* e roteia os comandos do usuário para o *presenter*;
- **Presenter**: Age entre o *model* e a *view*, retornando dados do *model* formatando-os para a *view*.  

![MVP Componentes](https://upload.wikimedia.org/wikipedia/commons/d/dc/Model_View_Presenter_GUI_Design_Pattern.png)

## 2. Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```html
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be Mean</title>
  </head>
  <body>

    <h1>Contato com o Usuário</h1>
    <form>
      <label for="name">Nome: <input type="text" data-ng-model="name"></label>
      <label for="telephone">Telefone: <input type="text" data-ng-model="telephone"></label>
      <label for="email">Email: <input type="text" data-ng-model="email"></label>
      <label for="address">Endereço: <input type="text" data-ng-model="address"></label>
    </form>

    <h3 style="color:red">{{name}}</h3>
    <p><b>Telefone:</b> {{telephone}}. <b>Email:</b> {{email}}. <b>Endereço:</b> {{address}}.</p>

    <script type="text/javascript" src="../../angular.min.js"></script>
    <script type="text/javascript">
      angular
        .module('BeMEAN', []);
    </script>
  </body>
</html>
```
