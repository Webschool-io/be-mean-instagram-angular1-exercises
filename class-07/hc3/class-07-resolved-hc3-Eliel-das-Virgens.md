# AngularJS 1.5.x - Aula 06 - Exercício  
**user:** [hc3](https://github.com/hc3)  
**autor:** Eliel das Virgens

## Fazer a função de save no Controller de professores e utilizar forEach em vez de map.
```html
vm.saveWithForEach = saveWithForEach;
function saveWithForEach(professor) {
  vm.professores.forEach(function alterar(value,index) {
    if(professor.index === index) {
      vm.professores.splice(professor.index,1,professor);
    }
  });
}
```