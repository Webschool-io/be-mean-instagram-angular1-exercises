# AngularJS 1.5.x - Aula 04 - Exercício  
**user:** [hc3](https://github.com/hc3)  
**autor:** Eliel das Virgens
**date:** 13/05/2016

## Adicionar masi 1 campo em todos os controllers e utilizar ele em orderBy
- campos adicionados foram 
- User - nivel_acesso
- Curso - qnt_aulas
- Professor - idade 


## Utilizar esse valor adicional no ng-init para cada ng-repeat da view

```html
<span data-ng-init="predicate= 'nivel_acesso'; reverse= false;"></span>
<span data-ng-init="predicate= 'qnt_aulas'"></span>
<span data-ng-init="predicate= 'idade'"></span>
```

## Criar um campo de filtro para cada ng-repeat,
```html
<label>Busca:<input data-ng-model="searchUser"></label>
<tr data-ng-repeat="user in User.users | orderBy:'predicate' | filter:searchUser">
<label>Busca:<input data-ng-model="searchCurso"></label>
<tr data-ng-repeat="curso in Curso.cursos | orderBy:'predicate' | filter:searchCurso">
<label>Busca:<input data-ng-model="searchProfessor"></label>
<tr data-ng-repeat="professor in Professor.professores | orderBy:'predicate' | filter:searchProfessor">
```