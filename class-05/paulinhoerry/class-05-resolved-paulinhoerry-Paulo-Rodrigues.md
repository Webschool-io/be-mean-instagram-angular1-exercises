# AngularJS 1 - Aula 05 - Exercício

Nome: Paulo Rodrigues

Github: [paulinhoerry](https://github.com/paulinhoerry)

Data: 05/11/2016

## 1- Criar uma função que para ordenar uma tabela a partir de uma coluna, clicando na sua tr > th, ordenando pelo campo da coluna.

```html
<body ng-controller="TeachersController as Teachers">
  <table ng-init="Teachers.predicate = ''; Teachers.reverse = false;">
    <thead>
      <tr>
        <th ng-repeat="(key, value) in Teachers.teachersList[0]">
          <a href="#" ng-click="Teachers.order(key)">{{key}}</a>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3">Search: <input type="text" ng-model="searchFilter"></td>
      </tr>
      <tr ng-repeat="teacher in Teachers.teachersList | orderBy:Teachers.predicate:Teachers.reverse | filter:searchFilter">
        <td ng-repeat="(key, value) in teacher">{{value}}</td>
      </tr>
    </tbody>
  </table>
</body>
```

```js
function TeachersController() {
  var vm = this;

  vm.order = order;

  function order(key) {
    vm.predicate = key;
    if(vm.reverse == false) vm.reverse = true;
    else vm.reverse = false;
  }

  vm.teachersList = [
    {name: "Brian Cox", class: "Physic", type: 1}
   ,{name: "Girafales", class: "Math", type: 1}
   ,{name: "Walter White", class: "Chemistry", type: 1}
   ,{name: "Niemeyer", class: "Architecture", type: 2}
   ,{name: "Schopenhauer", class: "Philosophy", type: 2}
  ]
};
```


## 2- Criar mais 1 Controller para Teachers com seu form para adição, listagem (defina um Array inicial) com a ordenação do exercício anterior, filtro filter e também o use o seu filtro criado na segunda aula.

```html
<table ng-init="Teachers.predicate = ''; Teachers.reverse = false;">
  <thead>
    <tr>
      <th ng-repeat="(key, value) in Teachers.teachersList[0]">
        <a href="#" ng-click="Teachers.order(key)">{{key}}</a>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3">Search: <input type="text" ng-model="searchFilter"></td>
    </tr>
    <tr ng-repeat="teacher in Teachers.teachersList | orderBy:Teachers.predicate:Teachers.reverse | filter:searchFilter">
      <td ng-repeat="(key, value) in teacher">{{value}}</td>
    </tr>
  </tbody>
</table>

<form ng-model="teacher.form">
  <label>Class
    <input type="text" ng-model="teacher.form.class">
  </label>
  <label>Teacher name
    <input type="text" ng-model="teacher.form.name">
  </label>
  <label>Type
    <input type="text" ng-model="teacher.form.type">
  </label>
  <input type="submit" value="enviar" ng-click="Teachers.addTeacher(teacher.form)">
</form>
```

```js
function TeachersController() {
  var vm = this;

  vm.order = order;
  vm.addTeacher = addTeacher;

  function order(key) {
    vm.predicate = key;
    if(vm.reverse == false) vm.reverse = true;
    else vm.reverse = false;
  }

  function addTeacher(teacher) {
    vm.teachersList.push(teacher);
  }

  vm.teachersList = [
    {name: "Brian Cox", class: "Physic", type: 1}
   ,{name: "Girafales", class: "Math", type: 1}
   ,{name: "Walter White", class: "Chemistry", type: 1}
   ,{name: "Niemeyer", class: "Architecture", type: 2}
   ,{name: "Schopenhauer", class: "Philosophy", type: 2}
  ]
};
```