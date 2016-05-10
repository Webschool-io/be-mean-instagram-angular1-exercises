```html
<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <title>BeMEAN AngularJS - Ex 2</title>
</head>
<body data-ng-app="BeMEAN">
  <div class="container">
        <h2>Exercício 1</h2>

         <div class="form-group">
          <label for="valorDecimal">Número: (number) </label>
          <input type="number" class="form-control" name="valorDecimal" data-ng-model="valorDecimal">
          {{valorDecimal | number:2}}
        </div>

        <div class="form-group">
          <label for="valorMonetario">Valor monetário: (currency) </label>
          <input type="number" class="form-control" name="valorMonetario" data-ng-model="valorMonetario">
          {{valorMonetario | currency:"R$"}}
        
        </div>


        <div class="form-group">
          <label for="valorData"> Data: (date) </label>
          <input type="date" class="form-control" name="valorData" data-ng-model="valorData">
          {{valorData | date:"mediumDate"}}
        </div>

        <div class="form-group">

          <label for="valorLimitTo"> Valor até o limete: (limitTo)  </label>
          <input type="text" class="form-control" name="valorLimitTo" data-ng-model="valorLimitTo">
          {{valorLimitTo | limitTo:5}}
        
        </div>

        <div class="form-group">
          <label for="ValorOrderBy"> Resultado de ordenação: (orderBy) </label>
          <input type="text" class="form-control" name="ValorOrderBy" data-ng-model="ValorOrderBy" >
          {{ValorOrderBy | orderBy}}
        </div>


        <h2>Exercício 2</h2>
        <div class="form-group">
          <label for="idade"> Digite sua idade: </label>
          <input type="text" class="form-control" name="idade" data-ng-model="idade">
          {{idade | confereIdade}}
        </div>

        <h2>Exercício 3</h2>
        <div class="form-group">
          <label for="hora"> Digite o Horário: </label>
          <input type="time" class="form-control" name="hora" data-ng-model="hora">
          {{hora | confereHora}}
        </div>
  </div>

  <script>
    angular.module("BeMEAN", [])
      .filter('confereIdade', function() {
        return function(text) {
          if (text) {
            if (isNaN(text)) return 'Idade inválida';
            if (text >= 18) return 'Maior que 18 anos';
            else return 'Menor que 18 anos';
          }
        }
      })
      .filter('confereHora', function() {
        return function(date) {
          if (date) {
            if (!date instanceof Date) return 'Data inválida';
            var hora = date.getHours();
            switch(true) {
              case (hora >= 0 && hora < 12):
                return 'Bom dia.';
              case (hora >= 12 && hora < 18):
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
