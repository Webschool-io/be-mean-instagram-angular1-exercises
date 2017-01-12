# AngularJS 1 - Aula 04 - Exercício

Nome: Paulo Rodrigues

Github: [paulinhoerry](https://github.com/paulinhoerry)

Data: 05/11/2016

## 1- Adicionar mais 1 campo em todos os Controllers e utlizar ele em orderBy.

```html
<body ng-controller="TeachersController as Teachers">
  <table>
    <thead>
      <tr>
        <th ng-repeat="(key, value) in Teachers.teachersList[0]">{{key}}</th>
      </tr>
    </thead>

    <tbody>
      <tr ng-repeat="teacher in Teachers.teachersList | orderBy:'type':true">
        <td ng-repeat="(key, value) in teacher">{{value}}</td>
      </tr>
    </tbody>
  </table>
</body>
```

```js
function TeachersController() {
  var vm = this;

  vm.teachersList = [
    {name: "Brian Cox", class: "Physic", type: 1}
   ,{name: "Girafales", class: "Math", type: 1}
   ,{name: "Walter White", class: "Chemistry", type: 2}
  ]
};
```


## 2- Utilizar esse valor adicional no ng-init para cada ng-repeat da View.

```html
<table ng-init="predicate = 'type'; reverse = true">
  <thead>
    <tr>
      <th ng-repeat="(key, value) in Teachers.teachersList[0]">{{key}}</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="teacher in Teachers.teachersList | orderBy:predicate:reverse">
      <td ng-repeat="(key, value) in teacher">{{value}}</td>
    </tr>
  </tbody>
</table>
```

```js
angular
  .module('study', [])
  .filter('ClassFilter', ClassFilter)
  .controller('TeachersController', TeachersController);


function ClassFilter() {
  return function(classType) {
    var div = document.createElement('div');
    if (classType) {
      if (classType === 1) return "Exatas";
      if (classType === 2) return "Humanas";
    }
  }
}

function TeachersController() {
  var vm = this;

  vm.teachersList = [
    {name: "Brian Cox", class: "Physic", type: 1}
   ,{name: "Girafales", class: "Math", type: 1}
   ,{name: "Walter White", class: "Chemistry", type: 1}
   ,{name: "Niemeyer", class: "Architecture", type: 2}
   ,{name: "Schopenhauer", class: "Philosophy", type: 2}
  ]
};
```


## 3- Criar um filtro para cada ng-repeat.

```html
<body ng-controller="TeachersController as Teachers">
  <table ng-init="predicate = 'type'; reverse = true">
    <thead>
      <tr>
        <th ng-repeat="(key, value) in Teachers.teachersList[0]">{{key}}</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td colspan="3">Search: <input type="text" ng-model="searchFilter"></td>
      </tr>
      <tr ng-repeat="teacher in Teachers.teachersList | orderBy:predicate:reverse | filter:searchFilter">
        <td ng-repeat="(key, value) in teacher">{{value}}</td>
      </tr>
    </tbody>
  </table>
</body>
```

```js
angular
  .module('study', [])
  .filter('ClassFilter', ClassFilter)
  .controller('TeachersController', TeachersController);


function ClassFilter() {
  return function(classType) {
    var div = document.createElement('div');
    if (classType) {
      if (classType === 1) return "Exatas";
      if (classType === 2) return "Humanas";
    }
  }
}

function TeachersController() {
  var vm = this;

  vm.teachersList = [
    {name: "Brian Cox", class: "Physic", type: 1}
   ,{name: "Girafales", class: "Math", type: 1}
   ,{name: "Walter White", class: "Chemistry", type: 1}
   ,{name: "Niemeyer", class: "Architecture", type: 2}
   ,{name: "Schopenhauer", class: "Philosophy", type: 2}
  ]
};
```
