# AngularJS - Aula 04 - Exercício  
**user:** [hudsonbrendon](https://github.com/hudsonbrendon)  
**autor:** Hudson Brendon

**Data:** 1463610515

## Adicionar mais 1 campo em todos os controllers e utilizar ele em orderBy

Em `UserController` foi adicionado o campo `age`.

Em `CursoController` foi adicionado o campo `age`.


## Utilizar esse valor adicional no ng-init para cada ng-repeat da view

```html
<span data-ng-init="predicate = 'age'; reverse=false "></span> UserController
<span data-ng-init="predicate = 'age'; reverse=false "></span> CursoController


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

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-04/hudsonbrendon/index.html)
