# AngularJS - Aula 10 - Exercício

**User:** [AlexMCoder](https://github.com/AlexMCoder)

**Autor:** Alex Morgado Pereira

### 1 - Criar uma funcionalidade para estilizar a linha da tabela quando o usuário for selecionado, via checkbox.
```html
<tr data-ng-class="{bold: !user.selecionado, selectedCheck: user.selecionado}" class="item" data-ng-repeat="user in User.users | filter:searchUser | orderBy:User.predicate:User.reverse ">
```

```css
.selectedCheck {
    background: rgba(162, 161, 161, 0.21);
    border: 1px solid #aaa;
    color: blue;
    font-weight: bold;
}
```



### 2 - Criar mais 2 classes condicionais quando o elemento é selecionado.

```html
<td data-ng-class="{nameSelect: user.selecionado}">{{ user.name }}</td>
<td data-ng-class="{emailSelect: user.selecionado}">{{ user.email }}</td>
```

```CSS
.nameSelect, .emailSelect {
    text-transform: uppercase;
    -webkit-transition: 2s;
    transition: 2s;
}
```

### 3 - Zebrar a lista utilizando um teste ternário.

```CSS
.trStart tr:nth-child(even){
    background: #000;
    color: #FFF;
}

.trEnd tr:nth-child(odd){
    background: #FFF;
    color: #000;
}
```

```html
<table data-ng-class="{trStart: user.selecionado, trEnd: !user.selecionado}">
```

### 4 - Utilize o `ng-if` para estilizar, na listagem dos usuários quando um elemento está sendo editado.
```html
<button data-ng-if="!User.editing" data-ng-click="User.add(User.form, User.users)" class="btn btn-large green waves-effect waves-light col s12" type="submit" name="action">Add</button>

<button data-ng-if="User.editing" data-ng-hide="!User.editing" data-ng-click="User.save(User.form)" class="btn btn-large blue waves-effect waves-light col s12 animate" type="submit" name="action">Save</button>
```
