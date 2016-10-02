# AngularJS 1.5.x - Aula 04 - Exercício  
**user:** [willianlauber](https://github.com/willianlauber)  
**autor:** Willian Alberto Lauber
**date:**

## Adicionar mais 1 campo em todos os Controllers e utilizar ele em orderBy.

```html
<!DOCTYPE html>
<html data-ng-app="meuapp">
    <head >
        <meta charset="utf-8">
        <title>aula4</title>
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
        <style>
            body {
                background-color: #2f2f2f;
                color: aqua;
            }

        </style>
    </head>
    <body>
      Busca:</br>
      <div data-ng-controller="Controllerx as Teach">
        <input data-ng-model="frase2" type="text" placeholder"busque algo"></input>
        {{frase2 | filtro}}
        <br data-ng-init= predicate : 'carga_horaria'>
                  <!--{{professor.nome | uppercase}}{{professor.disciplina | filtro | uppercase}}-->
                      <table>
                        <thead>
                          <tr>
                            <th data-ng-repeat="(key, value) in Teach.professores[0]">
                                  {{key}}
                            </th>
                          </tr>
                          <tbody>
                            <tr data-ng-repeat="professor in Teach.professores | orderBy:'carga_horaria' | filter: frase2">
                              <th data-ng-repeat="(key, value) in professor">
                                    {{value }}
                              </th>
                            </tr>
                            </tbody>
                        </thead>
                      </table>
                    </div>

                    <br>Busca:</br>
                    <div data-ng-controller="BeControlled as Usuarios">
                      <input data-ng-model="frase" type="text" placeholder"busque algo"></input>
                      {{frase | filtro}}
                      <br data-ng-init= predicate : 'ativo'>
                      <table>
                        <thead>
                          <tr>
                            <th data-ng-repeat="(key, value) in Usuarios.users[0]">
                                  {{key}}
                            </th>
                          </tr>
                          <tbody>
                            <tr data-ng-repeat="user in Usuarios.users | orderBy:'ativo':true | filter:frase">
                              <th data-ng-repeat="(key, value) in user">
                                    {{value }}
                              </th>
                            </tr>
                          </tbody>
                      </table>
                    </div>
        <script>
            angular.module("meuapp", []).filter("filtro", function() {
                return function(text) {
                    if (text) {
                        if (text.length <= 10) {
                            return text;
                        }
                        return String(text).substring(0, 12) + "...";
                    }
                }
            })
            .controller("Controllerx", controllerx)
            .controller("BeControlled", BeControlled);
            function BeControlled(){
              this.titulo = "Be Mean - usuarios";
              this.users = [
                {name : "João", email : "joao@apostolo.com", ativo: "não"},
                {name : "Judas", email : "judas@apostolo.com", ativo: "não"},
                {name : "Jeremias", email : "jeremias@profeta.com",ativo : "não"},
                {name : "Be Mean", email : "suissa@manoveio.com", ativo : "sim"},
              ];
            };
            function controllerx() {
                var vm = this;
                vm.titulo = "BIG teachers";
                vm.professores = [
                    {
                        nome: "Christiano Cavalcante",
                        disciplina: "Direitos, Portuges, Matematica, Ingles",
                        carga_horaria: "2500h"
                    }, {
                        nome: "Renato Aquino",
                        disciplina: "Portugues",
                        carga_horaria: "200h"
                    }, {
                        nome: "Rodrigo Silva",
                        disciplina: "Arqueologia",
                        carga_horaria: "100h"
                    }, {
                        nome: "Olavo de Carvalho",
                        disciplina: "Filosofia",
                        carga_horaria: "450h"
                    }, {
                        nome: "Marcio Barbosa",
                        disciplina: "Matematica",
                        carga_horaria: "100h"
                    }, {
                        nome: "Régis Cortez",
                        disciplina: "Matematica, Fisica",
                        carga_horaria: "300h"
                    }, {
                        nome: "Suissa",
                        disciplina: "BeMean",
                        carga_horaria: "240h"
                    }
                ];
            };
        </script>
    </body>
</html>

```

## Utilizar esse valor adicional no ng-init para cada ng-repeat da View.

```html
<!DOCTYPE html>
<html data-ng-app="meuapp">
    <head >
        <meta charset="utf-8">
        <title>aula4</title>
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
        <style>
            body {
                background-color: #2f2f2f;
                color: aqua;
            }
        </style>
    </head>
    <body>
      Busca:</br>
      <div data-ng-controller="Controllerx as Teach">
        <input data-ng-model="frase2" type="text" placeholder"busque algo"></input>
        {{frase2 | filtro}}
        <br data-ng-init= predicate : 'carga_horaria'>
                  <!--{{professor.nome | uppercase}}{{professor.disciplina | filtro | uppercase}}-->
                      <table>
                        <thead>
                          <tr>
                            <th data-ng-repeat="(key, value) in Teach.professores[0]">
                                  {{key}}
                            </th>
                          </tr>
                          <tbody>
                            <tr data-ng-repeat="professor in Teach.professores | orderBy:predicate | filter: frase2">
                              <th data-ng-repeat="(key, value) in professor">
                                    {{value }}
                              </th>
                            </tr>
                            </tbody>
                        </thead>
                      </table>
                    </div>

                    <br>Busca:</br>
                    <div data-ng-controller="BeControlled as Usuarios">
                      <input data-ng-model="frase" type="text" placeholder"busque algo"></input>
                      {{frase | filtro}}
                      <br data-ng-init= predicate : 'ativo'>
                      <table>
                        <thead>
                          <tr>
                            <th data-ng-repeat="(key, value) in Usuarios.users[0]">
                                  {{key}}
                            </th>
                          </tr>
                          <tbody>
                            <tr data-ng-repeat="user in Usuarios.users | orderBy:predicate:true | filter:frase">
                              <th data-ng-repeat="(key, value) in user">
                                    {{value }}
                              </th>
                            </tr>
                          </tbody>
                      </table>
                    </div>
        <script>
            angular.module("meuapp", []).filter("filtro", function() {
                return function(text) {
                    if (text) {
                        if (text.length <= 10) {
                            return text;
                        }
                        return String(text).substring(0, 12) + "...";
                    }
                }
            })
            .controller("Controllerx", controllerx)
            .controller("BeControlled", BeControlled);
            function BeControlled(){
              this.titulo = "Be Mean - usuarios";
              this.users = [
                {name : "João", email : "joao@apostolo.com", ativo: "não"},
                {name : "Judas", email : "judas@apostolo.com", ativo: "não"},
                {name : "Jeremias", email : "jeremias@profeta.com",ativo : "não"},
                {name : "Be Mean", email : "suissa@manoveio.com", ativo : "sim"},
              ];
            };
            function controllerx() {
                var vm = this;
                vm.titulo = "BIG teachers";
                vm.professores = [
                    {
                        nome: "Christiano Cavalcante",
                        disciplina: "Direitos, Portuges, Matematica, Ingles",
                        carga_horaria: "2500h"
                    }, {
                        nome: "Renato Aquino",
                        disciplina: "Portugues",
                        carga_horaria: "200h"
                    }, {
                        nome: "Rodrigo Silva",
                        disciplina: "Arqueologia",
                        carga_horaria: "100h"
                    }, {
                        nome: "Olavo de Carvalho",
                        disciplina: "Filosofia",
                        carga_horaria: "450h"
                    }, {
                        nome: "Marcio Barbosa",
                        disciplina: "Matematica",
                        carga_horaria: "100h"
                    }, {
                        nome: "Régis Cortez",
                        disciplina: "Matematica, Fisica",
                        carga_horaria: "300h"
                    }, {
                        nome: "Suissa",
                        disciplina: "BeMean",
                        carga_horaria: "240h"
                    }
                ];
            };
        </script>
    </body>
</html>

```

## Criar um campo de filtro para cada ng-repeat,
```html
<!DOCTYPE html><!-- W AL L-->
<html data-ng-app="meuapp">
    <head >
        <meta charset="utf-8">
        <title>aula4</title>
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
        <style>
            body {
                background-color: #2f2f2f;
                color: aqua;
            }
        </style>
    </head>
    <body>
      Busca:</br>
      <div data-ng-controller="Controllerx as Teach">
        <input data-ng-model="frase2" type="text" placeholder"busque algo"></input>
        {{frase2 | filtro}}
        <br data-ng-init= predicate : 'carga_horaria'>
                  <!--{{professor.nome | uppercase}}{{professor.disciplina | filtro | uppercase}}-->
                      <table>
                        <thead>
                          <tr>
                            <th data-ng-repeat="(key, value) in Teach.professores[0]">
                                  {{key}}
                            </th>
                          </tr>
                          <tbody>
                            <tr data-ng-repeat="professor in Teach.professores | orderBy:predicate | filter: frase2">
                              <th data-ng-repeat="(key, value) in professor">
                                    {{value }}
                              </th>
                            </tr>
                            </tbody>
                        </thead>
                      </table>
                    </div>

                    <br>Busca:</br>
                    <div data-ng-controller="BeControlled as Usuarios">
                      <input data-ng-model="frase" type="text" placeholder"busque algo"></input>
                      {{frase | filtro}}
                      <br data-ng-init= predicate : 'ativo'>
                      <table>
                        <thead>
                          <tr>
                            <th data-ng-repeat="(key, value) in Usuarios.users[0]">
                                  {{key}}
                            </th>
                          </tr>
                          <tbody>
                            <tr data-ng-repeat="user in Usuarios.users | orderBy:predicate:true | filter:frase">
                              <th data-ng-repeat="(key, value) in user">
                                    {{value }}
                              </th>
                            </tr>
                          </tbody>
                      </table>
                    </div>
        <script>
            angular.module("meuapp", []).filter("filtro", function() {
                return function(text) {
                    if (text) {
                        if (text.length <= 10) {
                            return text;
                        }
                        return String(text).substring(0, 12) + "...";
                    }
                }
            })
            .controller("Controllerx", controllerx)
            .controller("BeControlled", BeControlled);
            function BeControlled(){
              this.titulo = "Be Mean - usuarios";
              this.users = [
                {name : "João", email : "joao@apostolo.com", ativo: "não"},
                {name : "Judas", email : "judas@apostolo.com", ativo: "não"},
                {name : "Jeremias", email : "jeremias@profeta.com",ativo : "não"},
                {name : "Be Mean", email : "suissa@manoveio.com", ativo : "sim"},
              ];
            };
            function controllerx() {
                var vm = this;
                vm.titulo = "BIG teachers";
                vm.professores = [
                    {
                        nome: "Christiano Cavalcante",
                        disciplina: "Direitos, Portuges, Matematica, Ingles",
                        carga_horaria: "2500h"
                    }, {
                        nome: "Renato Aquino",
                        disciplina: "Portugues",
                        carga_horaria: "200h"
                    }, {
                        nome: "Rodrigo Silva",
                        disciplina: "Arqueologia",
                        carga_horaria: "100h"
                    }, {
                        nome: "Olavo de Carvalho",
                        disciplina: "Filosofia",
                        carga_horaria: "450h"
                    }, {
                        nome: "Marcio Barbosa",
                        disciplina: "Matematica",
                        carga_horaria: "100h"
                    }, {
                        nome: "Régis Cortez",
                        disciplina: "Matematica, Fisica",
                        carga_horaria: "300h"
                    }, {
                        nome: "Suissa",
                        disciplina: "BeMean",
                        carga_horaria: "240h"
                    }
                ];
            };
        </script>
    </body>
</html>
```
