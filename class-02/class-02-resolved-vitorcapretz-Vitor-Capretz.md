# Angular - Aula 02 - Exercício
**user:** [vitorcapretz](https://github.com/vitorcapretz)

**autor:** Vitor Capretz

**date:** 1466462044603

## 1. Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

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
                <label class="col-xs-8" for="nascimento"><span class="col-xs-12 col-sm-6 col-md-8">Data de nascimento:</span>
                    <input type="text" data-ng-model="nascimento">
                </label>    
            </div>
            
            <div class="row">
                <label class="col-xs-8" for="valor"><span class="col-xs-12 col-sm-6 col-md-8">Valor da conta bancária:</span>
                    <input type="text" data-ng-model="valor">
                </label>    
            </div>
            
            <div class="row">
                <label class="col-xs-8" for="cpf"><span class="col-xs-12 col-sm-6 col-md-8">CPF:</span>
                    <input type="text" data-ng-model="cpf">
                </label>    
            </div>
            
            <div class="wrapper">
                <p>
                    Olá {{ sobrenome | uppercase }}, {{ nome | lowercase}} </br>
                    Você nasceu em {{ nascimento | date:'dd-MM-yyyy' }}</br>
                    Valor da conta: {{ valor | currency}} </br>
                    CPF: {{ cpf | limitTo:11}}
                </p>
            </div>
            
        </div>
        
        <script src="angular.min.js"></script>
        <script>
            angular.module("Capretz", [])
        </script>
    </body>
</html>
```

## 2. Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior que 18 anos.

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
                <label class="col-xs-8" for="idade"><span class="col-xs-12 col-sm-6 col-md-8">Sua idade:</span>
                    <input type="text" data-ng-model="idade">
                </label>
            </div>
            
            <div class="wrapper">
                <p>Pode tomar cerveja: {{ idade | maior_idade}}
            </div>
            
        </div>
        
        <script src="angular.min.js"></script>
        <script>
            angular.module("Capretz", [])
                .filter('maior_idade', function(){
                    return function(text){
                        return (!!text) ? (parseInt(text) >= 18 ? 'pode sim, recomendo de trigo' : 'ainda não, espera mais um pouco') : '';
                    };
                })
        </script>
    </body>
</html>
```

## 3. Crie 1 filtro que receba um horário e entre as 0:00 e 23:59 diga de acordo com o horário: Bom dia (até as 12:00), Boa tarde (até as 18:00), até as (00:00).

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
                <label class="col-xs-8" for="hora"><span class="col-xs-12 col-sm-6 col-md-8">Horário (hh:mm):</span>
                    <input type="time" data-ng-model="hora">
                </label>
            </div>
            
            <div class="wrapper">
                <p>{{ hora | saudacao }}
            </div>
            
        </div>
        
        <script src="angular.min.js"></script>
        <script>
            angular.module("Capretz", [])
                .filter('saudacao', function(){
                    return function(text){
                        if(!text) return '';
                        console.log(text);
                        const hora = text.getHours();
                        let greeting = '';
                        console.log(hora);
                        if(hora >= 0 && hora < 12) greeting = 'Bom dia';
                        if(hora >= 12 && hora < 18) greeting = 'Boa tarde';
                        if(hora >= 18 && hora < 23) greeting = 'Boa noite';
                        
                        return greeting;
                        
                    };
                })
        </script>
    </body>
</html>
```
