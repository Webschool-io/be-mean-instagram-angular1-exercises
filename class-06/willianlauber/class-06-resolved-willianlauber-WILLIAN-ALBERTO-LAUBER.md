# Angular - Aula 06 - Tema de Casa  
**user:** [willianlauber](https://github.com/willianlauber)  
**autor:** Willian Lauber
**date:** 1475556248

## Criar a função de delete utilizando splice em vez de filter.

```js
vm.remove = remove;
function remove(professores) {
    professores.forEach(function(element, index) {
        if (professores[index].selecionado)
            professores.splice(professores.indexOf(element), 1);
        }
    )
}
```

index.html
