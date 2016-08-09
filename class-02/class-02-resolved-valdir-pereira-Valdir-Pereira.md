# Angularjs 1 - Aula 02 - Exercício
Autor: Valdir Pereira 
[ Link do meu GitHub ](https://github.com/valdir-pereira)

Data: 09/08/2016

## 1. Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title> Exercise 02 </title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body data-ng-app="exercise02">

  <div class="container">
    <div class="row">
      <form>
        <div class="form-group">
          <label for="nome">Seu Nome</label>
          <input type="text" class="form-control" data-ng-model="nome">
        </div>
        <div class="form-group">
          <label for="pokemon">Seu melhor Pokemon</label>
          <input type="text" class="form-control" data-ng-model="pokemon">
        </div>
        <div class="form-group">
          <label for="captura">Data de captura do Pokemon</label>
          <input type="date" class="form-control" data-ng-model="captura">
        </div>
        <div class="form-group">
          <label for="ataque">Valor do Ataque do Pokemon</label>
          <input type="text" class="form-control" data-ng-model="ataque">
        </div>
        <div class="form-group">
          <label for="valor">Valor em reais do pokemon</label>
          <input type="text" class="form-control" data-ng-model="valor">
        </div>

      </form>

      <h2 class="text-info">{{nome | uppercase}} </h2>

      <h2 class="text-info">{{pokemon | lowercase}} </h2>

      <h2 class="text-info">{{captura | date: 'dd/MM/yyyy' }} </h2>

      <h2 class="text-info">{{ataque | number: 0 }} </h2>

      <h2 class="text-info">{{valor | currency: 'R$ ' }} </h2>


    </div>
  </div>

  <script src="angular.min.js"></script>
  <script>
    angular.module('exercise02', []);
  </script>
</body>
</html>
```

## 2. Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menor que 18 anos.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title> Exercise 02 </title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body data-ng-app="exercise02">

  <div class="container">
    <div class="row">
      <form>

        <div class="form-group">
          <label for="idade">Digite sua idade</label>
          <input type="text" class="form-control" data-ng-model="idade">
        </div>

      </form>

      <h2 class="text-info">{{idade | calculaIdade }} </h2>


    </div>
  </div>

  <script src="angular.min.js"></script>
  <script>
    angular.module('exercise02', [])
    .filter('calculaIdade', function(){
      return function(text) {
        if(text >= 18) return 'Maior de idade';
        if(text < 18) return 'Menor de idade';
      }
    })
    ;
  </script>
</body>
</html>
```

## 3. Crie 1 filtro que receba um horário, entre 0:00 e 23:59, e diga:
- Bom dia. // até 12:00;
- Boa tarde. // até 18:00
- Boa noite.
Dependendo do horário.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title> Exercise 02 </title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body data-ng-app="exercise02">

  <div class="container">
    <div class="row">
      <form>
        <div class="form-group">
          <label for="horario">Selecione um horário</label>
          <input type="text" placeholder="Digite um horário no formato HH:mm" class="form-control" data-ng-model="horario">
        </div>
      </form>

      <h2 class="text-info">{{horario | calcTime}} </h2>

    </div>
  </div>

  <script src="angular.min.js"></script>
  <script>
  angular.module('exercise02', [])
  .filter('calcTime', function(){
    return function(text) {
      if(text) {
        var horas = parseInt(text.substring(0, 2), 10);
        var minutos = parseInt(text.substring(3,5), 10);
        var periodos =[horas <= 12, horas > 12 && horas <= 18, horas > 18 && horas <= 24];

        switch(periodos.indexOf(true)){
          case (0):
            return 'Bom dia!'
          case (1):
            return 'Boa tarde!'
          case (2):
            return 'Boa Noite!'
          default:
            return 'hora inválida'
        }
      }
    }
  })
  ;
  </script>
</body>
</html>

```
