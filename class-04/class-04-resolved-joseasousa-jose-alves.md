# AngularJS - Aula 04 - Exercício
**user:** [joseasousa](https://github.com/joseasousa/)  
**autor:** Jose Alves De Sousa Neto

## 1 - Adicionar mais 1 campo em todos os Controllers e utlizar ele em orderBy.

## 2 - Utilizar esse valor adicional no ng-init para cada ng-repeat da View.

## 3 - Criar um filtro para cada ng-repeat.

```html
<!DOCTYPE html>
<html lang="ptBR" data-ng-app="BeMean">

<head>
    <meta charset="utf-8">
    <title>Aula 4</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
        crossorigin="anonymous">
</head>

<body>

    <section class="container ">
        <div data-ng-controller="UserController as User" class="row">

            <div class="text-center">
                <h1>{{User.titulo}}</h1>
            </div>

            <label>Busca: <input type="text" data-ng-model="User.serchUser"></label>
            <span data-ng-init="predicate = 'id'; reverse = true; "></span>
            <table class="table">
                <thead>
                    <tr>
                        <th data-ng-repeat="(key,value) in User.users[0]">
                            {{key}}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr data-ng-repeat="user in User.users | orderBy:predicate:reverse | filter:{'id' : User.serchUser}">
                        <td data-ng-repeat="(key,value) in user">
                            {{value}}</td>
                    </tr>
                </tbody>
            </table>

        </div>


        <div data-ng-controller="ProfessorController as Prof" class="row">

            <div class="text-center">
                <h1>{{Prof.titulo}}</h1>
            </div>

            <label>Busca: <input type="text" data-ng-model="Prof.serch"></label>
            <span data-ng-init="predicate = 'id'; reverse = false; "></span>
            <table class="table">
                <thead>
                    <tr>
                        <th data-ng-repeat="(key,value) in Prof.professors[0]">
                            {{key}}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr data-ng-repeat="prof in Prof.professors | orderBy:predicate:reverse | filter:{'id' : Prof.serch}">
                        <td data-ng-repeat="(key,value) in prof">
                            {{value}}</td>
                    </tr>
                </tbody>
            </table>

        </div>

        <div data-ng-controller="CursoController as Cursos" class="row">

            <div class="text-center">
                <h1>{{Cursos.titulo}}</h1>
            </div>

            <label>Busca: <input type="text" data-ng-model="Curso.serch" class="input"</label>

            <span data-ng-init="predicate = 'id'; reverse = false; "></span>
            <table class="table">
                <thead>
                    <tr>
                        <th data-ng-repeat="(key,value) in Cursos.cursos[0]">
                            {{key}}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr data-ng-repeat="curso in Cursos.cursos | orderBy:predicate:reverse | filter:{'id' : Curso.serch}">
                        <td data-ng-repeat="(key,value) in curso">
                            {{value}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.js" charset="utf-8"></script>
    <script>
                angular.module('BeMean', []).filter('truncate', function() {
                    return function(text, size, end) {
                        if (text) {
                            if (isNaN(size)) {
                                size = 10;
                            }
                            if (end === undefined) {
                                end = '...';
                            }
                            if (text.length < size) {
                                return text;
                            } else {
                                return String(text).substring(0, size) + end;
                            }
                        }
                    }
                })
                .controller('UserController', UserController)
                .controller('CursoController', CursoController)
                .controller('ProfessorController', ProfessorController);

                function ProfessorController() {
                    var vm = this;
                    vm.titulo = "Professores"
                    vm.professors = [
                        {
                            "id":1,
                            "name": "Lois Ferguson",
                            "email": "lferguson0@yahoo.com",
                            "descr": "Meconium staining"
                        }, {
                            "id":2,
                            "name": "William Smith",
                            "email": "wsmith1@eventbrite.com",
                            "descr": "Chronic or unspecified gastrojejunal ulcer, with hemorrhage, with obstruction"
                        }, {
                            "id":3,
                            "name": "Joe Gordon",
                            "email": "jgordon2@princeton.edu",
                            "descr": "Infection with microorganisms resistant to cephalosporins and other B-lactam antibiotics"
                        }, {
                            "id":4,
                            "name": "Peter Williams",
                            "email": "pwilliams3@discovery.com",
                            "descr": "Open fracture of first cervical vertebra"
                        }, {
                            "id":5,
                            "name": "Nancy Bishop",
                            "email": "nbishop4@multiply.com",
                            "descr": "Malignant neoplasm of anterior two-thirds of tongue, part unspecified"
                        }
                    ];
                }

                function UserController() {
                    var vm = this;
                    vm.titulo = "Usuarios";
                    vm.users = [
                        {
                            "id":1,
                            "name": "Kimberly Gonzales",
                            "email": "kgonzales0@unicef.org"
                        }, {
                            "id":2,
                            "name": "Jesse Morales",
                            "email": "jmorales1@usgs.gov"
                        }, {
                            "id":3,
                            "name": "Russell Mills",
                            "email": "rmills2@list-manage.com"
                        }
                    ]
                }

                function CursoController() {
                    var vm = this;
                    vm.titulo = "Cursos";
                    vm.cursos = [
                        {
                            "id":1,
                            "name": "Be Mean",
                            "teacher": "Suissa"
                        }, {
                            "id":2,
                            "name": "Learn ",
                            "teacher": "Ivan"
                        }, {
                            "id":3,
                            "name": "Android",
                            "teacher": "eu"
                        }
                    ]
                }
            </script>
</body>

</html>

```