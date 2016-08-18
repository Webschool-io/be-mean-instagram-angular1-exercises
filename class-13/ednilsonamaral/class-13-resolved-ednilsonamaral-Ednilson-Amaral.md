# AngularJS 1.5.x - Aula 13 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468899499662


## Criar um `input` do tipo `date`, sua validação e mensagem de validação.

```html
<div>
    <input type="date" name="date" data-ng-model="User.form.date" placeholder="date" data-ng-pattern="User.dateError">

    <p>
        User.userForm.date.$error: {{ User.userForm.date.$error }}
    </p>

    <div daga-ng-messages="User.userForm.date.$error">
        <p data-ng-message="pattern">A data nao esta no padrao, fdp!</p>
    </div>
</div>
```

```js
vm.dateError = /(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}/;
```


## Criar um `input` do tipo `number`, sua validação e mensagem de validação.

```html
<div>
    <input type="number" name="num" data-ng-model="User.form.num" placeholder="num" data-ng-pattern="User.numError">

    <p>
        User.userForm.num.$error: {{ User.userForm.num.$error }}
    </p>

    <div daga-ng-messages="User.userForm.num.$error">
        <p data-ng-message="pattern">O num nao esta no padrao, fdp!</p>
    </div>
</div>
```

```js
vm.numError = /[-+]?[0-9]*[.,]?[0-9]+/;
```


## Criar um `input` do tipo `password`, sua validação e mensagem de validação.

```html
<div>
    <input type="password" name="pwd" data-ng-model="User.form.pwd" placeholder="pwd" data-ng-pattern="User.pwdError">

    <p>
        User.userForm.pwd.$error: {{ User.userForm.pwd.$error }}
    </p>

    <div daga-ng-messages="User.userForm.pwd.$error">
        <p data-ng-message="pattern">Sua senha nao esta no padrao, fdp! Tem que ter no minimo 8 caracteres!!!</p>
    </div>
</div>
```

```js
vm.pwdError = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
```


## Passe todas as mensagens para `ng-messages`.


* [Arquivo HTML](exercicio.html)
* [Arquivo styles.css](styles.css)
* [Arquivo app.js](app.js)
