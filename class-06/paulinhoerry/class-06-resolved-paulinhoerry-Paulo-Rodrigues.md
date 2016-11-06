# AngularJS 1 - Aula 06 - Exercício

Nome: Paulo Rodrigues

Github: [paulinhoerry](https://github.com/paulinhoerry)

Data: 06/11/2016

## 1- Criar função de delete utilizando splice em vez de filter

```html
<div class="col s6">
  <label>Search: <input type="text" ng-model="searchFilter"></label>

  <table class="bordered" ng-init="Teachers.predicate = ''; Teachers.reverse = false;">
    <thead>
      <tr>
        <th></th>
        <th>
          <a href="#" ng-click="Teachers.order('class')">Class</a>
        </th>
        <th>
          <a href="#" ng-click="Teachers.order('name')">Name</a>
        </th>
        <th>
          <a href="#" ng-click="Teachers.order('type')">Type</a>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr ng-repeat="teacher in Teachers.teachersList | orderBy:Teachers.predicate:Teachers.reverse | filter:searchFilter">
        <td>
          <input type="checkbox" id="teacher-{{$index}}" ng-model="teacher.selected" />
          <label for="teacher-{{$index}}">Red</label>
        </td>
        <td ng-repeat="(key, value) in teacher">{{value}}</td>
      </tr>
    </tbody>
  </table>
  <button class="btn waves-effect waves-light col s12 red accent-3" type="submit" ng-click="Teachers.removeTeacher(Teachers.teachersList)">Remove</button>
</div>
```

```js
function TeachersController() {
  var vm = this;

  vm.removeTeacher = removeTeacher;

  function removeTeacher(teachersList) {
    
    teachersList.map(function(el, i){
      if(teachersList[i].selected) teachersList.splice(i, 1);
    })

    vm.teachersList = teachersList;
  }
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