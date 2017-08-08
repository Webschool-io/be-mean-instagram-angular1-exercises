# AngularJS 1.5.x - Aula 02 - Exercício  
**user:** [MagnumCortez](https://github.com/MagnumCortez)  
**autor:** Magnum cortez

## 1. Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

```
<!DOCTYPE html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <title>Class 02</title>
</head>
<body>
  <p>
    <label>Filter 01: </label>
    <input type="text" name="Filter1" ng-model="Filter1">
    <span>UpperCase: </span>{{ Filter1 | uppercase }}
  </p>
  <p>
    <label>Filter 02: </label>
    <input type="text" name="Filter2" ng-model="Filter2">
    <span>LowerCase: </span>{{ Filter2 | lowercase }}
  </p>
  <p>
    <label>Filter 03: </label>
    <input type="text" name="Filter3" ng-model="Filter3">
    <span>Number: </span>{{ Filter3 | number : 2 }}
  </p>
  <p>
    <label>Filter 04: </label>
    <input type="text" name="Filter4" ng-model="Filter4">
    <span>Currency: </span>{{ Filter4 | currency: "R$ " }}
  </p>
  <p>
    <label>Filter 05: </label>
    <input type="text" name="Filter5" ng-model="Filter5">
    <span>limitTo: </span>{{ Filter5 | limitTo: 10 }}
  </p>
  <script src="angular.min.js"></script>
  <script>angular.module("BeMEAN",[])</script>
</body>
</html>
```

## 2. Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menor que 18 anos.

```
<!DOCTYPE html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <title>Class 02</title>
</head>
<body>
  <label>Digite sua idade:</label>
  <input type="number" name="idade" ng-model="idade"><br><br>
  <p>Você é: <strong>{{ idade | maioridade }}</strong></p>

  <script src="angular.min.js"></script>
  <script>
    angular.module("BeMEAN",[])
    .filter("maioridade", function() {
      return function(idade) {
        if (!isNaN(idade)){
          if (idade >= 18) {
            return "Maior de Idade";
          }
          return "Menor de Idade";
        }
      }
    });
  </script>
</body>
</html>
```

## 3. Crie 1 filtro que receba um horário, entre 0:00 e 23:59, e diga:
- Bom dia. // até 12:00;
- Boa tarde. // até 18:00
- Boa noite.

```
<!DOCTYPE html>
<html lang="pt" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <title>Class 02</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
</head>
<body>
  <label>Horário: <input type="text" ng-model="horario"></label><br><br>
  <p>Olá, {{ horario | saudacao }}</p>

  <script>
    angular.module("BeMEAN",[])
    .filter("saudacao", function() {
      return function(horario) {
        if (horario !== undefined && horario.length >= 2) {
          var hour = parseInt(horario.substring(0,2),10);
          var periodo = [
            (hour >= 0 &&hour < 12),
            (hour >= 12 && hour < 18),
            (hour >= 18 && hour < 24)
          ];

          switch (periodo.indexOf(true)) {
            case (0):
              return "Bom dia!";
            case (1):
              return "Boa tarde!";
            case (2):
              return "Boa Noite!";
            default:
              return "Período Inválido!";
          }
        }
      }
    });
  </script>
</body>
</html>
```