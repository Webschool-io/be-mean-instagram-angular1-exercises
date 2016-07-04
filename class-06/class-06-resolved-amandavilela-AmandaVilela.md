# AngularJS 1 - Aula 06 - Exercício

Nome: Amanda Vilela

Github: amandavilela

Data: 04/07/2016 - 16:53

## Criar função de delete utilizando splice em vez de filter

```
vm.removeWithSplice = removeWithSplice;

function removeWithSplice(users) {
  users.forEach(function(el, index) {
    if(users[index].selecionado) {
      users.splice(index, 1);
    }
  });
  vm.users = users;
}
```
