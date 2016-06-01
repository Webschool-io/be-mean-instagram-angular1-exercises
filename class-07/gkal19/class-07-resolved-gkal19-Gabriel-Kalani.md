# AngularJS - Aula 07 - Exercício  
**user:** [gkal19](https://github.com/gkal19)  
**autor:** Gabriel Kalani

**Data** 1464784280

## Fazer a função de `save` no Controller de professores e utilizar `forEach` em vez de `map`.
```js
vm.saveWithForEach = saveWithForEach;
function saveWithForEach(professor) {
  vm.professores.forEach(function alterar(value,index) {
    if(professor.index === index) {
      vm.professores.splice(professor.index,1,professor);
    }
  });
}
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-07/gkal19/index.html)