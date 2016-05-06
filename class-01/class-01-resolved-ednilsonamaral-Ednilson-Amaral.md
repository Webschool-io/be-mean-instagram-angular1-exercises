# AngularJS 1.5.x - Aula 01 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral


## Explique qual a definição de MVC, MVVM e MVP.  

### MVC - Model View Controller  

**MVC** é um padrão de arquitetura de software, onde a sua aplicação é separada em 3 camadas diferentes.  

Onde os **controlers** manipula os dados que estão no **model**. A **view** é a camada de iteração com o usuário, onde são mostrados os dados tratados, entrada de dados pelo usuário, etc.


#### Exemplo

**1. View:** Ei, controller! O usuário quer logar no sistema. Ele já forneceu os dados de login, tá com você! :bowtie:  
**2. Controller:** Ok, vou verificar com o model e já te aviso. Aguarde 1 instante, *please*. Modelzinho, meu pitchulo, dá um confere nesses dados aí de favorzinho! :smiley:  
**3. Model:**  Firmeza, manow! Libera o jhow aí! :thumbsup:  
**4. Controller:**  Ei, view! Tudo certo, o jhow está autorizado a logar no sistema! :wink:  
**5. View:** Aí sim, hein! Demorou, mostrando ao jhow que ele está logado no sistema! :kissing_smiling_eyes:


### MVVM - Model View ViewModel  

MVVM é um padrão de projeto de software criado por John Goshmann, visando estabelecer uma clara separação de responsabilidades e tornar uma aplicação mais fácil de prestar-se manutenção.  

O model não conhece a view e vice-versa. A view conhece apenas a ViewModel, e ambas se comunicam através de databinding.

Através do databinding, a view interage com a ViewModel, modificando assim os eventos e comandos. Por sua vez, a ViewModel responde a estas notificações realizando alguma ação no model.

Essas ações da ViewModel no Model podem ser um CRUD, por exemplo.


## MVP - Model View Presenter  

O MVP tem como principal finalidade separar a camada de view das camadas de model e regras de negócio.  

Na verdade, MVP é uma derivação de MVC.  

Em MVP, o presenter tem a responsabilidade de ser como uma mediadora.


## Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, **formatados**.


`arquivo.html`  

```html  
<!DOCTYPE html>

<html lang="pt-br" data-ng-app="Estoque">

<head>
    <meta charset="UTF-8">
    <title>Entrada de Estoque</title>

    <style>
        body{
            background-color: rgba(249, 269, 168, .5);
            font-size: 20px;
            color: #696969;
        }

        .title{
            color: blue;
            font-weight: bold;
        }

        .produto{
            text-decoration: underline;
            color: red;
        }
    </style>
</head>

<body>
    <form>
        <label for="nome">Nome do Produto:
            <input type="text" data-ng-model="nome">
        </label>

        <label for="qtd">Quantidade:
            <input type="number" data-ng-model="qtd">
        </label>
    </form>

    <div class="grupo-estoque">
        <ul>
            <li>
                <span class="title">Nome do Produto: </span>
                <span class="produto">{{ nome }}</span>
            </li>

            <li>
                <span class="title">Quantidade: </span>
                <span class="produto">{{ qtd }}</span>
            </li>
        </ul>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <script>
        var app = angular.module('Estoque', []);
    </script>
</body>

</html>
```

Print da Tela:

![Print da Tela](https://raw.githubusercontent.com/ednilsonamaral/be-mean-instagram-angular1/master/class-01/exercicio01.png)
