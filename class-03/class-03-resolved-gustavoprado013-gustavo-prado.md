# AngularJS - Aula 03 - Exercício
**user:** [gustavoprado013](https://github.com/gustavoprado013)  
**autor:** Gustavo Prado

## 1 - Criar 1 controller de professores, igual aos outros , seguindo nosso último padrão

## 2 - Utilizar seu filtro criado na aula passada em algum dos seus valores.

```html

<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exercício 03 - AngularJS</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <style media="screen">
      .estilo{
        margin-top: 200px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }
    </style>

    <script>
        angular.module('BeMEAN', [])
			     .controller('UserController', UserController)
           .controller('MateriaController', MateriaController)
           .controller('CursoController', CursoController)
           .filter('TipoCurso',function() {
   				    return function(text) {
   					if(text >= 4) { return 'Seu curso é Bacharel'}
   					if(text <= 3) { return 'Seu curso é de Tecnologia'}
   				}
   			});

        function UserController() {
          var vm = this;
          vm.titulo = "Be MEAN - Usuários";
          vm.users = [
            {name: 'Gustavo', email: 'gustavo@gustavo.com'},
            {name: 'Gustavo', email: 'gustavo@gustavo.com'},
            {name: 'Gustavo', email: 'gustavo@gustavo.com'}
          ];
        }

        function MateriaController() {
          var vm = this;
          vm.titulo = "Be MEAN - Materias";
          vm.materias = [
            {name: 'Angular', teacher: 'Suissa'},
            {name: 'Ionic', teacher: 'João'},
            {name: 'Laravel', teacher: 'Maria'},
          ];
        }

        function CursoController(){
          var vm = this;
          vm.titulo = "Be MEAN - WebSchool";
          vm.cursos = [
            {name: 'Sistemas de Informação', type: 'Bacharelado', long: 4},
            {name: 'Análise de Sistemas', type: 'Bacharelado', long: 3},
            {name: 'Gestão de TI', type: 'Tecnologia', long: 3}
          ];
        }

    </script>
</head>

<body data-ng-app="BeMEAN">
	<div class="container">

    <div ng-controller="UserController as User">
      <h1>{{User.titulo}}</h1>
      <ul>
        <li ng-repeat="user in User.users">{{user.name}} - {{user.email}}</li>
      </ul>
    </div>

    <div ng-controller="MateriaController as Materia">
      <h1>{{Materia.titulo}}</h1>
      <ul>
        <li data-ng-repeat="materia in Materia.materias">{{materia.name}} - {{materia.teacher}}</li>
      </ul>
    </div>

    <div ng-controller="CursoController as Curso">
      <h1>{{Curso.titulo}}</h1>
      <ul>
        <li data-ng-repeat="curso in Curso.cursos">{{curso.name}} - {{curso.type}} - {{curso.long}} anos</li>
      </ul>
    </div>

    <h1>Verifique o Tipo do seu Curso</h1>

    <input type="number" ng-model="tempo" placeholder="Digite o tempo do seu curso">
    <span>Seu Curso é {{tempo | TipoCurso}}</span>

	</div>
</body>

</html>
```
