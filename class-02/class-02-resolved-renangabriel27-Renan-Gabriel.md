# AngularJS - Aula 02 - Exercícios

Nome: Renan Gabriel Almeida Silva

Github: [renangabriel27](https://github.com/renangabriel27)

Data: 08/07/2016 21:23

## 1) Crie 1 exemplo para pelo menos 5 filtros padrões do Angular

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet">
  </head>
  <body data-ng-app="beMEAN">
    <section class="ui container">
      <div class="ui hidden divider"></div>
      <form class="ui form">
        <header class="ui dividing header">
          <h1> Exemplo com 5 filtros padrões do Angular </h1>
        </header>

        <div class="field">
          <label> Currency Format </label>
          <input type="text" name="name" data-ng-model="name">
          <p> {{ name | currency }} </p>
        </div>
        <div class="field">
          <label> Order by </label>
          <input type="text" name="data" data-ng-model="order">
          <p> {{ order | orderBy }} </p>
        </div>
        <div class="field">
          <label> Uppercase </label>
          <input type="text" name="upper" data-ng-model="upper">
          <p> {{ upper | uppercase }} </p>
        </div>
        <div class="field">
          <label> Lowercase </label>
          <input type="text" name="lower" data-ng-model="lower">
          <p> {{ lower | lowercase }} </p>
        </div>
        <div class="field">
          <label> Limit to (5) </label>
          <input type="text" name="limit_to" data-ng-model="limit_to">
          <p> {{ limit_to | limitTo:5 }} </p>
        </div>
      </section>
	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      <script>
        angular.module('beMEAN', [])
      </script>
  </body>
</html>
```
## 2) Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menor que 18 anos.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet">
  </head>
  <body data-ng-app="beMEAN">
    <section class="ui container">
      <div class="ui hidden divider"></div>
      <form class="ui form">
        <header class="ui dividing header">
          <h1> É maior de idade? </h1>
        </header>

        <div class="field">
          <label> Informe sua idade </label>
          <input type="text" name="age" data-ng-model="age">
          <p> {{ age | calculateAge }} </p>
        </div>
      </section>
	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      <script>
        angular.module('beMEAN', [])
          .filter('calculateAge', function(){
            return function(text) {
              if(text !== undefined && !isNaN(text)) {
                if((text) >= 18) return 'É maior de idade';
                
                return'É menor de idade';
              }
            }
          });
      </script>
  </body>
</html>
```
## 3) Crie 1 filtro que receba um horário, entre 0:00 e 23:59, e diga:
- Bom dia. // até 12:00
- Boa tarde. // até 18:00
- Boa noite. Dependendo do horário.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" rel="stylesheet">
  </head>
  <body data-ng-app="beMEAN">
    <section class="ui container">
      <div class="ui hidden divider"></div>
      <form class="ui form">
        <header class="ui dividing header">
          <h1> Horário </h1>
        </header>

        <div class="field">
          <label> Informe o horário (formato 24 horas) </label>
          <input type="text" name="hour" data-ng-model="hour" id="hour" placeholder="00:00">
          <p> {{ hour  | timeOfDay }} </p>
        </div>
      </section>
	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      <script>
        angular.module('beMEAN', [])
          .filter('timeOfDay', function(){
            return function(text) {
              if(text!= undefined && !isNaN(text)) {
                hour = String(text).substring(0, 2);
                minute = String(text).substring(2, 4);

                if(hour > 0 && hour < 24 && minute <= 59) {
                  var period = [hour <= 12, hour >= 12 && hour <=18, hour <= 24];
                  switch(period.indexOf(true)) {
                    case 0: return 'Bom dia'; break;
                    case 1: return 'Boa tarde'; break;
                    case 2: return 'Boa noite'; break;
                    default: return 'Horário inválido!';
                  }
                }
              }
            }
          });
      </script>
  </body>
</html>
```
