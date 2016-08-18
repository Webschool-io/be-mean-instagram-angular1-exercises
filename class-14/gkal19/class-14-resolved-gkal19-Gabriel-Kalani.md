# AngularJS - Aula 14 - Exercício

**User:** [gkal19](https://github.com/gkal19)

**Autor:** Gabriel Kalani

**Data** 1468638632383

### 1 - Criar em cima desse exemplo mais 3 exemplos com outro eventos não mostrados na aula e outros valores.
> Exemplo 01: getterSetter

```html
<section class="row wrapper">
        <form name="searchForm">
      <div>
        <input type="text" name="name" ng-model-options="{ getterSetter: true }" data-ng-model="searchUser" placeholder="Busca">
      </div>
    </form>

    <article>
      <p>
        Busca: {{ searchUser }}
      </p>
    </article>
  </section>
```

> Exemplo 02: Time Zone GILT

```html
<section class="row wrapper">
    <div ng-controller="myController">
    <div class="container">
            <label>
                GILT: <input class="form-control" type="time" ng-model="GILTTime" ng-model-options="GILT" />
            </label>
            <pre>GILT Time Zone: {{ GILTTime }}</pre>
        </div>
        </div>
  </section>
```

```js
<script>
    var app = angular.module('BeMEAN', ['ngAnimate'])
    app.controller('myController', function ($scope, $timeout) {
        $scope.GILT = {
            timezone: 'GILT'
        };
    });
</script>
```

> Exemplo 03: Debounce
```html
  <section class="row wrapper">
    <div ng-controller="myController">
    <div class="container">
            <label>
                Nome:
                <input type="text" class="form-control" name="username" ng-model="user.name" ng-model-options="{ debounce: 1000 }" />
            </label>
            <button class="btn btn-default" ng-click="user.name=''">Limpar</button>
            <br />
            <pre>Olá, <span ng-bind="user.name"></span></pre>
        </div>
        </div>
  </section>
```

> Não sei se fiz certo, se errei posso tentar fazer denovo.
[Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-14/gkal19/index.html)