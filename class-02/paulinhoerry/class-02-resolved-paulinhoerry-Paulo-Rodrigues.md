# AngularJS 1 - Aula 02 - Exercício

Nome: Paulo Rodrigues

Github: [paulinhoerry](https://github.com/paulinhoerry)

Data: 03/11/2016

## 1 - Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

```html
<label for="name">
  <input type="text" ng-model="name"> {{name | uppercase}}
</label>
<label for="money">
  <input type="number" ng-model="money"> {{money | currency}}
</label>
<label for="limit">
  <input type="number" ng-model="limit"> {{limit | limitTo: 2}}
</label>
<label for="date">
  <input type="text" ng-model="date"> {{date | date: 'dd/MM/YYYY'}}
</label>
```


## 2 - Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menos que 18 anos.

```html
<label for="age">
  <input type="text" ng-model="age"> {{age | DateFilter }} <span id="result"></span>
</label>
```

```js
angular
  .module('study', [])
  .filter('DateFilter', DateFilter)

  function DateFilter() {
    return function(age) {
      if(age >= 18) document.getElementById('result').innerHTML = 'Você é maior de idade';
      else document.getElementById('result').innerHTML = 'Você é menor de idade';
    }
  }
```


## 3 - Crie um filtro que receba um horário, entre 0:00 e 23:59, e diga:
- Bom dia. // até 12:00
- Boa tarde. // até 16:00.
- Boa noite.

```html
<label for="time">
  <input type="time" ng-model="time"> {{time | HourFilter}} <span id="resultHour"></span>
</label>
```

```js
angular
  .module('study', [])
  .filter('HourFilter', HourFilter)
  
function HourFilter() {
  return function(time) {
    if(time) {
      var hour = time.getHours();
      if(hour > 0 && hour < 12) document.getElementById('resultHour').innerHTML = 'Bom dia';
      else if(hour < 18) document.getElementById('resultHour').innerHTML = 'Boa Tarde';
      else document.getElementById('resultHour').innerHTML = 'Boa noite';
    }
  }
```
