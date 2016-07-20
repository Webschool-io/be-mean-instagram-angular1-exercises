# AngularJS - Aula 03 - Exercício
**user:** [joseasousa](https://github.com/joseasousa/)  
**autor:** Jose Alves De Sousa Neto

## 1. Criar 1 Controller de Professores, igual aos outros, seguindo nosso último padrão.
## - Utilizar seu filtro criado na aula passada em algum dos seus valores.

```html

<!DOCTYPE html>
<html lang="ptBR" data-ng-app="BeMean">

    <head>
        <meta charset="utf-8">
        <title>Aula 3</title>
    </head>

    <body data-ng-controller="UserController as User">
        <div>
            <h1>{{User.titulo}}</h1>
        </div>

        <ul>
            <li data-ng-repeat="user in User.users">
                {{user.name}}--{{user.email}}
            </li>
        </ul>

        <div data-ng-controller="CursoController as Curso">
            <h1>{{Curso.titulo}}</h1>
            <ul>
                <li data-ng-repeat="curso in Curso.cursos">
                    {{curso.name}}-{{curso.teacher}}
                </li>
            </ul>

        </div>

        <div data-ng-controller="ProfessorController as Pf">
            <h1>{{Pf.titulo}}</h1>

            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Email</td>
                        <td>Descricao</td>
                    </tr>
                </thead>
                <tbody>
                    <tr data-ng-repeat="professor in Pf.professors">
                        <td>{{professor.name}}</td>
                        <td>{{professor.email}}</td>
                        <td>{{professor.descr | truncate}}</td>
                    </tbody>
                </table>

            </div>
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
                }).controller('UserController', UserController).controller('CursoController', CursoController).controller('ProfessorController', ProfessorController);

                function ProfessorController() {
                    var vm = this;
                    vm.titulo = "Professores"
                    vm.professors = [
                        {
                            "name": "Lois Ferguson",
                            "email": "lferguson0@yahoo.com",
                            "descr": "Meconium staining"
                        }, {
                            "name": "William Smith",
                            "email": "wsmith1@eventbrite.com",
                            "descr": "Chronic or unspecified gastrojejunal ulcer, with hemorrhage, with obstruction"
                        }, {
                            "name": "Joe Gordon",
                            "email": "jgordon2@princeton.edu",
                            "descr": "Infection with microorganisms resistant to cephalosporins and other B-lactam antibiotics"
                        }, {
                            "name": "Peter Williams",
                            "email": "pwilliams3@discovery.com",
                            "descr": "Open fracture of first cervical vertebra"
                        }, {
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
                            "name": "Kimberly Gonzales",
                            "email": "kgonzales0@unicef.org"
                        }, {
                            "name": "Jesse Morales",
                            "email": "jmorales1@usgs.gov"
                        }, {
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
                            "name": "Be Mean",
                            "teacher": "Suissa"
                        }, {
                            "name": "Learn ",
                            "teacher": "Ivan"
                        }, {
                            "name": "Android",
                            "teacher": "eu"
                        }
                    ]
                }
            </script>
        </body>

    </html>
 

```

