# AngularJS - Aula 03 - Exercício
**user:** [gustavoprado013](https://github.com/gustavoprado013)  
**autor:** Gustavo Prado

## Criar 1 controller de professores, igual aos outros , seguindo nosso último padrão
## Utilizar seu filtro criado na aula passada em algum dos seus valores.

```html
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exercício 04 - AngularJS</title>

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
            {name: 'Bruna', email: 'bruna@bruna.com', age: 18},
            {name: 'Carol', email: 'carol@carol.com', age: 23},
            {name: 'Alex', email: 'alex@alex.com', age: 17}

          ];
        }

        function MateriaController() {
          var vm = this;
          vm.titulo = "Be MEAN - Materias";
          vm.materias = [
            {name: 'Angular', teacher: 'Suissa', classes: 2},
            {name: 'Ionic', teacher: 'João', classes: 5},
            {name: 'Laravel', teacher: 'Maria', classes: 3},
          ];
        }

        function CursoController(){
          var vm = this;
          vm.titulo = "Be MEAN - Cursos";
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
      <label>Busca: <input ng-model="searchUser"</label>

      <span ng-init="predicate = 'name'; reverse = true;"></span>

      <table class="table table stripped">
        <thead>
          <tr>
            <th ng-repeat="(key, value) in User.users[0]">{{key}}  </th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="user in User.users | orderBy:predicate:reverse | filter:searchUser">
            <td ng-repeat="(key, value) in user">{{value}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div ng-controller="MateriaController as Materia">
      <h1>{{Materia.titulo}}</h1>
      <label>Busca: <input ng-model="searchMateria"</label>

      <span ng-init="predicate = 'classes'; reverse = true;"></span>

      <table class="table table stripped">
        <thead>
          <tr>
            <th ng-repeat="(key, value) in Materia.materias[0]">{{key}}  </th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="materia in Materia.materias | orderBy:predicate:reverse | filter:searchMateria">
            <td ng-repeat="(key, value) in materia">{{value}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div ng-controller="CursoController as Curso">
      <h1>{{Curso.titulo}}</h1>
      <label>Busca: <input ng-model="searchCurso"</label>

      <span ng-init="predicate = 'long'; reverse = true;"></span>

      <table class="table table stripped">
        <thead>
          <tr>
            <th ng-repeat="(key, value) in Curso.cursos[0]">{{key}}  </th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="curso in Curso.cursos | orderBy:predicate:reverse | filter:searchCurso">
            <td ng-repeat="(key, value) in curso">{{value}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h1>Verifique o Tipo do seu Curso</h1>

    <input type="number" ng-model="tempo" placeholder="Digite o tempo do seu curso">
    <span>Seu Curso é {{tempo | TipoCurso}}</span>

	</div>
</body>
</html>
```
