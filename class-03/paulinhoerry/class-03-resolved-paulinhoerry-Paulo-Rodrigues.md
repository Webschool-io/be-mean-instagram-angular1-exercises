# AngularJS 1 - Aula 03 - Exercício

Nome: Paulo Rodrigues

Github: [paulinhoerry](https://github.com/paulinhoerry)

Data: 03/11/2016

## 1- Criar 1 controller de professores, igual aos outros , seguindo nosso último padrão

```html
<ul ng-repeat="teacher in Teachers.teachersList">
  <li>{{ teacher.name }} - {{ teacher.class }}</li>
</ul>
```

```js
angular
  .module('study', [])
  .controller('TeachersController', TeachersController);

function TeachersController() {
  var vm = this;

  vm.teachersList = [
    {name: "Brian Cox", class: "Physic"}
   ,{name: "Girafales", class: "Math"}
   ,{name: "Walter White", class: "Chemistry"}
  ]
};
```


## 2 - Utilizar seu filtro criado na aula passada em algum dos seus valores.

```html
<ul ng-repeat="teacher in Teachers.teachersList">
  <li>{{ teacher.name }} - {{ teacher.class }} - {{ teacher.type | ClassFilter }}</li>
</ul>
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
        if (classType === 1) div.innerHTML = "Exatas";
        if (classType === 2) div.innerHTML = "Humanas";

        return div.innerText;
      }
    }
  }

  function TeachersController() {
    var vm = this;

    vm.teachersList = [
      {name: "Brian Cox", class: "Physic", type: 1}
     ,{name: "Girafales", class: "Math", type: 1}
     ,{name: "Walter White", class: "Chemistry", type: 2}
    ]
  };
```
