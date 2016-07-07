# AngularJS - Aula 05 - Exercício

Nome: Ingrid Rauany  
Github: [ingridrauany](https://github.com/ingridrauany)  
Data: 1467074453391

## 1- Criar uma função para ordenar uma tabela a partir de uma coluna clicando em sua tr>td ordenando pelo campo da coluna.

## 2- Criar mais 1 Controller para Teachers com seu form para adição, listagem (defina um Array inicial) com a ordenação do exercício anterior, filtro filter e também use o seu filtro criado na segunda aula.

**Código Completo**

```html
<!doctype html>
<html data-ng-app="BeMEAN"> 
    <head>
        <meta charset="utf-8">
        <title>Be MEAN</title>
        <style>
            li {
                list-style: none;
            }
            input {
                margin-bottom: 5px;
            }
            td {
                padding: 8px;
            }
            body {
                display: flex;
                justify-content: space-around;
            }
            div {
                display: flex;
                align-items: center;
                flex-direction: column;
            }
        </style>
    </head>
    <body > 
       <div data-ng-controller="UserController as User">
           <h2>{{ User.titulo }}</h2>
            <label>Busca: <input ng-model="searchUser"></label>
            <span data-ng-init="predicate = 'Nome'; reverse = false;"></span>
            <p>
                <label>Nome: 
                    <input type="text" data-ng-model="form.User.Nome">
                </label>
                <br>
                <label>Email: 
                    <input type="email" data-ng-model="form.User.Email">
                </label>
            </p> 
            <button data-ng-click="User.addUser(form.User)">Add User</button>
            <br>
            <table>
                <thred>
                    <th data-ng-repeat="(key, value) in User.users[0]"><a href="" data-ng-click="User.ordenar('key')">{{ key }}</a></th>
                </thred>
                <tbody>
                    <tr data-ng-repeat="user in User.users | orderBy:User.predicate:User.reverse | filter:searchUser">
                        <td data-ng-repeat="(key, value) in user"> {{ value }}</td>
                    </tr>
                </tbody>
            </table>
       </div>
        
        
        <div data-ng-controller="CursoController as Curso">
            <h2>{{ Curso.titulo }}</h2>
            <span data-ng-init="predicate = 'Nome'; reverse = false;"></span>
            <table>
                <thred>
                        <th data-ng-repeat="(key, value) in Curso.cursos[0]">{{ key }}</th>
                </thred>
                <tbody>
                    <tr data-ng-repeat="curso in Curso.cursos | orderBy:predicate">
                        <td data-ng-repeat="(key, value) in curso">{{ value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div data-ng-controller="ProfessorController as Professor">
            <h2>{{ Professor.titulo }}</h2>
            <span data-ng-init="predicate = 'Nome'; reverse = false;"></span>
            <label>Busca: <input ng-model="searchProfessor"></label>
            <p>
                <label>Nome: 
                    <input type="text" data-ng-model="form.Professor.Nome">
                </label>
                <br>
                <label>Curso: 
                    <input type="text" data-ng-model="form.Professor.Curso">
                </label>
                <br>
                <label>Salario: 
                    <input type="text" data-ng-model="form.Professor.Salario">
                </label>
                <br>
                <label>Idade: 
                    <input type="text" data-ng-model="form.Professor.Idade">
                </label>
            </p> 
            <button data-ng-click="Professor.addProfessor(form.Professor)">Add Professor</button>
            <br>
            <table>
                <thred>
                        <th data-ng-repeat="(key, value) in Professor.professores[0]">{{ key }}</th>
                        <th>Maioridade</th>
                </thred>
                <tbody>
                    <tr data-ng-repeat="professor in Professor.professores | orderBy:predicate | filter:searchProfessor">
                        <td data-ng-repeat="(key, value) in professor">{{ value }}</td>
                        <td>{{ professor.Idade | maioridade }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
        <script>
            angular.module('BeMEAN', [])
            
                .filter('maioridade', function(){
                    return function(text) {
                        if(text >= 18) return 'O professor é maior de idade';
                        if(text < 18) return 'O professor é menor de idade';
                        else return 'Insira uma idade inválida';
                    };
                })
            
                .controller('UserController', UserController)
                .controller('CursoController', CursoController)
                .controller('ProfessorController', ProfessorController);

                
                function UserController() {
                    var vm = this;
                    vm.titulo = "Be MEAN - Usuarios";
                    vm.users = [
                        {Nome: 'Suissa', Email: 'suissera@email.com'},
                        {Nome: 'João', Email: 'joao@email.com'},
                        {Nome: 'Ingrid', Email: 'ingrid@email.com'}
                    ];
                    
                    vm.addUser = addUser;
 				    function addUser(user) {
 					  vm.users.push(angular.copy(user));
 				    }
                    
                   vm.ordenar = ordenar;
 				   function ordenar(coluna) {
                        console.log(coluna);
                        vm.predicate = coluna;
                        vm.reverse = !vm.reverse;
 				   }
                    
                }
            
                function CursoController() {
                    var vm = this;
                    vm.titulo = "Be MEAN - Cursos";
                    vm.cursos = [
                        {Nome: 'Suissa', Cargo: 'Professor'},
                        {Nome: 'João', Cargo: 'Aluno'}
                    ]
                }
            
            
                function ProfessorController() {
                    var vm = this;
                    vm.titulo = "Be MEAN - Professores";
                    vm.professores = [
                        {Nome: 'Suissa', Curso: 'Programação', Salario: 1000, Idade: 25},
                        {Nome: 'João', Curso: 'Direito', Salario: 3000, Idade: 30},
                        {Nome: 'Maria', Curso: 'Matemática', Salario: 2000, Idade: 16}
                    ]
                    
                    vm.addProfessor = addProfessor;
 				    function addProfessor(professor) {
 					  vm.professores.push(angular.copy(professor));
 				    }
                }
            
        </script>
    </body>
</html>
```