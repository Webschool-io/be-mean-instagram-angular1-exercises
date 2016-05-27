# AngularJS - Aula 02 - Exercício

Nome: Hudson Brendon
Github: [hudsonbrendon](https://github.com/hudsonbrendon)  
Data: 1463618696750

## 1- Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>{{ titulo }}</title>
  </head>
  <body>
    <label for="nome">Seu nome:
      <input type="text" data-ng-model="nome">
    </label>
    <br>
    {{ nome | uppercase }}
    <br>
    {{ nome | lowercase }}
    <br>
    {{ nome | currency }}
    <br>
    {{ nome | date }}
    <br>
    {{ nome | number }}

    <script src="angular.min.js"></script>
    <script>
      angular.module('BeMEAN', []);
    </script>
  </body>
</html>


## 2- Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menos que 18 anos.

<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>{{ titulo }}</title>
  </head>
  <body>
    <label for="nome">Seu nome:
      <input type="text" data-ng-model="nome">
    </label>
    {{ nome | age }}

    <script src="angular.min.js"></script>
    <script>
      angular.module('BeMEAN', [])  
          .filter('age', function () {
            return function (text) {
              if (text) {
                if (text < 18) {
                  return "Menor de idade"
                }
                else {
                  return "Maior de idade"
                }
              }
            };
          });
    </script>
  </body>
</html>


## 3- Crie um filtro que receba um horário, entre 0:00 e 23:59, e diga:

<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>{{ titulo }}</title>
  </head>
  <body>
    <label for="nome">Seu nome:
      <input type="text" data-ng-model="nome">
    </label>
    {{ nome | time }}

    <script src="angular.min.js"></script>
    <script>
      angular.module('BeMEAN', [])
          .filter('time', function () {
            return function (text) {
              if (text >= 0 && text <= 12) {
                return "Bom Dia"
              }
              if (text > 12 && text <= 18) {
                return "Boa tarde"
              }
              if (text > 18 && text <= 23.59) {
                return "Boa noite"
              }
              else {
                return "Informe um horário entre 00:00 horas e 23:59"
              }
            };
          });
    </script>
  </body>
</html>
