# AngularJS - Aula 05 - Exercício
**user:** [gustavoprado013](https://github.com/gustavoprado013)  
**autor:** Gustavo Prado

## Criar uma função para ordenar uma tabela a partir de uma coluna clicando em sua th>td ordenando pelo campo da coluna

## Criar mais 1 Controller para Teachers com seu form para adição, listagem (defina um Array inicial) com a ordenação do exercício anterior, filtro filter e também use o seu filtro criado na segunda aula.

```html
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exercício 05 - AngularJS</title>

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
           .controller('ProfessorController', ProfessorController)
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
          vm.add = add;
          function add(user) {
            console.log('user', user);
            vm.users.push(user);
          }

          vm.ordenar = ordenar;
          function ordenar(campo) {
            console.log(campo);
            vm.predicate = campo;
            vm.reverse = !vm.reverse;
          }
        }

        function MateriaController() {
          var vm = this;
          vm.titulo = "Be MEAN - Materias";
          vm.materias = [
            {name: 'Angular', teacher: 'Suissa', classes: 2},
            {name: 'Ionic', teacher: 'João', classes: 5},
            {name: 'Laravel', teacher: 'Maria', classes: 3},
          ];
          vm.add = add;
          function add(materia) {
            console.log('materia', materia);
            vm.materias.push(materia);
          }
        }

        function CursoController(){
          var vm = this;
          vm.titulo = "Be MEAN - Cursos";
          vm.cursos = [
            {name: 'Sistemas de Informação', type: 'Bacharelado', long: 4},
            {name: 'Análise de Sistemas', type: 'Bacharelado', long: 3},
            {name: 'Gestão de TI', type: 'Tecnologia', long: 3}
          ];
          vm.add = add;
          function add() {
            vm.cursos.push({name: 'Agronegócio', type: 'Tecnologia', long: 3});
          }
        }

        function ProfessorController(){
          var vm = this;
          vm.titulo = "Be Mean - Professores";
          vm.professores = [
            {nome:"Maria", idade:20},
            {nome:"João", idade:30},
            {nome:"Ana", idade:25},
          ];
          vm.add = add;
          function add(){
            vm.professores.push(angular.copy(professor));
          }
        }

    </script>
</head>

<body data-ng-app="BeMEAN">
    <div class="container">

    <div ng-controller="UserController as User">
      <h1>{{User.titulo}}</h1>
      <label>Busca: <input ng-model="searchUser"</label>

      <p>
        <label>Nome:
          <input type="text" ng-model="form.User.name" name="name" value="">
        </label>
        <br>
        <label>Email:
          <input type="email" ng-model="form.User.email" name="name" value="">
        </label>
        <br>
        <label>Idade:
          <input type="text" ng-model="form.User.age" name="name" value="">
        </label>
      </p>

      <button ng-click="User.add(form.User)" type="button" name="button">Adicionar Usuário</button>

      <span ng-init="predicate = 'name'; reverse = true;"></span>

      <table class="table table stripped">
        <thead>
          <tr>
            <th ng-repeat="(key, value) in User.users[0]"><a href="" ng-click="User.ordenar('key')">{{key}}</a></th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="user in User.users | orderBy:User.predicate:User.reverse | filter:searchUser">
            <td ng-repeat="(key, value) in user">{{value}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div ng-controller="MateriaController as Materia">
      <h1>{{Materia.titulo}}</h1>
      <label>Busca: <input ng-model="searchMateria"</label>

      <p>
        <label>Matéria:
          <input type="text" ng-model="form.Materia.name" name="name" value="">
        </label>
        <br>
        <label>Professor:
          <input type="text" ng-model="form.Materia.teacher" name="name" value="">
        </label>
        <br>
        <label>Duração:
          <input type="text" ng-model="form.Materia.classes" name="name" value="">
        </label>
      </p>

      <button ng-click="Materia.add(form.Materia)" type="button" name="button">Adicionar Materia</button>

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

      <button ng-click="Curso.add()" type="button" name="button">Adicionar Curso</button>

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
