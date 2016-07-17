# AngularJS 1.5.x - Aula 03 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468720020703


## Fazer a função do `save` no *Controller* de **Professores** e utilizar o `forEach` em vez de `map`.

```html
<!DOCTYPE html>

<html lang="en" data-ng-app="aula07">

<head>
    <meta charset="UTF-8">
    <title>Be MEAN</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
    <style>
        .wrapper {
            max-width: 600px;
            margin: 0 auto;
        }
    </style>
</head>

<body data-ng-controller="TeachersController as Teacher">
    <section class="row wrapper">
        <h1>{{ Teacher.titulo }}</h1>

        <p class="col s12">
            <label>
                <input type="text" data-ng-model="Teacher.form.name" placeholder="Name">
            </label>

            <br>

            <label>
                <input type="email" data-ng-model="Teacher.form.linguagem" placeholder="Linguagem">
            </label>
        </p>

        <button data-ng-click="Teacher.add(Teacher.form)" class="btn btn-large green waves-effect waves-light col s6" type="submit" name="action">Add</button>
        <button data-ng-click="Teacher.save(Teacher.form)" class="btn btn-large blue waves-effect waves-light col s6" type="submit" name="action">Save</button>

        <span data-ng-init="predicate = 'name'; reverse = true; "></span>

        <table>
            <thead>
                <tr>
                    <th colspan="{{ Teacher.keysLength + 1 }}">
                        <label>
                            <input ng-model="searchTeacher" placeholder="Search">
                        </label>
                    </th>
                </tr>

                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Linguagem</th>
                </tr>
            </thead>

            <tbody>
                <tr data-ng-repeat="teacher in Teacher.teachers | filter:searchTeacher ">
                    <td>
                        <input type="checkbox" id="teacher-{{$index}}" ng-model="teacher.selecionado" />
                        <label for="teacher-{{$index}}"></label>
                    </td>

                    <td>{{ teacher.name }}</td>
                    <td>{{ teacher.linguagem }}</td>
                    <td>
                        <button data-ng-click="Teacher.edit(teacher, $index)" class="btn blue waves-effect waves-light col s12" type="submit" name="action">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <button data-ng-click="Teacher.remove(Teacher.form.teachers)" class="btn btn-large red waves-effect waves-light col s12" type="submit" name="action">Remove</button>
    </section>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <script>
    angular.module('aula07', [])
        .controller('TeachersController', TeachersController);

    function TeachersController() {
        var vm = this;
        vm.form = {};
        vm.titulo = "Be MEAN - Lista de Professores";
        vm.teachers = [
            {name: 'Suissa', age: '30', sex:'m', linguagem: 'javascript'},
            {name: 'Giovana', age: '29', sex:'f', linguagem: 'angular'},
            {name: 'Bruna', age: '55', sex:'f', linguagem: 'html'},
            {name: 'José Santos', age: '17', sex:'m', linguagem: 'css'}
        ];

        function getKeyLength() {
            return Object.keys(angular.copy(vm.teachers[0])).length;
        }
        vm.keysLength = getKeyLength();

        vm.add = add;
        function add(teacher) {
            console.log('vm.teachers antes', vm.teachers)
            vm.teachers.push(angular.copy(teacher));
            console.log('vm.teachers depois', vm.teachers)
        }

        vm.remove = remove;
        function remove(teachers) {
            vm.teachers = teachers.filter(function(el){ return !el.selecionado });
        }

        vm.edit = edit;
        function edit(teacher, index) {
            vm.form = angular.copy(teacher);
            vm.form.index = index;
        }

        vm.save = save;
        function save(teacher) {
            vm.teachers.forEach(function update(element, index) {
                if(teacher.index === index) {
                    vm.teachers.splice(teacher.index, 1, teacher);
                }
            });
        }
    }
    </script>
</body>
</html>
```
