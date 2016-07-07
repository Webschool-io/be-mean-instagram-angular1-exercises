# AngularJS - Aula 10 - Exercício

**User:** [gkal19](https://github.com/gkal19)

**Autor:** Gabriel Kalani

**Data** 1467898660701

### 1 - Criar uma funcionalidade para estilizar a linha da tabela quando o usuário for selecionado, via checkbox.
```html
<!-- Arquivo HTML -->
<td>
    <input type="checkbox" id="user-{{$index}}" ng-model="user.selected" />
    <label for="user-{{$index}}"></label>
</td>
```
<br>
```css
/* Arquivo CSS */
.selected {
    font-weight: lighter;
    text-decoration: line-through;
}
```

### 2 - Criar mais 2 classes condicionais quando o elemento é selecionado.
```html
<label>
    <input type="checkbox" id="deleted" ng-model="deleted">
       <label for="deleted">Condicional: Strike</label>
    </label><br>
    <label>
       <input type="checkbox" id="important" ng-model="important">
       <label for="important">Condicional: Bold</label>
    </label><br>
    <label>
       <input type="checkbox" id="error" ng-model="error">
       <label for="error">Condicional: Error</label>
    </label>
```

### 3 - Zebrar a lista utilizando um teste ternário.
> Explicando: Primeiramente utilizando a `Table` apenas acrescentei um `class="tabela"` a ela e acrescentei também o seguinte CSS...
```CSS
.tabela tbody tr:nth-child(even) {
    background-color: #CCC;
}
.tabela tbody tr:nth-child(odd) {
    background-color: #FFF;
}
```
> Selecionei os elementos pares e ímpares assim precisando só acrescentar a classe `tabela` no `<table>`.

### 4 - Utilize o `ng-if` para estilizar, na listagem dos usuários quando um elemento está sendo editado.
```html
<button data-ng-if="User.editing" data-ng-click="User.save(User.form)" class="btn btn-large animate blue waves-effect waves-light col s12" type="submit" name="action">Salvar</button>
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-10/gkal19/index.html)