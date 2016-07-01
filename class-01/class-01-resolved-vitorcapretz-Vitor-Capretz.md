# Angular - Aula 01 - Exercício
**user:** [vitorcapretz](https://github.com/vitorcapretz)

**autor:** Vitor Capretz

**date:** 1466043779645

## 1. Explique qual a definição de MVC, MVVM e MVP.
#### MVC 

O MVC é uma estrutura de organização com 3 camadas principais, atualmente há muitos outros derivados dessa estrutura mas o conceito continua o mesmo:
* Model - Parte responsável pelo Banco de dados no geral
* View - Camada responsável pela estrutura de visualização no front-end
* Controller - Responsável pela lógica de négocio do sistema, onde há efetivamente o desenvolvimento de regras, validações no Back-end e outras coisas.

#### MVVM

Derivado do MVC, o MVVM tem uma estrutura um pouco diferente:
* Model - semelhante ao MVC
* View - semelhante ao MVC
* ViewModel - esta camada é o meio termo entre o Model e a View, ela possui os dados necessários vindos do Model e onde recebe as declarações dos bidings, abstraindo ainda mais a camada View

#### MVP

Também derivado do MVC, aqui a camada que é responsável por mediar os dados é a Presenter
* Model - semelhante ao MVC
* View - semelhante ao MVC, exceto que assume responsabilidades como manipulação de eventos (que anteriormente pertencia ao Controller)
* Presenter - responsável pela captura e formatação dos dados vindos do Model para posterior exibição na View

## 2. Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```html
<!doctype html>
<html lang="en" data-ng-app="Capretz">
    <head>
        <meta charset="UTF-8">
        <title>Be MEAN</title>
        
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <label class="col-xs-8" for="nome"><span class="col-xs-12 col-sm-6 col-md-8">Seu nome:</span>
                    <input type="text" data-ng-model="nome">
                </label>
            </div>
            
            <div class="row">
                <label class="col-xs-8" for="sobrenome"><span class="col-xs-12 col-sm-6 col-md-8">Seu sobrenome:</span>
                    <input type="text" data-ng-model="sobrenome">
                </label>
            </div>
            <div class="row">
                <label class="col-xs-8" for="idade"><span class="col-xs-12 col-sm-6 col-md-8">Idade:</span>
                    <input type="text" data-ng-model="idade">
                </label>    
            </div>
            
            <div class="row">
                <label class="col-xs-8" for="chefe"><span class="col-xs-12 col-sm-6 col-md-8">Nome do chefe:</span>
                    <input type="text" data-ng-model="chefe">
                </label>    
            </div>
            
            <div class="row">
                <label class="col-xs-8" for="dog"><span class="col-xs-12 col-sm-6 col-md-8">Nome do cachorro:</span>
                    <input type="text" data-ng-model="dog">
                </label>    
            </div>
            
            <div class="wrapper">
                <p>
                    Sir {{ sobrenome | uppercase }}, {{ nome | capitalize}}: obrigado por informar que você tem {{ idade }} anos
                    <br>
                    Eu só queria fazer um teste porque o {{ chefe }} pediu.    
                </p>
                <p>
                    Atenciosamente, 
                    {{ dog }}
                </p>
            </div>
            
        </div>
        
        <script src="angular.min.js"></script>
        <script>
            angular.module("Capretz", [])
                .filter('capitalize', function(){
                    return function(text){
                        return (!!text) ? text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() : '';
                    };
                })
        </script>
    </body>
</html>
```
