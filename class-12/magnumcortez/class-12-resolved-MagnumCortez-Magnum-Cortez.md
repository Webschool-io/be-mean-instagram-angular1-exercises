# AngularJS - Aula 12 - Exercício
**user:** [MagnumCortez](https://github.com/MagnumCortez)  

**autor:** Magnum cortez

## Não deixar que seja adicionado um usuário inválido.

```html
<button data-ng-disabled="User.editing || User.userForm.$invalid || User.userForm.name.$pristine || User.userForm.email.$pristine" type="submit" class="btn btn-large green waves-effect waves-light col s12">Add User</button>
```


```js
vm.submitForm = submitForm;
function submitForm(user) {
	if (user.$valid) {
		add(user);
	} else {
		console.log('Erro ao adicionar usuário');
	}
}
```
