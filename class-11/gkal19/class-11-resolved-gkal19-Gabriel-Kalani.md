# AngularJS - Aula 10 - Exercício

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
```css
[disabled] {
    background-color: #ccc !important;
}
```

```js
<button data-ng-disabled="User.editing" data-ng-click="User.add(User.form)" class="btn btn-large green waves-effect waves-light col s12" type="submit" name="action">Adicionar</button>
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-11/gkal19/index.html)