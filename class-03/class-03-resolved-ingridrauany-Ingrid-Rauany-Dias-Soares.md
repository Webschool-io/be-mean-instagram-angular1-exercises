# AngularJS - Aula 03 - Exercício

Nome: Ingrid Rauany  
Github: [ingridrauany](https://github.com/ingridrauany)  
Data: 1463663947158

## 1- Criar 1 Controller de Professores, igual aos outros seguindo nosso último padrão.

```html
<!doctype html>
<html data-ng-app="BeMEAN"> 
    <head>
        <meta charset="utf-8">
        <title>Be MEAN</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    </head>
    <body data-ng-controller="ProfessorController as Professor"> 
        <h2>{{ Professor.titulo }} </h2>
            <ul>
                <li data-ng-repeat="professor in Professor.professores">
                    {{ professor.name }} | {{ professor.curso }} | salário: {{ professor.salario }} | idade: {{ professor.idade }} | horário da aula: {{ professor.horarioaula }}
                </li>
            </ul>
        </div>
        <script>
            angular.module('BeMEAN', [])
                .controller('ProfessorController', ProfessorController)
                
                function ProfessorController() {
                    var vm = this;
                    vm.titulo = "Cadastro de Professores";
                    vm.professores = [
                        {name: 'Suissa', curso: 'Ciência da Computação', salario: 3200, idade: 18, horarioaula: '12:50'},
                        {name: 'João', curso: 'Sistemas de Informação', salario: 2400, idade: 16, horarioaula: '13:40'},
                        {name: 'Ana', curso: 'Matemática', salario: 3600, idade: 18, horarioaula: '22:10'},
                        {name: 'Igor', curso: 'Sistemas de Informação', salario: 5500, idade: 20, horarioaula: '15:50'},
                        {name: 'Diego', curso: 'Ciência da Computação', salario: 2100, idade: 22, horarioaula: '16:00'},
                        {name: 'Pedro', curso: 'Matemática', salario: 3000, idade: 17, horarioaula: '09:20'}
                    ];
                }
        </script>
    </body>
</html>
```

## 2- Utilizar seu filtro criado aula na passada em algum dos seus valores. 

```html
<!doctype html>
<html data-ng-app="BeMEAN"> 
    <head>
        <meta charset="utf-8">
        <title>Be MEAN</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    </head>
    <body data-ng-controller="ProfessorController as Professor"> 
        <h2>{{ Professor.titulo }} </h2>
            <ul>
                <li data-ng-repeat="professor in Professor.professores">
                    <strong> {{ professor.name }} </strong></br>
                    {{ professor.curso }} </br>
                    salário {{ professor.salario | currency }} </br> 
                    idade: {{ professor.idade }} | {{ professor.idade | maioridade }} </br>
                    horário da aula: {{ professor.horarioaula }} | turno: {{ professor.horarioaula | horario }}</br>
                </li>
            </ul>
        </div>
        <script>
            angular.module('BeMEAN', [])
   
                .filter('maioridade', function(){
                    return function(text) {
                        if(text >= 18) return 'o professor é maior de idade';
                        if(text < 18) return 'o professor é menor de idade';
                        else return 'Insira uma idade inválida';
                    };
                })
                 
               .filter('horario', function(){
                    return function(text) {
                        if(text) {
                            var horas = parseInt(text.substring(0, 2), 10);
                            var minutos = parseInt(text.substring(3, 5), 10);
                            var menu = [horas <= 12, horas > 12 && horas <= 16, horas > 16 && horas < 24];
                            switch (menu.indexOf(true)) {
                                case (0):
                                    return 'Manhã';
                                case (1):
                                    return 'Tarde';
                                case (2):
                                    return 'Noite';
                                default:
                                    return 'O horário não é válido';
                            }
                        };
                    };
                })                   
            
            .controller('ProfessorController', ProfessorController);
            
            function ProfessorController() {
                    var vm = this;
                    vm.titulo = "Cadastro de Professores";
                    vm.professores = [
                        {name: 'Suissa', curso: 'Ciência da Computação', salario: 3200, idade: 18, horarioaula: '12:50'},
                        {name: 'João', curso: 'Sistemas de Informação', salario: 2400, idade: 16, horarioaula: '13:40'},
                        {name: 'Ana', curso: 'Matemática', salario: 3600, idade: 18, horarioaula: '22:10'},
                        {name: 'Igor', curso: 'Sistemas de Informação', salario: 5500, idade: 20, horarioaula: '15:50'},
                        {name: 'Diego', curso: 'Ciência da Computação', salario: 2100, idade: 22, horarioaula: '16:00'},
                        {name: 'Pedro', curso: 'Matemática', salario: 3000, idade: 17, horarioaula: '09:20'}
                    ];
                }; 
        </script>
    </body>
</html>
```
