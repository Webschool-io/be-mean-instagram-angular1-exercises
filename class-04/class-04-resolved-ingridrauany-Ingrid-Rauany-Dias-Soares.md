# AngularJS - Aula 04 - Exercício

Nome: Ingrid Rauany  
Github: [ingridrauany](https://github.com/ingridrauany)  
Data: 1464800431431

## 1- Adicionar mais 1 campo em todos os Controllers e utlizar ele em orderBy.

## 2- Utilizar esse valor adicional no ng-init para cada ng-repeat da View.

## 3- Criar um filtro para cada ng-repeat.  

**Código completo com a resposta das 3 questões.**

```html
<!doctype html>
<html data-ng-app="BeMEAN"> 
    <head>
        <meta charset="utf-8">
        <title>Be MEAN</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
        <style>
            th, tr, td {
                padding: 6px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        
       <div data-ng-controller="UserController as User" data-ng-init="predicate = 'matricula'"> 
           <h2>{{ User.titulo }}</h2>
           <label>Busca: <input ng-model="searchUser"></label>
            <table>
                <thred>
                        <th data-ng-repeat="(key, value) in User.users[0]">{{ key }}</th>
                </thred>
                <tbody>
                    <tr data-ng-repeat="user in User.users | orderBy:predicate | filter:searchUser">
                        <td data-ng-repeat="(key, value) in user"> {{ value }}</td>
                    </tr>
                </tbody>
                </thred>
            </table>
       </div>
        </br>
        <div data-ng-controller="ProfessorController as Professor" data-ng-init="predicate = 'numeroaulas'">
            <h2>{{ Professor.titulo }}</h2>
            <label>Busca: <input ng-model="searchProfessor"></label>
            
            <table >
                <thred>
                        <th data-ng-repeat="(key, value) in Professor.professores[0]">{{ key }}</th>
                </thred>
                <tbody>
                    <tr data-ng-repeat="professor in Professor.professores | orderBy:predicate | filter:searchProfessor">
                        <td data-ng-repeat="(key, value) in professor"> {{ value }}</td>
                    </tr>
                </tbody>
                </thred>
            </table>
        </div>
        </br>
        
        <div data-ng-controller="CursoController as Curso" data-ng-init="predicate = 'numeroalunos'">
            <h2>{{ Curso.titulo }}</h2>
            <label>Busca: <input ng-model="searchCurso"></label>
            
            <table >
                <thred>
                        <th data-ng-repeat="(key, value) in Curso.cursos[0]">{{ key }}</th>
                </thred>
                <tbody>
                    <tr data-ng-repeat="curso in Curso.cursos | orderBy:predicate | filter:searchCurso">
                        <td data-ng-repeat="(key, value) in curso"> {{ value }}</td>
                    </tr>
                </tbody>
                </thred>
            </table>
        </div>
        
        <script>
            angular.module('BeMEAN', [])                
                .controller('ProfessorController', ProfessorController)
                .controller('UserController', UserController)
                .controller('CursoController', CursoController);
                
                function UserController() {
                    var vm = this;
                    vm.titulo = "Usuarios";
                    vm.users = [
                        {name: 'Iara', email: 'iara@email.com', matricula: 1},
                        {name: 'João', email: 'joao@email.com', matricula: 10}, 
                        {name: 'Ingrid', email: 'ingrid@email.com', matricula: 22},
                        {name: 'André', email: 'andre@email.com', matricula: 4}
                    ];
                }
                                
                function ProfessorController() {
                    var vm = this;
                    vm.titulo = "Professores";
                    vm.professores = [
                        {name: 'Suissa', curso: 'Ciência da Computação', salario: 850, idade: 18, horarioaula: '12:50', numeroaulas: 2},
                        {name: 'João', curso: 'Sistemas de Informação', salario: 2400, idade: 16, horarioaula: '13:40', numeroaulas: 4},
                        {name: 'Ana', curso: 'Matemática', salario: 3600, idade: 18, horarioaula: '22:10', numeroaulas: 3},
                        {name: 'Igor', curso: 'Sistemas de Informação', salario: 5500, idade: 20, horarioaula: '15:50', numeroaulas: 6},
                        {name: 'Diego', curso: 'Ciência da Computação', salario: 2100, idade: 22, horarioaula: '16:00', numeroaulas: 8},
                        {name: 'Pedro', curso: 'Matemática', salario: 3000, idade: 17, horarioaula: '09:20', numeroaulas: 8}
                    ];
                }
                
                     
                function CursoController() {
                    var vm = this;
                    vm.titulo = "Cursos";
                    vm.cursos = [
                        {name: 'Ciência da Computação', numeroalunos: 50},
                        {name: 'Sistemas de Informação', numeroalunos: 70},
                        {name: 'Matemática', numeroalunos: 20},
                        {name: 'Direito', numeroalunos: 100},
                        {name: 'Engenharia de Sistemas', numeroalunos: 25}
                    ];
                }
        </script>
    </body>
</html>
```
