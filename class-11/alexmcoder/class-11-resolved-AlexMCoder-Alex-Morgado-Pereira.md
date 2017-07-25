# AngularJS - Aula 10 - Exercício

**user:** [AlexMCoder](https://github.com/AlexMCoder)

**autor:** Alex Morgado Pereira

## Adicionar ordenação no `ng-options`.

```html
<select data-ng-model="User.selected" data-ng-options="user.email as user.name for user in User.users">
    <option value="">Selecionar</option>
</select>
```

## Criar lógica para desabilitar a linha do usuário quando ele está sendo editado.

```html
<tbody>
    <tr data-ng-disabled="User.editing" data-ng-class="{bold: !user.selecionado, selectedCheck: user.selecionado}" class="item" data-ng-repeat="user in User.users | filter:searchUser | orderBy:User.predicate:User.reverse ">
        <td>
            <input data-ng-disabled="User.editing" type="checkbox" id="user-{{$index}}" ng-model="user.selecionado" />
            <label for="user-{{$index}}"></label>
        </td>

        <td data-ng-class="{nameSelect: user.selecionado}">{{ user.name }}</td>
        <td data-ng-class="{emailSelect: user.selecionado}">{{ user.email }}</td>

        <td>
            <button data-ng-disabled="User.editing" data-ng-click="User.edit(user, $index)" class="btn blue waves-effect waves-light col s12" type="submit" name="action">Edit</button>
        </td>
    </tr>
</tbody>
```

