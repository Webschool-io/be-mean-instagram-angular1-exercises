# AngularJS - Aula 01 - Exercício
**user:** https://github.com/guilhermependezza
**autor:** Guilherme Pendezza de Sousa
**date:** 1462311677613

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Filtros - Be MEAN</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    <script type="text/javascript">
      angular.module("class2", [])
        .filter('ehMaiorDeIdade', function(){
          return function(idade){
            if(isNaN(Number.parseFloat(idade))){
              return "";
            }
            if(idade < 18) return "Menor de idade";
            return "Maior de idade"
          }
        })
        .filter('saudacao', function(){
          return function(horario){
            if(!horario) return "";

            var regex = /^(([0-1][0-9])|(2[0-3])):([0-5][0-9])$/;
            var result = regex.exec(horario);

            if(result){
              var horas = Number.parseInt(result[1]);
              var minutos = Number.parseInt(result[4]);

              if(horas < 11 || (horas === 12 && minutos === 0)) return "Bom dia"
              else if(horas < 17 || (horas === 18 && minutos === 0)) return "Boa tarde"
              else return "Boa noite";
            }
            return "Digite um horário válido no formato hh:mm";
          }
        });
    </script>
  </head>
  <body ng-app="class2">
      <p>Exercício 1</p>
      <p>
        <label>Currency:
          <input type="text" ng-model="amount"> {{amount | currency}}
        </label>
      </p>

      <p>
        <label>Lowercase:
          <input type="text" ng-model="lower"> {{lower | lowercase}}
        </label>
      </p>

      <p>
        <label>Uppercase:
          <input type="text" ng-model="upper"> {{upper | uppercase}}
        </label>
      </p>

      <p>
        <label>LimitTo:
          <input type="text" ng-model="frase"> {{frase | limitTo:5}}
        </label>
      </p>

      <p>
        <label>Number:
          <input type="text" ng-model="num"> {{num | number}}
        </label>
      </p>

      <hr>
      <p>Exercício 2</p>
      <label>Idade:
        <input type="text" ng-model="idade"> {{idade | ehMaiorDeIdade}}
      </label>

      <hr>
      <p>Exercício 3</p>
      <label>Horário no formato hh:mm
        <input type="text" ng-model="horario"> {{horario | saudacao}}
      </label>
  </body>
</html>
```
