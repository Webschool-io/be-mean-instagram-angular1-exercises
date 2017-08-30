# AngularJS - Aula 11 - Exercício
**user:** [MagnumCortez](https://github.com/MagnumCortez)  

**autor:** Magnum cortez

## Adicionar ordenação no *ng-options*.

```html
<select ng-options="user.email as user.name for user in User.users | orderBy:'name':true" data-ng-model="User.selected">
    <option value="">Escolha um usuário</option>
</select>
```

## Criar lógica para desabilitar a linha do usuário quando ele está sendo editado.

```html
<tr data-ng-disabled="User.userEditing[$index]" data-ng-class="{bold: !user.selecionado, strike: user.selecionado}" class="item" data-ng-repeat="user in User.users">
    <td>
        <input data-ng-disabled="User.userEditing[$index]" type="checkbox" id="user-{{$index}}" ng-model="user.selecionado"/>
        <label for="user-{{$index}}"></label>
    </td>
    <td">{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.type }}</td>
    <td>{{ user.active }}</td>
    <td>
        <button data-ng-disabled="User.userEditing[$index]" data-ng-click="User.edit(user, $index)" class="btn btn-large blue waves-effect waves-light col s12" type="submit" data-ng-class="User.editing ? 'btnEdit' : ''">Edit</button>
    </td>
</tr>
```

```Controller
vm.userEditing = [];

vm.edit = edit;
function edit(user, index) {
    vm.userEditing = [];
    vm.userEditing[index] = true;
    vm.form = angular.copy(user);
    vm.form.index = index;
    vm.editing = true;
    console.log('vm.userEditing',vm.userEditing)
}

vm.save = save;
function save(user) {
    vm.userEditing = [];
    var users = vm.users.map(function(el, i) {
        if (i === user.index) {
            delete user.index;
            return user;
        }
        return el;
    });
    vm.users = angular.copy(users);
    vm.editing = false;
    vm.form = {};
}
```