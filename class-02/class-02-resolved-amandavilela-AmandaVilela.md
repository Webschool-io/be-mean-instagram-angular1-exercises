# AngularJS 1 - Aula 02 - Exercício

Nome: Amanda Vilela

Github: amandavilela

Data: 03/07/2016 - 17:18

## 1 - Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

```
<input type="text" name="currency" data-ng-model="currency" placeholder="Type a number">
{{ currency | currency }}
<br>
<input type="text" name="name" data-ng-model="name" placeholder="Type a string">
{{ name | uppercase }}
<br>
<input type="text" name="name2" data-ng-model="name2" placeholder="Type a string">
{{ name2 | lowercase }}
<br>
<input type="number" name="decimal" data-ng-model="decimal" placeholder="Type a number">
{{ decimal | number:2 }}
<br>
<input type="number" name="limit" data-ng-model="limit" placeholder="Type a number">
{{ limit | limitTo:10 }}
```

## 2 - Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menos que 18 anos.

```
angular.module("myApp", [])
.filter("maioridade", function() {
  return function (age) {
    if (age) {
      if (age >= 18) return "maior de idade";
      if (age < 18 ) return "menor de idade";
      else return "idade inválida";
    }
  }
});
```

## 3 - Crie um filtro que receba um horário, entre 0:00 e 23:59, e diga:
- Bom dia. // até 12:00
- Boa tarde. // até 16:00.
- Boa noite.

```
angular.module("myApp", [])
.filter("mensagem", function() {
  return function (time) {
    if (time) {
      var hours = parseInt(time.substring(0, 2), 10);
      if(hours >= 0 && hours < 12) msg = 'Bom dia';
      if(hours >= 12 && hours < 18) msg = 'Boa tarde';
      if(hours >= 18 && hours < 23) msg = 'Boa noite';
      return msg;
    }
  }
});
```
