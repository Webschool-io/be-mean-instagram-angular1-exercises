# AngularJS 1.5.x - Aula 14 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468941609004


## Criar em cima desse exemplo mais 3 exemplos com outros eventos não mostrados na aula e outros valores.

Utilizei os seguintes exemplos:  

* `getterSetter`;  
* `allowInvalid`;  
* `timezone`.


```html
<label>
    <input type="text" data-ng-model="User.form.name" placeholder="Name" data-ng-model-options="{ getterSetter: true }">
</label>

<br>

<label>
    <input type="email" data-ng-model="User.form.email" placeholder="Email" data-ng-model-options="{ allowInvalid: false }">
</label>

<label>
    <input type="TIME" data-ng-model="User.form.date" data-ng-model-options="{ timezone: 'UTC' }">
</label>
```


* [Arquivo HTML](exercicio.html)
* [Arquivo styles.css](styles.css)
* [Arquivo app.js](app.js)
