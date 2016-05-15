**Nome: Antonio Marcos Alves de Lima**

**Github** : [antoniomalves] (https://github.com/antoniomalves)

### 1 - Criar 1 Controller de Professores, igual aos outros, seguindo nosso último padrão.

### 2 - Utilizar seu filtro criado na aula passada em algum dos seus valores.

```
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
    <head>
        <meta charset="UTF-8">
        <title>Be MEAN</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    </head>
    <body>

        <div class=".table-bordered" data-ng-controller="CursoController as Curso">
            <h3>{{Curso.titulo}}</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-ng-repeat="curso in Curso.cursos">
                        <td>{{curso.titulo}}</td>
                        <td>{{curso.teacher}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class=".table-bordered" data-ng-controller="ProfessoresController as Professor">
            <h3>{{Professor.titulo}}</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Materia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-ng-repeat="professor in Professor.professores">
                        <td>{{professor.nome}}</td>
                        <td>{{professor.idade | verificaIdade}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class=".table-bordered" data-ng-controller="UserController as User">
            <h3>{{User.titulo}}</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-ng-repeat="user in User.users">
                    <td>{{user.nome}}</td>
                    <td>{{user.email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
        <script>
            angular.module('BeMEAN', [])
                .filter('verificaIdade', function(){
                            return function(idade){
                                if(idade){
                                    console.log(idade);
                                    if(idade > 18) return "Maior de 18 anos";
                                    else return "Menor de 18 anos";
                                }
                            }
                        })
                .controller('UserController', UserController)
                .controller('CursoController', CursoController)
                .controller('ProfessoresController', ProfessoresController);


                function UserController(){
                    var vm = this;
                    vm.titulo= "BeMEAN - Usuarios";
                    vm.users =[
                        {nome:'Suissa', email:'suissera@manoveio.com'}
                        ,{nome:'Joao', email:'joao@macioesedoso.com'}
                        ,{nome:'Franciele', email:'fran@quimica.com'}
                    ];
                }

                function CursoController(){
                    var vm = this;
                    vm.titulo= "BeMEAN - Cursos";
                    vm.cursos =[
                        {titulo:'Be MEAN',                teacher:'Suissa'}
                        ,{titulo:'Learning Machine',  teacher:'Ivan Gustavo'}
                        ,{titulo:'Laravel',                 teacher:'Michael Douglas'}
                    ];
                }

                function ProfessoresController(){
                    var vm = this;
                    vm.titulo= "BeMEAN - Professores";
                    vm.professores =[
                        {nome:'Miguel de Oliveira', idade: '51'}
                        ,{nome:'José carvalho', idade: '17'}
                    ];
                }
    </script>
    </body>
</html>
```
