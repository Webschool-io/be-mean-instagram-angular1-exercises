# AngularJS 1.5.x - Aula 06 - Exercício  
**user:** [hc3](https://github.com/hc3)  
**autor:** Eliel das Virgens


## 
```html
vm.removeWithSplice = removeWithSplice;
function removeWithSplice(users) {
  users.forEach(function(element,index) {
    if(users[index].selecionado) {
      users.splice(users.indexOf(element),1);
      }
    }
  })
```