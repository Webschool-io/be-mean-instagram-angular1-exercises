# AngularJS - Aula 10 - Exercício
**user:** [MagnumCortez](https://github.com/MagnumCortez)  

**autor:** Magnum cortez


### 1 - Criar uma funcionalidade para estilizar a linha da tabela quando o usuário for selecionado, via checkbox, com **nf-style**.
```html
<tr data-ng-style="{'background-color': User.lineStyle(user.selecionado)}" class="item" data-ng-repeat="user in User.users | orderBy:User.predicate: User.reverse | filter:searchUser">
```

```CSS
vm.lineStyle = lineStyle;
function lineStyle(selecionado) {
    return (selecionado) ? 'antiquewhite' : 'greenyellow';
}
```

### 2 - Criar mais 2 classes condicionais quando o elemento é selecionado com **ng-class**.

```html
<tr data-ng-class="{lineChecked: user.selecionado, lineUnChecked: !user.selecionado}" class="item" data-ng-repeat="user in User.users | orderBy:User.predicate: User.reverse | filter:searchUser">
```

```CSS
.lineChecked { 
    background-color: antiquewhite;
    font-weight: bold;
    text-decoration: line-through;
    color: red;
}
.lineUnChecked { 
    background-color: greenyellow;
    text-decoration: underline;
}
```

### 3 - Zebrar a lista utilizando um teste ternário no **ng-class**.

```html
<tr data-ng-class="$index % 2 == 0 ? 'grayLine' : 'whiteLine'" class="item" data-ng-repeat="user in User.users | orderBy:User.predicate: User.reverse | filter:searchUser">
```

```CSS
.grayLine {
    background-color: #EEE;
}
.whiteLine {
    background-color: #FFF;
}
```

### 4 - Utilize o **ng-if** para estilizar, na listagem dos usuários quando um elemento está sendo editado.

```html
<button data-ng-if="!User.editing" data-ng-click="User.add(User.form)" class="btn btn-large green waves-effect waves-light col s12" data-ng-hide="User.editing">Add User</button>

<button data-ng-if="User.editing" data-ng-click="User.save(User.form)" class="btn btn-large blue waves-effect waves-light col s12" data-ng-if="User.editing">Save User</button>
```