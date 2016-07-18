# AngularJS 1.5.x - Aula 12 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:**


## Não deixar que seja adicionado um usuário que seja inválido.

```js
vm.add = add;
function add(user) {
    if (vm.users.name.$valid) {
        vm.users.push(angular.copy(user));
        vm.form = {};
    } else {
        console.log("FUUUUDEU, DEU MERDA!!!");
    }
}
```


* [Arquivo HTML](exercicio.html)
* [Arquivo styles.css](styles.css)
* [Arquivo app.js](app.js)
