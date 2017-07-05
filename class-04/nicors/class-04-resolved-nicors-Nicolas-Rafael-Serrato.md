# AngularJS - Aula 04 - Exercício  
**user:** [nicors](https://github.com/nicors)  
**autor:** Nicolas Serrato
**Data:** 1499255973595

## 1-  Adicionar mais 1 campo em todos os Controllers e utilizar ele em orderBy.

*Adicionado campo id aos Controllers*

```js
function UserController() {
  var vm = this;
  vm.titulo = "Be MEAN - Usuários";
  vm.users = [
  {name: 'Suissa', email: 'suissera@manoveio.com', id:1}
  , {name: 'Nicolas', email: 'nicolas.serrato@outlook.com', id: 2}
  , {name: 'Carlos', email: 'carlos.gabriel@outlook.com', id: 3}
  ];
}
function CursoController() {
  var vm = this;
  vm.titulo = "Be MEAN - Cursos";
  vm.cursos = [
  {name: 'Be MEAN', teacher: 'Suissa', id: 1}
  , {name: 'Learning Machine', teacher: 'Ivan Gustavo', id: 2}
  , {name: 'Laravel', teacher: 'Michael Douglas', id: 3}
  ];
}
function ProfessorController() {
  var vm = this;
  vm.titulo = "Be MEAN - Professores";
  vm.professores = [
  {name: 'Jean Carlo Nascimento', age: 30, id: 1}
  , {name: 'Amanda Vilela', age:23, id: 2}
  , {name: 'Itacir Ferreira Pompeu', age: 30, id: 3}
  ];
}
```

## 2- Utilizar esse valor adicional no ng-init para cada ng-repeat da View.
<span data-ng-init="predicateUser= 'id'; reverse= true;"></span>
<span data-ng-init="predicateCurso='id';"></span>
<span data-ng-init="predicateProfessor='id';"></span>

## 3- Criar um campo de filtro para cada ng-repeat.

```html

<label>Busca:<input data-ng-model="searchUser"></label>
<tr data-ng-repeat="user in User.users | orderBy:predicateUser:reverse | filter:searchUser">
  <td data-ng-repeat="(key,value) in user">{{ value }}</td>
</tr>

<label>Busca:<input data-ng-model="searchCurso"></label>
<tr data-ng-repeat="curso in Curso.cursos | orderBy:predicateCurso | filter:searchCurso">
  <td data-ng-repeat="(key, value) in curso">{{value}}</td>
</tr>

<label>Busca:<input data-ng-model="searchProfessor"></label>
<tr data-ng-repeat="professor in Professor.professores | orderBy:predicateProfessor | filter:searchProfessor">
  <td data-ng-repeat="(key, value) in professor">{{value}}</td>
</tr>
```

[Arquivo](index.html) `index.html` exemplo funcional.
