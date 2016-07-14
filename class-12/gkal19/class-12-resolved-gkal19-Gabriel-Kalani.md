# AngularJS - Aula 12 - Exercício

**User:** [gkal19](https://github.com/gkal19)

**Autor:** Gabriel Kalani

**Data** 1468538223540

### 1 - Não deixar adicionar um usuário que seja inválido. (via Controller)
```html
<form name="User.userForm" data-ng-submit="User.submitForm(User.form)">
      <div data-ng-class="{'invalid': User.form.name.$invalid && !User.form.name.$pristine, 'dirty': User.form.name.$dirty}">
        <input type="text" name="name" data-ng-model="User.form.name" placeholder="Nome" required type="text">
      </div>
      <div data-ng-class="{'invalid' : User.form.email.$invalid && !User.form.name.$pristine}">
        <input type="email" name="email" data-ng-model="User.form.email" placeholder="E-mail">
      </div>
      <button data-ng-disabled="User.editing || User.form.name.$pristine" class="btn btn-large green waves-effect waves-light col s12" type="submit" name="action">Adicionar</button>
      <button data-ng-disabled="!User.editing" data-ng-click="User.save(User.form)" class="btn btn-large animate blue waves-effect waves-light col s12" type="submit" name="action">Salvar</button>
    </form>
```

```css
.ng-valid {
    background-color: #B4E5C4;
}
.invalid {
    background-color: red;
}
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-12/gkal19/index.html)