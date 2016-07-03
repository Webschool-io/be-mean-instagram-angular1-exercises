# AngularJS 1 - Aula 05 - Exercício

Nome: Amanda Vilela

Github: amandavilela

Data: 03/07/2016 - 18:42

## Criar uma função para ordenar uma tabela a partir de uma coluna clicando em sua th>td ordenando pelo campo da coluna

```
<table>
  <thead>
    <tr>
      <th data-ng-repeat="(key, value) in User.users[0]" data-ng-click="User.order(key)">{{ key }}</th>
    </tr>
  </thead>
  <tbody>
    <tr data-ng-repeat="user in User.users | orderBy:User.predicate:User.reverse | filter:searchUser">
      <td data-ng-repeat="(key, value) in user"> {{ value }}</td>
    </tr>
  </tbody>
</table>

function order(key) {
  vm.predicate = key;
  vm.reverse = !vm.reverse;
}

<table>
  <thead>
    <tr>
      <th data-ng-repeat="(key, value) in Curso.cursos[0]" data-ng-click="Curso.order(key)">{{ key }}</th>
    </tr>
  </thead>
  <tbody>
    <tr data-ng-repeat="curso in Curso.cursos | orderBy:Curso.predicate:Curso.reverse | filter:searchCurso">
      <td data-ng-repeat="(key, value) in curso"> {{ value }}</td>
    </tr>
  </tbody>
</table>

function order(key) {
  vm.predicate = key;
  vm.reverse = !vm.reverse;
}

<table>
  <thead>
    <tr>
      <th data-ng-repeat="(key, value) in Professor.professores[0]" data-ng-click="Professor.order(key)">{{ key }}</th>
    </tr>
  </thead>
  <tbody>
    <tr data-ng-repeat="professor in Professor.professores | orderBy:Professor.predicate:Professor.reverse | filter:searchProfessor">
      <td data-ng-repeat="(key, value) in professor"> {{ value }}</td>
    </tr>
  </tbody>
</table>

function order(key) {
  vm.predicate = key;
  vm.reverse = !vm.reverse;
}
```

## Criar mais 1 Controller para Teachers com seu form para adição, listagem (defina um Array inicial) com a ordenação do exercício anterior, filtro filter e também use o seu filtro criado na segunda aula.

```
<div>
  <input type="text" data-ng-model="form.prof.nome" placeholder="Nome">
  <input type="number" data-ng-model="form.prof.idade" placeholder="Idade">
  <input type="text" data-ng-model="form.prof.id" placeholder="ID">
  <button data-ng-click="Professor.addProf(form.prof)">Adicionar</button></br>
</div>

function ProfessorController() {
  var vm = this;
  vm.titulo = "Be MEAN - Listagem dos professores";
  vm.professores = [
      {name: 'Suissa', age: 28, id: 1}
    , {name: 'John Papa', age: 34, id: 2}
    , {name: 'Nicholas Zakas', age: 35, id: 3}
  ];
  vm.order = order;
  vm.addProf = addProf;

  function order(key) {
    vm.predicate = key;
    vm.reverse = !vm.reverse;
  }

  function addProf(professor) {
    vm.professores.push(angular.copy(professor));
  }
}
```
