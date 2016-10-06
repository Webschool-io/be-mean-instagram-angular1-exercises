# AngularJS - Aula 10 - Exercício

**User:** [willianlauber](https://github.com/willianlauber)

**Autor:** Willian Lauber

**Data** 1475782828

### 1 - Criar uma funcionalidade para estilizar a linha da tabela quando o usuário for selecionado, via checkbox.
```html
<tr data-ng-class="{bold: Teach.preto, red: professor.selecionado, class : professor.selecionado}" class="item" data-ng-repeat="professor in Teach.professores | orderBy:Teach.predicate:Teach.reverse | filter: frase2" ng-model="(Teach.preto = !Teach.preto)">
```

```css
.red{
  color: white;
  font-weight: bold;
  background-color: white;
}
.class {
font-size:1.2em;
text-shadow: 0 2 1 blue;
transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
}
```



### 2 - Criar mais 2 classes condicionais quando o elemento é selecionado.

```html
<tr data-ng-class="{bold: Teach.preto, red: professor.selecionado, class : professor.selecionado}" class="item" data-ng-repeat="professor in Teach.professores | orderBy:Teach.predicate:Teach.reverse | filter: frase2" ng-model="(Teach.preto = !Teach.preto)">
```

```CSS
.red{
  color: white;
  font-weight: bold;
  background-color: white;
}
.class {
font-size:1.2em;
text-shadow: 0 2 1 blue;
transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
}
```

### 3 - Zebrar a lista utilizando um teste ternário.


```html
<tr data-ng-class="{bold: Teach.preto, red: professor.selecionado, class : professor.selecionado}" class="item" data-ng-repeat="professor in Teach.professores | orderBy:Teach.predicate:Teach.reverse | filter: frase2" ng-model="(Teach.preto = !Teach.preto)">
```

### 4 - Utilize o `ng-if` para estilizar, na listagem dos usuários quando um elemento está sendo editado.
```html
<th data-ng-class="{textblue : !Teach.Save_Oculto"}>
    <input type="checkbox" id="professor-{{$index}}" ng-class="class" ng-model="professor.selecionado" name="name" value=""/>
```

[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-10/willianlauber/index.html)
