# Angular - Aula 07 - Exercício  
**user:** [willianlauber](https://github.com/willianlauber)  
**autor:** WILLIAN ALBERTO LAUBER
**date** 1475613100

## Fazer a função de save no Controller de professores e utilizar forEach em vez de map.
```js
vm.saveWithForEach = saveWithForEach;
function saveWithForEach(professor) {
  vm.professores.forEach(function alterar(value,index) {
    if(professor.index === index)
      vm.professores.splice(professor.index,1,professor);
  });
}
```
