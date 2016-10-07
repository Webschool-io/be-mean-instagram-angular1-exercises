# AngularJS - Aula 03 - Exercício  
**user:** [willianlauber](https://github.com/willianlauber)  
**autor:** Willian Lauber
**data:** 1475258784


##1 Criar 1 controller de professores, igual aos outros, seguindo nosso último padrão.

##2 Utilizar um filtro, criado na aula passada, em algum dos seus valores.

```html
<!DOCTYPE html>
<html data-ng-app="meuapp">
    <head >
        <meta charset="utf-8">
        <title>aula3 - controllers</title>
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
        <style>
            body {
                background-color: #2f2f2f;
                color: white;
            }

        </style>
    </head>
    <body data-ng-controller="Controllerx as Teach">
        <input data-ng-model="frase" type="text" placeholder="Insira uma frase"></input>
        {{frase | filtro}}
        <br>
        <ul>
            <li data-ng-repeat="professor in Teach.professores">
                {{professor.nome | uppercase}}--->{{professor.disciplina | filtro | uppercase}}
            </li>
        </ul>
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
            }).controller("Controllerx", controllerx);
            function controllerx() {
                var vm = this;
                vm.titulo = "BIG teachers";
                vm.professores = [
                    {
                        nome: "Christiano Cavalcante",
                        disciplina: "Direitos, Portuges, Matematica, Ingles"
                    }, {
                        nome: "Renato Aquino",
                        disciplina: "Portugues"
                    }, {
                        nome: "Rodrigo Silva",
                        disciplina: "Arqueologia"
                    }, {
                        nome: "Olavo de Carvalho",
                        disciplina: "Filosofia"
                    }, {
                        nome: "Marcio Barbosa",
                        disciplina: "Matematica"
                    }, {
                        nome: "Régis Cortez",
                        disciplina: "Matematica, Fisica"
                    }, {
                        nome: "Suissa",
                        disciplina: "BeMean"
                    }
                ];
            };
        </script>
    </body>
</html>
