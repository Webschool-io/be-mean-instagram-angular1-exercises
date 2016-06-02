# AngularJS - Aula 07 - Exercício  
**user:** [gkal19](https://github.com/gkal19)  
**autor:** Gabriel Kalani

**Data** 1464870705

## Fazer a função de `save` no Controller de professores e utilizar `forEach` em vez de `map`.
```js
vm.save = save;
	  function save(professor) {
	    var professores = vm.professores.forEach(function(el,i) {
	      if(i === professor.index) {
	        delete professor.index;
	        return professor;
	      }
	      return el;
	    });
	    vm.professores = professores;
	  }
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-07/gkal19/index.html)
