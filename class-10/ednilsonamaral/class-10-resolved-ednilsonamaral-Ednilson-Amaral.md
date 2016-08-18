# AngularJS 1.5.x - Aula 09 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468801243285


## Criar uma funcionalidade para estilizar a linha da tabela quando o usuário for selecionado, via *checkbox*.

```html
<tr data-ng-class="{bold: !user.selecionado, trSelecionado: user.selecionado}" class="item" data-ng-repeat="user in User.users | filter:searchUser | orderBy:User.predicate:User.reverse ">
```

```css
.trSelecionado{
    background: #808080;
    border: 10px dashed #4CAF50;
    color: #fff;
}
```

## Criar mais 2 classes condicionais quando o elemento é selecionado.

```html
<td data-ng-class="{nameSelecionado: user.selecionado}">{{ user.name }}</td>
<td data-ng-class="{emailSelecionado: user.selecionado}">{{ user.email }}</td>
```

```css
.nameSelecionado{
    text-transform: uppercase;
    color: #3d3d3d;
    font-weight: bolder;
}

.emailSelecionado{
    text-decoration: underline;
    color: blue;
    cursor: pointer;
}
```

## Zebrar a lista utilizando um teste ternário no ng-class.

```html
<table data-ng-class="{trEven: user.selecionado, trOdd: !user.selecionado}">
```

```css
.trEven tr:nth-child(even){
    background: #000;
    color: #FFF;
}

.trOdd tr:nth-child(odd){
    background: #FFF;
    color: #000;
}
```

## Utilize o ng-if para estilizar, na listagem dos usuários, quando um elemento está sendo editado.

Quando o **SAVE** ficar visivel, o **ADD** vai ficar oculto.


```html
<button data-ng-if="!User.editing" data-ng-click="User.add(User.form, User.users)" class="btn btn-large green waves-effect waves-light col s12" type="submit" name="action">Add</button>

<button data-ng-if="User.editing" data-ng-click="User.save(User.form)" class="btn btn-large blue waves-effect waves-light col s12 animate" type="submit" name="action">Save</button>
```


[Arquivo HTML](exercicio.html)
