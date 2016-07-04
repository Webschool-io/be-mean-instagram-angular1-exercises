# AngularJS 1 - Aula 07 - Exercício

Nome: Amanda Vilela

Github: amandavilela

Data: 04/07/2016 - 17:32

## Fazer a função de save no Controller de professores e utilizar forEach em vez de map.

```
function save(professor) {
  vm.professores.forEach(function update(value, index) {
    if(professor.index === index) {
      vm.professores.splice(professor.index, 1, professor);
    }
  });
}
```
