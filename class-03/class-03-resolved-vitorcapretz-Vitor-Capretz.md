# Angular - Aula 03 - Exercício
**user:** [vitorcapretz](https://github.com/vitorcapretz)

**autor:** Vitor Capretz

**date:** 1466468367830

## 1. Criar 1 `Controller` de Professores, igual aos outros seguindo nosso último padrão.

```html
<!doctype html>
<html lang="en" data-ng-app="Capretz">
    <head>
        <meta charset="UTF-8">
        <title>Be MEAN</title>
    </head>
    <body data-ng-controller="TeacherController as Teacher">
        <h1>{{ Teacher.titulo }}</h1>
        <ul>
            <li data-ng-repeat="teacher in Teacher.teachers">
                Nome: {{ teacher.name }} - Idade: {{ teacher.age }}
            </li>
        </ul>
        
        <script src="angular.min.js"></script>
        <script>
            function TeacherController(){
                const vm = this;
                
                vm.titulo = "Teacher Controller";
                vm.teachers = [
                    {name: 'suissa', age: 30},
                    {name: 'joao', age: 25},
                    {name: 'paulo', age: 24},
                    {name: 'maria', age: 23},
                    {name: 'rebeca', age: 22}
                ];
            }
                        
            angular.module("Capretz", [])
                .controller('TeacherController', TeacherController);
                
        </script>
    </body>
</html>
```

## 2. Utilizar seu filtro criado aula na passada em algum dos seus valores.

```html
<!doctype html>
<html lang="en" data-ng-app="Capretz">
    <head>
        <meta charset="UTF-8">
        <title>Be MEAN</title>
    </head>
    <body data-ng-controller="TeacherController as Teacher">
        <h1>{{ Teacher.titulo }}</h1>
        <ul>
            <li data-ng-repeat="teacher in Teacher.teachers">
                Nome: {{ teacher.name | capitalize }} - Idade: {{ teacher.age }}
            </li>
        </ul>
        
        <script src="angular.min.js"></script>
        <script>
            function TeacherController(){
                const vm = this;
                
                vm.titulo = "Teacher Controller";
                vm.teachers = [
                    {name: 'suissa', age: 30},
                    {name: 'joao', age: 25},
                    {name: 'paulo', age: 24},
                    {name: 'maria', age: 23},
                    {name: 'rebeca', age: 22}
                ];
            }
                        
            angular.module("Capretz", [])
                .controller('TeacherController', TeacherController)
                .filter('capitalize', function(){
                    return function(text){
                        return (!!text) ? text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() : '';
                    };
                });
                
        </script>
    </body>
</html>
```
