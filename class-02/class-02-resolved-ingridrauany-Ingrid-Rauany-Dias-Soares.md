# AngularJS - Aula 02 - Exercício

Nome: Ingrid Rauany  
Github: [ingridrauany](https://github.com/ingridrauany)  
Data: 1463618696750

## 1- Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

```html
<!doctype html>
<html data-ng-app="BeMEAN">
    <head>
        <meta charset="utf-8">
        <title>Be MEAN</title>
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
            <h1>Prova</h1>
            <label for="data">Data da Prova (apenas números): 1288323623006
            </label>
            <h2>Informe os dados de cada aluno:</h2>
            <h3>*Nome completo</h3>
            <label for="nome">Nome:
                <input type="text" data-ng-model="nome1">
            </label>
            <label for="nome">Nota:
                <input type="text" data-ng-model="nota1">
            </label>
            </br>
            <label for="nome">Nome:
                <input type="text" data-ng-model="nome2">
            </label>
            <label for="nome">Nota:
                <input type="text" data-ng-model="nota2">
            </label>
            
            <h2>Data:</h2>
            {{ 1288323623006 | date: 'mediumDate' }}
            <h2>Notas (arredondas):</h2>
            {{ nome1 | limitTo: 5 | uppercase }} - {{ nota1 | number:0 }}</br>
            {{ nome2 | limitTo: 5 | uppercase }} - {{ nota2 | number:0 }} 
        </div>
        <div class="dados">      
            <h2>Compra Produtos</h1>
            <label for="nome">Preço Produto 1:
                <input type="number" data-ng-model="valor1"></br>       
            </label>
            <label for="nome">Preço Produto 2:
                <input type="number" data-ng-model="valor2"></br>
            </label>
            <label for="nome">Preço Produto 3:
                <input type="number" data-ng-model="valor3">
            </label>
            
            <h2>Total da Compra:</h2>
            {{ valor1+valor2+valor3  | currency }}
        </div>
        <script>
            angular.module('BeMEAN', [])
        </script>
    </body>
</html>
```

## 2- Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menos que 18 anos.

```html
<!doctype html>
<html data-ng-app="BeMEAN">
    <head>
        <meta charset="utf-8">
        <title>Be MEAN</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    </head>
    <body>
        <h2>Digite sua idade:</h2>
        <input type="text" name="idade"  data-ng-model="idade">
        <h2> Sua idade é:</h2>
        {{ idade }} {{ idade | maioridade }}
        <script>
            angular.module('BeMEAN', [])
            
            .filter('maioridade', function() {
                return function(text) {
                    if(text >= 18) return 'e você é maior de idade';
                    if(text < 18) return 'e você é menor de idade';
                    else return 'Insira uma idade válida';
                };
            });
        </script>
    </body>
</html>
```

## 3- Crie um filtro que receba um horário, entre 0:00 e 23:59, e diga:

* Bom dia. // até 12:00
* Boa tarde. // até 16:00.
* Boa noite.

Dependendo do horário.

```html
<!doctype html>
<html data-ng-app="BeMEAN">
    <head>
        <meta charset="utf-8">
        <title>Be MEAN</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    </head>
    <body>
        <h2>Digite o horário:</h2>
        <h3>*Formato exemplo: 12:00 </h3>
        <input type="text" name="horario" data-ng-model="horario">
        </br>
        </br>
        Horário: {{ horario }} - {{ horario | mensagem }}
        <script>
            angular.module('BeMEAN', [])
            
            .filter('mensagem', function() {
                return function(text) {
                    if(text) {
                        var horas = parseInt(text.substring(0, 2), 10);
                        var minutos = parseInt(text.substring(3,5), 10)
                        var menu = [horas <= 12, horas > 12 && horas <= 16, horas > 16 && horas < 24];
                        switch (menu.indexOf(true)) {
                            case (0):
                                return 'Bom dia!';
                            case (1):
                                return 'Boa tarde!';
                            case (2):
                                return 'Boa noite!';
                            default:
                                return 'Digite um horário válido';
                         }
                    };
                };
            });
        </script>
    </body>
</html>
```
