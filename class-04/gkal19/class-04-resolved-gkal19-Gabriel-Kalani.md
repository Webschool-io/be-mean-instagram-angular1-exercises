# AngularJS - Aula 04 - Exercício  
**user:** [gkal19](https://github.com/gkal19)  
**autor:** Gabriel Kalani

**Data:** 1463610515

## Adicionar mais 1 campo em todos os controllers e utilizar ele em orderBy

Em `UserController` foi adicionado o campo `Username`.

Em `CursoController` foi adicionado o campo `Nota`.

Em `ProfessorController` foi adicionado o campo `Palestrante`.

## Utilizar esse valor adicional no ng-init para cada ng-repeat da view

```html
<span data-ng-init="predicate = 'name'; reverse=false "></span> UserController
<span data-ng-init="predicate = 'nota'; reverse=false "></span> CursoController
<span data-ng-init="predicate = 'name'; reverse=false "></span> ProfessorController

```

## Criar um campo de filtro para cada ng-repeat

```html
<label>Busca: <input placeholder="Faça uma busca de um usuário" ng-model="searchUser"></label>
<tr data-ng-repeat="user in User.users | orderBy:predicate:reverse | filter:searchUser">
```

```html
 <label>Busca: <input placeholder="Faça uma busca de um curso" ng-model="searchCurso"></label>
<tr data-ng-repeat="curso in Curso.cursos | orderBy:predicate:reverse | filter:searchCurso">
```

```html
<label>Busca: <input placeholder="Faça uma busca de um professor" ng-model="searchProfessor"></label>
<tr data-ng-repeat="professor in Professor.professores | orderBy:predicate:reverse | filter:searchProfessor">
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-04/gkal19/index.html)