# AngularJS 1.5.x - Aula 03 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468445968850


## Adicionar mais 1 campo em todos os *Controllers* e utilizar ele em *orderBy*.
## Utilizar esse valor adicional no `ng-init` para cada `ng-repeat` da *View*.
## Criar um campo de filtro para cada `ng-repeat`.

```html
<!DOCTYPE html>
<html lang="pt-br" data-ng-app="aula04">
<head>
    <meta charset="utf-8">
    <title>Be MEAN - AngularJS - Aula 04 - Exercícios</title>

    <style>
        body{
            background-color: rgba(249, 269, 168, .5);
            font-size: 20px;
            color: #696969;
        }
    </style>
</head>

<body data-ng-controller="TeachersController as Teacher">
    <!-- CONTROLLER DE TEACHERS -->
    <span data-ng-init="teacherOrder = 'linguagem'; teacherReverse = false;"></span>

    <h1>{{ Teacher.titulo }}</h1>

    <label>
        Busca por professor:
        <input ng-model="searchTeacher">
    </label>

    <table>
        <thead>
            <tr>
                <th data-ng-repeat="(key, value) in Teacher.teachers[0]">{{ key }}</th>
            </tr>
        </thead>

        <tbody>
            <tr data-ng-repeat="teacher in Teacher.teachers | orderBy:teacherOrder:teacherReverse | filter:searchTeacher">
                <td data-ng-repeat="(key, value) in teacher">{{ value }}</td>
            </tr>
        </tbody>
    </table>

    <!-- CONTROLLER DE USERS -->
    <div data-ng-controller="UserController as User">
        <span data-ng-init="userOrder = 'nickname'; userReverse = true;"></span>

        <h1>{{ User.titulo }}</h1>

        <label>
            Busca por user:
            <input ng-model="searchUser">
        </label>

        <table>
            <thead>
                <tr>
                    <th data-ng-repeat="(key, value) in User.users[0]">{{ key }}</th>
                </tr>
            </thead>

            <tbody>
                <tr data-ng-repeat="user in User.users | orderBy:userOrder:userReverse | filter:searchUser">
                    <td data-ng-repeat="(key, value) in user">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- CONTROLLER DE CURSOS -->
    <div data-ng-controller="CursoController as Curso">
        <span data-ng-init="cursoOrder = 'cargaHoraria'; cursoReverse = true;"></span>

        <h1>{{ Curso.titulo }}</h1>

        <label>
            Busca por user:
            <input ng-model="searchCurso">
        </label>

        <table>
            <thead>
                <tr>
                    <th data-ng-repeat="(key, value) in Curso.cursos[0]">{{ key }}</th>
                </tr>
            </thead>

            <tbody>
                <tr data-ng-repeat="curso in Curso.cursos | orderBy:cursoOrder:cursoReverse | filter:searchCurso">
                    <td data-ng-repeat="(key, value) in curso">{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <script>
        var app = angular.module('aula04', []);

        // Controllers
        app.controller('UserController', UserController);
        app.controller('TeachersController', TeachersController);
        app.controller('CursoController', CursoController);

        // Filter
        app.filter('checkAge', function() {
            return function(num){
                if(num<18) return "Menor de idade!";
                else return "Maior de idade, tá fudido!";
            }
        });

        // Objects
        function UserController() {
            var vm = this;
            vm.titulo = "Be MEAN - Usuários";
            vm.users = [
                {name: 'Suissa', email: 'suissera@manoveio.com', nickname:'suissera'},
                {name: 'João', email: 'joao@macioesedoso.com', nickname:'pe de feijao'},
                {name: 'Franciele', email: 'fran@quimica.com', nickname:'breaking bad'}
            ];
        }

        function CursoController() {
            var vm = this;
            vm.titulo = "Be MEAN - Cursos";
            vm.cursos = [
                {name: 'Be MEAN', teacher: 'Suissa', cargaHoraria: '20'},
                {name: 'Learning Machine', teacher: 'Ivan Gustavo', cargaHoraria: '30'},
                {name: 'Laravel', teacher: 'Michael Douglas', cargaHoraria: '40'}
            ];
        }

        function TeachersController(){
            var vm = this;
            vm.titulo = "Be MEAN - Lista de Professores";
            vm.teachers = [
                {name: 'Suissa', age: '30', sex:'m', linguagem: 'javascript'},
                {name: 'Giovana', age: '29', sex:'f', linguagem: 'angular'},
                {name: 'Bruna', age: '2855', sex:'f', linguagem: 'html'},
                {name: 'José Santos', age: '17', sex:'m', linguagem: 'css'}
            ];
        }
    </script>
</body>
</html>
```
