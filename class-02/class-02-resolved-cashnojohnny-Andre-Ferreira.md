<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <title>Ex 2</title>
</head>
<body data-ng-app="BeMEAN">
  <div class="container">
        <h2>Exercício 1</h2>
        <label for="currencyValue">currency: </label>
        <input type="number" name="currencyValue" data-ng-model="currencyValue">
        {{currencyValue | currency}}
        <br>

        <label for="decimalValue">number: </label>
        <input type="number" name="decimalValue" data-ng-model="decimalValue">
        {{decimalValue | number:3}}
        <br>

        <label for="dateValue">date: </label>
        <input type="date" name="dateValue" data-ng-model="dateValue">
        {{dateValue | date:"fullDate"}}
        <br>

        <label for="limitToValue">limitTo: </label>
        <input type="text" name="limitToValue" data-ng-model="limitToValue">
        {{limitToValue | limitTo:5}}
        <br>

        <label for="orderByValue">orderBy: </label>
        <input type="text" name="orderByValue" data-ng-model="orderByValue">
        {{orderByValue | orderBy}}
        <br>

        <h2>Exercício 2</h2>
        <label for="age">Idade: </label>
        <input type="text" name="age" data-ng-model="age">
        {{age | checkAge}}
        <br>

        <h2>Exercício 3</h2>
        <label for="hour">Horário: </label>
        <input type="time" name="hour" data-ng-model="hour">
        {{hour | greet}}
        <br>
  </div>

  <script>
    angular.module("BeMEAN", [])
      .filter('checkAge', function() {
        return function(text) {
          if (text) {
            if (isNaN(text)) return 'Idade inválida';
            if (text >= 18) return 'Maior de 18';
            else return 'Menor de 18';
          }
        }
      })
      .filter('greet', function() {
        return function(date) {
          if (date) {
            if (!date instanceof Date) return 'Data inválida';
            var hour = date.getHours();
            switch(true) {
              case (hour >= 0 && hour < 12):
                return 'Bom dia.';
              case (hour >= 12 && hour < 18):
                return 'Boa tarde.';
              default:
                return 'Boa noite.';
            }
          }
        }
      });
  </script>
</body>
</html>
