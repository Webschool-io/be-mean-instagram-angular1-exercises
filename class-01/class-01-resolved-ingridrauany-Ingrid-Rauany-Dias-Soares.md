# AngularJS - Aula 01 - Exercício

Nome: Ingrid Rauany  
Github: [ingridrauany](https://github.com/ingridrauany)  
Data: 1463488522

## 1- Explique qual a definição de MVC, MVVM e MVP.

Model View Controller (MVC): separa a informação da interface que o usuário interage.
 
* Model: gerencia dados do domínio da aplicação.  
* View: solicita do model, através do controller a informação para gerar saída para o usuário.  
* Controller: envia comandos para view para alteração da apresentação. Envia comandos para o model para atualização do seu estado.

Model View Presenter (MVP): Evolução do MVC que se comunica bidirecionalmente com as outras camadas.

* Model: dados que serão alterados ou exibidos pelo usuário.  
* View: interação com o usuário.  
* Presenter: sabe o que ocorre nas outras duas camadas, quando há alteração de dados no model, ele regarrega a view. Quando a view é alterada, ele sicrozina o model.

Model View ViewModel (MVVM): Possui uma clara seperação entre as camadas. A view conhece a viewmodel e se comunica com ela através de binding.

* Model: possui o conceito de negócio.  
* View: Conjunto de controles responsáveis pela apresentação do modelo de dados ao usuário.  
* ViewModel: contém as informações que a view precisa que são atualizadas via "DataBinding".

## 2- Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```html
<!doctype html>
<html data-ng-app="BeMEAN"> 
    <head>
        <meta charset="utf-8">
        <title>Exercício 1</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
        <style>
            body {
                font-family: Helvetica, sans-serif;
            }
            div {
                box-sizing: border-box;
                width: 50%;
            }
            
            .inputs {
                float: left;
            }
            .dados {
                float: right;
            }
        </style>
    </head>
    <body>
        <div class="inputs">
            <h1>Informe seu nome:</h1> 
            <label for="nome">Nome:
                <input type="text" data-ng-model="nome">
            </label> </br>
            <h1>Informe seu endereço:</h1>
            <label for="nome">Rua:
                <input type="text" data-ng-model="rua">
            </label> </br>
            <label for="nome">Número:
                <input type="text" data-ng-model="numero">
            </label></br>
            <label for="nome">Bairro:
                <input type="text" data-ng-model="bairro">
            </label></br>
            <label for="nome">Cidade:
                <input type="text" data-ng-model="cidade">
            </label></br>
        </div>
        <div class="dados">
            <h2>O endereço de {{ nome }}, é: </h2> </br>
            Rua: {{rua}} - Número: {{ numero }} </br>
            Bairro: {{ bairro }} </br>
            Cidade: {{ cidade }} </br>
       </div>
        <script src="angular.min.js"></script>
        <script>
            angular.module('BeMEAN', [])
        </script>
    </body>
</html>
```
