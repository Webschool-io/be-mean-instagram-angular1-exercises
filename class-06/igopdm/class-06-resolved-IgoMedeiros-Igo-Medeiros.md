# AngularJS 1.5.x - Aula 06 - Exercício  
**user:** [igomedeiros](https://github.com/igomedeiros)  
**autor:** Igo Medeiros


## Criar função de delete utilizando splice em vez de filter
```html
vm.remove = remove;
function remove(users) {
	for(user in users){
	  if (users[user].selecionado) {
	    users.splice(user, 1);
	  }
	}
}
```