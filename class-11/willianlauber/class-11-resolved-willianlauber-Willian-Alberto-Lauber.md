# AngularJS 1.5.x - Aula 11 - Exercício  
**user:** [willianlauber](https://github.com/willianlauber)  
**autor:** Willian Alberto Lauber  
**data:**


## Adicionar ordenação no `ng-options`.

```html
<h1 data-ng-style="Teach.atum">{{Teach.titulo}}</h1>
<form  class="pure-form pureform-aligned">
    <select  data-ng-model="professor.selecionado" data-ng-options="professor.disciplina as professor.nome for professor in Teach.professores | orderBy:'nome'">
        <option value="">select a teacher</option>
    </select>
</form>
```

## Criar lógica para desabilitar a linha do usuário quando ele está sendo editado.


```html
<input type="checkbox" id="professor-{{$index}}" ng-class="class" data-ng-disabled="!Teach.editing" ng-model="professor.selecionado" name="name" value=""/>
...
<button data-ng-hide="!Teach.editing" data-ng-click="Teach.edit(professor, $index)" class="btn blue waves-effect waves-light col s12"  data-ng-model="disable" type="submit" name="action">
    Edit
</button>
```


[Arquivo HTML](index.html)
