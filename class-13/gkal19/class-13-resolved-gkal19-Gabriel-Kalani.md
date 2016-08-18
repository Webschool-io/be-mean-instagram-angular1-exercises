# AngularJS - Aula 13 - Exercício

**User:** [gkal19](https://github.com/gkal19)

**Autor:** Gabriel Kalani

**Data** 1468548263964

### 1 - Criar um input do tipo date, sua validação e mensagem desta validação. 
```html
      <!-- DATA --><div>
        <input type="text" name="data" data-ng-model="User.form.data" placeholder="YYYY/MM/DD" required data-fv-date="true" data-fv-date-format="YYYY/MM/DD">
        <p>
          O erro é: {{ User.userForm.data.$error }}
        </p>
        <div data-ng-messages="User.userForm.data.$error">
          <p data-ng-message="required">Data é obrigatória.</p>
          <p data-ng-message="pattern">O valor não é uma data válida</p>
        </div>
      </div>
```

### 2 - Criar um input do tipo number, sua validação e mensagem desta validação. 
```html
<!-- IDADE --><div>
        <input type="number" name="idade" data-ng-model="User.form.idade" placeholder="Idade" required ng-minlength=3>
        <p>
          O erro é: {{ User.userForm.idade.$error }}
        </p>
        <div data-ng-messages="User.userForm.idade.$error">
          <p data-ng-message="required">Idade é obrigatória.</p>
          <p data-ng-message="pattern">Não é permitido mais que 2 dígitos.</p>
        </div>
      </div>
```      

### 3 - Criar um input do tipo password, sua validação e mensagem desta validação. 
```html
<!-- SENHA --><fieldset>
      <input name="password" type="password" placeholder="Senha">
    <p data-ng-message="required">Senha é obrigatória.</p>
      <ul class="helper-text">
          <li class="length">Deve conter pelo menos 8 caracteres.</li>
          <li class="lowercase">Deve conter uma letra minúscula.</li>
          <li class="uppercase">Deve conter uma letra maiúscula.</li>
          <li class="special">Deve conter um número ou caractere especial.</li>
      </ul>
</fieldset>
```

### 4 - Passe todas as mensagens para ng-meassages.

> Já foi adicionado nos exercícios acima!

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-13/gkal19/index.html)