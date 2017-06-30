# AngularJS - Aula 03 - Exercício  
**user:** [nicors](https://github.com/nicors)  
**autor:** Nicolas Serrato

**Data:** 1498823328353

## 1-  Criar 1 controller de professores, igual aos outros , seguindo nosso último padrão


```js
.controller('ProfessorController', ProfessorController);
function ProfessorController() {
    var vm = this;
    vm.tirulo = "Be MEAN - Professores";
    vm.professores = [
    {name: 'Jean Carlo Nascimento', age: 30}
    , {name: 'Amanda Vilela', age:23}
    , {name: 'Itacir Ferreira Pompeu', age: 30}
    ];
}
```

## 2- Utilizar seu filtro criado na aula passada em algum dos seus valores.

[Arquivo](index.html) `index.html` exemplo funcional.
