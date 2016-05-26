# AngularJS - Aula 06 - Exercício  
**user:** [gkal19](https://github.com/gkal19)  
**autor:** Gabriel Kalani

**Data:** 1464303587538

## Criar função de delete utilizando splice em vez de filter
```js
vm.removeWithSplice = removeWithSplice;
function removeWithSplice(users) {
  users.forEach(function(element,index) {
    if(users[index].selecionado) {
      users.splice(users.indexOf(element),1);
      }
    }
  })
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-06/gkal19/index.html)
