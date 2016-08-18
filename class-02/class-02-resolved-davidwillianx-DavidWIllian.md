# AngularJS 1 - Aula 02 - Exercício

Nome: David Willian

Github: [davidwillianx](https://github.com/davidwillianx)

Data: 24/07/2016

## 1 - Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

```
<html ng-app="exercisetwo">
  <head>
    <meta charset="utf-8">
    <title>David Willian</title>
  </head>
  <body>
    <h2>Angular JS Built in filters</h2>
    <form>
        <label for="name">Name: </label>
        <input type="text" id="name" name="name" data-ng-model="name" placeholder="Set you name here MDFK">
        Uppercase: {{ name | uppercase}}
        Lowercase: {{ name | lowercase}}
        Reverse: {{ name | | json}}

        <label for="tip">Gimme money: </label>
        <input type="text" name="money" data-ng-model="tip" placeholder="gimme money boda">
        Currency: {{ tip | currency }}
         **Better option include angular locale**

        <input type="time" name="currentTime" data-ng-model="currentTime" placeholder="HH:mm:ss">
        Date: {{ currentTime | date: 'HH:mm' }}
    </form>
  </body>
   <script type="text/javascript">
   (function () {
      'use strict';
      angular.module('exercisetwo',[]);
   })();
   </script>
</html>
```

## 2 - Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menos que 18 anos.

```
<html ng-app="exercisetwo">
  <head>
    <meta charset="utf-8">
    <title>David Willian</title>
  </head>
  <body>
    <h2>Angular My Own filter</h2>
    <form>
      <input type="text" name="age" ng-model="age" />
      Result : {{ age | AreYouUnderAgeMDFK}}
    </form>
  </body>
   <script type="text/javascript">
   (function () {
      'use strict';
      angular.module('exercisetwo',[])
     .filter('AreYouUnderAgeMDFK', CheckUnderAge);

       function CheckUnderAge(){
            var check = function (currentAge){
              if(currentAge){
                if(!isNaN(parseFloat(currentAge))
                   && isFinite(currentAge)){
                  return currentAge > 18 ? "Já pode beber": "Fica somente no toddy";
                }

              }
            };

         return check;
       }

   })();
   </script>
</html>
```

## 3 - Crie um filtro que receba um horário, entre 0:00 e 23:59, e diga:

```
<html ng-app="exercisetwo">
  <head>
    <meta charset="utf-8">
    <title>David Willian</title>
  </head>
  <body>
    <h2>Angular JS Built in filters</h2>
    <form>
      <Label for="time">Time: </Label>
      <input type="text" id="time" name="currentTime" ng-model="currentTime"
          placeholder="Set time plz format HH:mm"/>

       {{ currentTime | BecomePolite}}

    </form>
  </body>
   <script type="text/javascript">
   (function () {
         'use strict';
         angular.module('exercisetwo',[])
        .filter('BecomePolite', BePolite);

          function BePolite(){

            var checkTime = function(currentTime){
              if(currentTime){
                  var hours = parseInt(currentTime.split(':')[0]);

                 if(hours >= 0 && hours < 12)
                    return "Good morning Sr";

                 if(hours >= 12 && hours < 18)
                   return "Good Evening Sr";

                if(hours >= 18 && hours < 0)
                   return "Its all darkness motherfucker!!!!";
              }

            }

              return checkTime;
          }

  })();
   </script>
</html>
```
