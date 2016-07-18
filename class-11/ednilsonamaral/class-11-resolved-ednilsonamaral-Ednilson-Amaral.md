# AngularJS 1.5.x - Aula 11 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468814650398


## Adicionar ordenação no `ng-options`.

```html
<select data-ng-model="User.selected" data-ng-options="user.email as user.name for user in User.users | orderBy:'name'">
    <option value="">select a user</option>
</select>
```

## Criar lógica para desabilitar a linha do usuário quando ele está sendo editado.

Adicionei a diretiva no `tr`, no `checkbox` e no *button* de *edit*.

```html
<tr data-ng-disabled="User.editing" data-ng-class="{bold: !user.selecionado, strike: user.selecionado}" class="item" data-ng-repeat="user in User.users | filter:searchUser | orderBy:User.predicate:User.reverse ">
    <td>
        <input type="checkbox" id="user-{{$index}}" data-ng-model="user.selecionado" data-ng-disabled="User.editing" />
        <label for="user-{{$index}}"></label>
    </td>

    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>

    <td>
        <button data-ng-disabled="User.editing" data-ng-click="User.edit(user, $index)" class="btn blue waves-effect waves-light col s12" type="submit" name="action">Edit</button>
    </td>
</tr>
```


[Arquivo HTML](exercicio.html)
