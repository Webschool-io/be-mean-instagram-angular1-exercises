# AngularJS 1.5.x - Aula 02 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468078872802


## Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.  

```html  
<!DOCTYPE html>

<html lang="pt-br" data-ng-app="aula02">

<head>
    <meta charset="UTF-8">
    <title>Be MEAN - AngularJS - Aula 02 - Exercício 01</title>

    <style>
        body{
            background-color: rgba(249, 269, 168, .5);
            font-size: 20px;
            color: #696969;
        }
    </style>
</head>

<body>
    <h1>Filtros Nativos do AngularJS</h1>
    <ul>
        <li>
            <strong>currency</strong>
            <br><span>Retorna um número para moeda: </span>

            <label for="currency">
                <input type="number" name="currency" id="currency" data-ng-model="number">
                {{ number | currency:"R$ " }}
            </label>
        </li>

        <li>
            <strong>date</strong>
            <br><span>Formata números em data: </span>

            <label for="date">
                <input type="text" name="date" id="date" data-ng-model="datein">
                {{ datein | date:"dd/MM/yyyy" }}
            </label>
        </li>

        <li>
            <strong>uppercase</strong>
            <br>

            <label for="name">
                <input type="text" name="name" id="name" data-ng-model="name">
                {{ name | uppercase }}
            </label>
        </li>

        <li>
            <strong>lowercase</strong>
            <br>

            <label for="nickname">
                <input type="text" name="nickname" id="nickname" data-ng-model="nickname">
                {{ nickname | lowercase }}
            </label>
        </li>
        <li>
            <strong>limitTo</strong>
            <br>

            <label for="age">
                <input type="text" name="age" id="age" data-ng-model="age">
                {{ age | limitTo:3 }}
            </label>
        </li>
    </ul>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <script>
        angular.module('aula02', []);
    </script>
</body>

</html>
```


## Crie 1 filtro novo onde você passe em um *input* a sua idade e ele diga se você é maior ou menos que 18 anos.  

```html  
<!DOCTYPE html>

<html lang="pt-br" data-ng-app="aula02">

<head>
    <meta charset="UTF-8">
    <title>Be MEAN - AngularJS - Aula 02 - Exercício 01</title>

    <style>
        body{
            background-color: rgba(249, 269, 168, .5);
            font-size: 20px;
            color: #696969;
        }
    </style>
</head>

<body>
    <h1>Verificando Idade</h1>

    <strong>Idade: </strong>
    <label for="age">
        <input type="text" data-ng-model="age">
    </label>

    {{ age | checkAge }}

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <script>
        angular.module('aula02', [])
            .filter('checkAge', function() {
                return function(num){
                    if(num<18) return "Menor de idade!";
                    else return "Maior de idade, tá fudido!";
                }
            });
    </script>
</body>

</html>
```


## Crie 1 filtro que receba um horário, entre 0:00 e 23:59, e diga:  
* Bom dia! (até 12:00);  
* Boa tarde! (até 18:00);  
* Boa noite!

```html  
<!DOCTYPE html>

<html lang="pt-br" data-ng-app="aula02">

<head>
    <meta charset="UTF-8">
    <title>Be MEAN - AngularJS - Aula 02 - Exercício 01</title>

    <style>
        body{
            background-color: rgba(249, 269, 168, .5);
            font-size: 20px;
            color: #696969;
        }
    </style>
</head>

<body>
    <h1>Horário</h1>

    <strong>Que horas são? </strong>
    <label for="time">
        <input type="text" data-ng-model="time">
    </label>

    {{ time | checkTime }}

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <script>
        angular.module('aula02', [])
            .filter('checkTime', function() {
                return function(num){
                    switch (num) {
                        case 1:
                            if(num>='0:00' && num<='12:00') return console.log("Bom dia!");
                            break;
                        case 2:
                            if(num>'12:00' && num<='18:00') return console.log("Boa tarde!");
                            break;
                        case 3:
                            if(num>'18:00' && num<='23:59') return console.log("Boa noite, vá dormir!!");
                            break;
                        default:
                            console.log("sei lá que horas são, véi!");
                    }
                }
            });
    </script>
</body>

</html>
```
