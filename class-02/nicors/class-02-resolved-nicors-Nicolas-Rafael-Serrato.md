# AngularJS - Aula 02 - Exercício 1, 2 e 3
**Autor:** Nicolas Serrato
**User:** [nicors](https://github.com/nicors)
**Data:** 1498663550986

**Obs**: Arquivo *index.html* possui exemplo em funcionamento

## 1 - Crie 1 exemplo para pelo menos 5 filtros padrões do Angular

```html
<label for="nome-completo">Nome completo</label>
<input type="text" name="nome-completo" data-ng-model="nomeCompleto">
<label for="nome-usuario">Nome de usuário</label>
<input type="text" name="nome-usuario" data-ng-model="nomeUsuario">
<label for="conta">Conta pra transferencia</label>
<input type="text" name="conta" data-ng-model="conta">
<label for="valor">Valor</label>
<input type="number" name="valor" data-ng-model="valor">
Nome completo: {{nomeCompleto | uppercase}} 
Nome de usuario: {{nomeUsuario | lowercase}}
Conta: {{conta | limitTo:6}}
Valor transferência: {{valor | number:2 | currency:"R$"}}
```

## 2 - Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menor que 18 anos.

```js
angular.module('class02', [])
.filter("idade", function() {
  return function (age) {
    if (age) {
      if (age >= 18) return age + " - Usuário maior de idade, transferência aprovada";
      if (age < 18 ) return age + " - Usuário menor de idade, transferência pendente";
      else return "idade inválida";
  }
}
})
```

## 3 - Crie 1 filtro que receba um horário, entre 0:00 e 23:59, e diga:
## Bom dia. // até 12:00
## Boa tarde. // até 18:00
## Boa noite.

```js
.filter("saudacao", function() {
  return function(text)
   {
    var hora = text.getHours();
    if(hora >= 0 && hora <= 12)
    return "Bom dia.";
    else if(hora >= 12 && hora <= 18)
    return "Boa tarde.";
    else if(hora >= 18 && hora <= 23)
    return "Boa noite.";
}
})
```
