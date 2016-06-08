## Nome: Ronaldo Lima

## Github: ronal2do

## Data: 1463970721

## 1 - Explique qual é a definição de MVC, MVVM e MVP

### MVC: 
    Model View Controller - Esse padrão divide seu sistema em 3 responsábilidades, **Model** - Define suas regras de negócio, **View** - A parte visual, renderizacão do html, **Controller** - Faz a comunicação entre elas manipulando os dados.

### MVVM: 
    Model View ViewModel - **ViewModel** éa peça fundamental no MVVM, por que é ela quem vai coordenar as iterações da View com o Model, separando ambos para que não haja contato direto. Nele ocorre o 2-Way data Binding do NG.

### MVP: 
    Model View Presenter - **Presenter** - É a ligação entre View e Modelcomo dos exemplos acima. Ele notifica e atualiza a view das alteracões feitas.

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

`Framework css bulma.io`

```html 

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="http://bulma.io/css/main.css">
  <title>Form</title>
</head>
<body data-ng-app="AnyApp">
  <div class="container">
   <label class="label">Name</label>
<p class="control">
  <input class="input" type="text" data-ng-model="name" placeholder="Text input">
</p>
<label class="label">Username</label>
<p class="control has-icon has-icon-right">
  <input class="input" type="text" data-ng-model="username" placeholder="Text input">
  <i class="fa fa-check"></i>
 
</p>
<label class="label">Email</label>
<p class="control has-icon has-icon-right">
  <input class="input" type="email" data-ng-model="email" placeholder="Email input">
  <i class="fa fa-warning"></i>
 
</p>
<label class="label">Subject</label>
<p class="control">
  <span class="select">
    <select data-ng-model="subject" value="selecione">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
    </select>
  </span>
</p>
<label class="label">Message</label>
<p class="control">
  <textarea class="textarea" data-ng-model="message" placeholder="Textarea"></textarea>
</p>
<p class="control">
  <label class="checkbox" >
    <input type="checkbox" data-ng-model="terms">
    Accept terms
  </label>
</p>
<p class="control">
  <button class="button is-primary">Submit</button>
  <button class="button is-link">Cancel</button>
</p>


  <hr>
    {{name}} <br>
    {{username}} <br> 
    {{email}} <br>
    {{subject}} <br>
    {{message}} <br>
    {{terms}}
  </div>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  
  <script>
    angular.module("AnyApp", []);
  </script>
</body>
</html>
```