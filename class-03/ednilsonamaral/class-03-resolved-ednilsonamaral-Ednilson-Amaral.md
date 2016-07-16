# AngularJS 1.5.x - Aula 03 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468084585886


## Criar 1 *Controller* de Professores, igual aos outros, seguindo nosso último padrão.  

## Utilizar seu filtro criado na aula passada em algum dos seus valores.

```html  
<!DOCTYPE html>

<html lang="pt-br" data-ng-app="aula03">

<head>
    <meta charset="UTF-8">
    <title>Be MEAN - AngularJS - Aula 03 - Exercícios</title>

    <style>
        body{
            background-color: rgba(249, 269, 168, .5);
            font-size: 20px;
            color: #696969;
        }
    </style>
</head>

<body>
    <div data-ng-controller="TeachersController as Teacher">
        <h1>{{ Teacher.titulo }}</h1>

        <ul>
            <li data-ng-repeat="teacher in Teacher.teachers">
                {{ teacher.name }} - {{ teacher.age | limitTo:3 }} anos <em>({{ teacher.age | checkAge }})</em> - {{ teacher.sex | uppercase }}
            </li>
        </ul>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <script>
        angular.module('aula03', [])
            .controller('TeachersController', TeachersController);
            .filter('checkAge', function() {
                return function(num){
                    if(num<18) return "Menor de idade!";
                    else return "Maior de idade, tá fudido!";
                }
            });

        function TeachersController(){
            var vm = this;
            vm.titulo = "Be MEAN - Lista de Professores";
            vm.teachers = [
                {name: 'Suissa', age: '30', sex:'m'},
                {name: 'Giovana', age: '29', sex:'f'},
                {name: 'Bruna', age: '2855', sex:'f'},
                {name: 'José Santos', age: '17', sex:'m'}
            ];
        }
    </script>
</body>

</html>
```
