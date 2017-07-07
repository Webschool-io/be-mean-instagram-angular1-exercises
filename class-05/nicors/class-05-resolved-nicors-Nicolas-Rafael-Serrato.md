# AngularJS - Aula 04 - Exercício  
**user:** [nicors](https://github.com/nicors)  
**autor:** Nicolas Serrato
**Data:** 1499264608652


## 1- Criar uma função que para ordenar uma tabela a partir de uma coluna, clickando na sua tr>th, ordenando pelo campo da coluna.

```js
vm.ordenar = ordenar;
function ordenar(campo) {
  vm.predicate = campo;
  vm.reverse = !vm.reverse;
}
```

```html
<table>
  <thead>
    <tr>
      <th data-ng-repeat="(key,value) in User.users[0]"><a href="" data-ng-click="User.ordenar(key)">{{ key }}</a> </th>
    </tr>
  </thead>
  <tbody>
    <tr data-ng-repeat="user in User.users | orderBy:User.predicate:User.reverse | filter:searchUser">
      <td data-ng-repeat="(key,value) in user">{{ value }}</td>
    </tr>
  </tbody>
</table>
```



## 2- Criar mais 1 Controller para Teachers com seu form para adição, listagem (defina um Array inicial) com a ordenação do exercício anterior, filtro filter e também use o seu filtro criado na segunda aula.

```js
function ProfessorController() {
  var vm = this;
  vm.titulo = "Be MEAN - Professores";
  vm.professores = [
  {name: 'Jean Carlo Nascimento', age: 30, id: 1}
  , {name: 'Amanda Vilela', age:23, id: 2}
  , {name: 'Itacir Ferreira Pompeu', age: 30, id: 3}
  ];

  vm.add = add;
  function add(professor) {
    vm.professores.push(professor);
  }

  vm.ordenar = ordenar;
  function ordenar(campo) {
    vm.predicate = campo;
    vm.reverse = !vm.reverse;
  }

}
```

```html
<table>
  <thead>
    <tr>
      <th data-ng-repeat="(key, value) in Professor.professores[0]"><a href="" data-ng-click="Professor.ordenar(key)">{{ key}}</a></th>
    </tr>
  </thead>
  <tbody>
    <tr data-ng-repeat="professor in Professor.professores | orderBy:Professor.predicate:Professor.reverse | filter:searchProfessor">
      <td data-ng-repeat="(key , value) in professor">{{value}}</td>
    </tr>
  </tbody>
</table>
```

[Arquivo](index.html) `index.html` exemplo funcional.
