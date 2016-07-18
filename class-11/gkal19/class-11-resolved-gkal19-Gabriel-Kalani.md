# AngularJS - Aula 11 - Exercício

**User:** [gkal19](https://github.com/gkal19)

**Autor:** Gabriel Kalani

**Data** 1467915571779

### 1 - Adicionar ordenação no ng-options. 
```html
<form>
    <select ng-model="User.listar" ng-options="user.name for user in User.users">
    <option value="">Usuários</option>
    </select>
<p>
    Model: {{ User.listar }}
</p>
```

> Creio eu, que seja isso!

### 2 - Criar lógica para desabilitar a linha do usuário quando ele está sendo editado.
```html
<tr data-ng-disabled="User.editing" class="item" data-ng-repeat="user in User.users | filter:searchUser | orderBy:User.predicate:User.reverse ">
          <td>
            <input type="checkbox" id="user-{{$index}}" ng-model="user.selected" />
            <label for="user-{{$index}}"></label>
          </td>
          <td ng-class="{strike: deleted, bold: important, 'has-error': error}" >{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.type }}</td>
          <td>{{ user.active }}</td>
          <td>
            <button data-ng-disabled="User.editing" data-ng-click="User.edit(user, $index)" class="btn blue waves-effect waves-light col s12" type="submit" name="action">Editar</button>
          </td>
        </tr>
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-11/gkal19/index.html)
