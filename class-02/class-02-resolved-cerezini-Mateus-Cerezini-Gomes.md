# Angularjs 1 - Aula 02 - Exercício

User: [Cerezini](https://github.com/cerezini)

Autor: Mateus Cerezini Gomes

Data: 1464056564542

## 1. Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

```html
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be Mean</title>
  </head>
  <body>

    <h1>Imóvel</h1>
    <form>
      <p><label for="name">Nome do proprietário: <input type="text" data-ng-model="name"></label></p>
      <p><label for="email">Email de contato: <input type="text" data-ng-model="email"></label></p>
      <p><label for="price">Valor do imóvel: <input type="text" data-ng-model="price"></label></p>
      <p><label for="constructed_at">Data de construção do imóvel: <input type="date" data-ng-model="constructed_at"></label></p>
      <p><label for="details">Data de construção do imóvel: <textarea type="text" data-ng-model="details"></textarea></label></p>
    </form>
    <br>
    <p>
      O imóvel de propriedade do senhor(a) <b>{{name | uppercase}}</b> ({{email | lowercase}}), construída em <b>{{ constructed_at | date : 'dd/MM/yyyy'}}</b>,
      avaliada atualmente em <b>{{ price | currency:'R$'}}</b> apresenta os seguintes detalhes:
    </p>
    <p>{{ details | limitTo:100}}</p>

    <script type="text/javascript" src="../../angular.min.js"></script>
    <script type="text/javascript">
      angular
        .module('BeMEAN', []);
    </script>
  </body>
</html>
```

## 2. Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menor que 18 anos.

```html
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be Mean</title>
  </head>
  <body>

    <p>
      <label for="age">Minha idade: <input type="text" data-ng-model="age"></label>
      <b>{{age | isAdult}}</b>
    </p>

    <script type="text/javascript" src="../../angular.min.js"></script>
    <script type="text/javascript">
      angular
        .module('BeMEAN', [])
        .filter('isAdult', () => {
          return (age) => {
            if (age && !(isNaN(age))) {
              if (age < 18) return 'Menor de 18 anos.';
              else return 'Maior de 18 anos.'
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
Dependendo do horário.

```html
<!DOCTYPE html>
<html data-ng-app="BeMEAN">
  <head>
    <meta charset="utf-8">
    <title>Be Mean</title>
  </head>
  <body>

    <p>
      <label for="age">Horário: <input type="time" data-ng-model="time"></label>
      <b>{{time | dayPeriod}}</b>
    </p>

    <script type="text/javascript" src="../../angular.min.js"></script>
    <script type="text/javascript">
      angular
        .module('BeMEAN', [])
        .filter('dayPeriod', () => {
          return (time) => {
            if (time) {
              let hour = time.getHours();
              if (hour > 0 && hour < 12) return 'Bom dia.';
              else if(hour < 18) return 'Boa tarde.';
              else return 'Boa noite';
            }
          }
        });
    </script>
  </body>
</html>
```
