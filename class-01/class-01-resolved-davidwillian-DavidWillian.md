# AngularJS 1 - Aula 01 - Exercício

Nome: David Willian

Github: [davidwillianx](https://github.com/davidwillianx)

Data: 24/07/2016

## 1 - Explique qual é a definição de MVC, MVVM e MVP

### MVC (Model/View/Controller)
CONTROLLER: Responsável por receber requisicõe do usuário.
MODEL: Responsável pelo négócio, onde nossa aplicação valida regras especificas do sistema, antes de um
retorno para a requisição (VIEW).
VIEW: Camada de apresentação, contém os dados que foram requistados no controller e validados no model processados
em forma de apresentação (Página).



### MVVM (Model/View/ViewModel)
No modelo MVVM a camada de apresentação não é renderizada de maneira estática, isso se deve a parte dos componentes que
serão apresentados na view estarem ligados ao modelo, sendo assim, qualquer alteração no modelo é imediatamente refletida na View.
O MODELO vai ser responsável pela lógica de negócio (semelhante ao MVC), seguido pela VIEW que define uma estrutura de apresentação,
 consumindo informações filtradas pelo MODEL. O diferencial VIEWMODEL tem como responsabilidade ser um intermédio entre as duas camadas citadas anteriormente, tendo
como principal função é manter a view atualizada por qualquer alteração/interação feita que realize modificações no MODEL.


![mvvm lifecycle](https://i-msdn.sec.s-msft.com/dynimg/IC564167.png)


## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```
 BEMEAN EXERCISE ONE

<!DOCTYPE html>
<html data-ng-app="exerciseone">
  <head>
    <meta charset="utf-8">
    <title>Exercise One - BEMEAN (Its about time 4 me)</title>
  </head>
  <body>
      <form >
        <input type="text" name="name" data-ng-model="name">
      </form>
       Welcome Sr(a) {{ name }}
  </body>
  <script type="text/javascript">
  (function(){
    angular.module('exerciseone',[])
  })();

  </script>
</html>
```
