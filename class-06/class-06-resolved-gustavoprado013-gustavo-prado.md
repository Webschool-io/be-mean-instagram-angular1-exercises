# AngularJS - Aula 06 - Exercício
**user:** [gustavoprado013](https://github.com/gustavoprado013)  
**autor:** Gustavo Prado

## Criar função de delete utilizando splice em vez de filter

```html
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exercício 06 - AngularJS</title>

    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"> -->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <style media="screen">
      .estilo{
        max-width: 800px;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
      }
    </style>

    <script>
        angular.module('BeMEAN', [])
                 .controller('UserController', UserController)
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

          function getKeyLenght(){
            return Object.keys(angular.copy(vm.users[0])).length;
          }

          vm.keyslength = getKeyLenght();

          vm.remove = remove;
          function remove(users) {
            vm.users = users.filter(function(el){
              return !el.selecionado
            });
          }

          vm.removeSplice = removeSplice;
          function removeSplice(users) {
            users.forEach(function (element, index) {
              if(users[index].selecionado){
                users.splice(users.indexOf(element), 1);
              }
            })
          }

          vm.removeByEmail = removeByEmail;
          function removeByEmail(email) {
            vm.users = vm.users.filter(function(el){
              return el.email !== email
            });
          }

          vm.add = add;
          function add(user) {
            console.log('user', user);
            vm.users.push(user);
          }
        }


    </script>
</head>

<body data-ng-app="BeMEAN">
    <div class="container estilo">

    <div ng-controller="UserController as User">

      <h1>{{User.titulo}}</h1>

      <p class="col s12">
        <label>
          <input type="text" ng-model="form.User.name" name="name" placeholder="Nome">
        </label>
        <br>
        <label>
          <input type="email" ng-model="form.User.email" name="name" placeholder="Email">
        </label>
        <br>
        <label>
          <input type="text" ng-model="form.User.age" name="name" placeholder="Idade">
        </label>
      </p>

      <button ng-click="User.add(form.User)" class="btn btn-large green waves-effect waves-light col s12"
      type="submit" name="action">Adicionar Usuário</button>

      <span ng-init="predicate = 'name'; reverse = true;"></span>

      <table class="table table stripped">
        <thead>
          <tr>
            <th colspan="3">
              <label>
                <input ng-model="searchUser" placeholder="Buscar">
              </label>
            </th>
          </tr>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="user in User.users | orderBy:predicate:reverse | filter:searchUser">
            <td>
              <input type="checkbox" id="user-{{$index}}" ng-model="user.selecionado" name="name" value="">
              <label for="user-{{$index}}"></label>
            </td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>

          </tr>
        </tbody>
      </table>

      <button ng-click="User.removeSplice(User.users)" class="btn btn-large red waves-effect waves-light col s12"
      name="button">Remover</button>
    </div>

    <h1>Verifique o Tipo do seu Curso</h1>

    <input type="number" ng-model="tempo" placeholder="Digite o tempo do seu curso">
    <span>Seu Curso é {{tempo | TipoCurso}}</span>

    </div>
</body>
</html>

```
