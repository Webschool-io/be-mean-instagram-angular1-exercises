# AngularJS 1 - Aula 05 - Exercício

Nome: Alex Morgado Pereira

User: [alexMCoder](https://github.com/AlexMCoder)

## 1- Adicionar mais 1 campo em todos os Controllers e utlizar ele em orderBy.

## 2- Utilizar esse valor adicional no ng-init para cada ng-repeat da View.

## 3- Criar um filtro para cada ng-repeat.

```html
<!DOCTYPE HTML>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
</head>
<body data-ng-controller="UserController as User">
  <span data-ng-init="userPredicate = 'age'; coursePredicate = 'hours'; teacherPredicate = 'courses'; courseReverse = true"></span>
  <h1>{{ User.title }}</h1>

  <p>
    <label><input type="text" data-ng-model="searchUser"></label>
  </p>

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

  <table>
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


  <div data-ng-controller="CourseController as Course">
    <h2>{{ Course.title }}</h2>

    <p>
        <label>Matéria:
          <input type="text" ng-model="form.Course.name" name="name" value="">
        </label>
        <br>
        <label>Professor:
          <input type="text" ng-model="form.Course.teacher" name="name" value="">
        </label>
        <br>
        <label>Duração:
          <input type="text" ng-model="form.Course.classes" name="name" value="">
        </label>
      </p>

      <button ng-click="Course.add(form.Course)" type="button" name="button">Adicionar Materia</button>
    <p>
      <label><input type="text" data-ng-model="searchCourse"></label>
    </p>
    <table>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in Course.courses[0]">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="c in Course.courses | orderBy:coursePredicate:courseReverse | filter:searchCourse">
          <td data-ng-repeat="(key, value) in c">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div data-ng-controller="TeacherController as Teacher">
    <h2>{{ Teacher.title }}</h2>
    <p>
      <label><input type="text" data-ng-model="searchTeacher"></label>
    </p>

     <button ng-click="Teacher.add()" type="button" name="button">Adicionar Curso</button>
    <table>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in Teacher.teachers[0]">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="t in Teacher.teachers | orderBy:teacherPredicate | filter:searchTeacher">
          <td data-ng-repeat="(key, value) in t">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController)
      .controller('CourseController', CourseController)
      .controller('TeacherController', TeacherController)
      .filter('isAdult', () => {
        return (age) => {

          if (age && !isNaN(age) ) {
            if(age < 18) return 'Menor de idade.';
            else return 'Maior de idade';
          }

          if(isNaN(age)) return 'digite sua idade';
        }
      });

    function UserController() {
      var vm = this;
      vm.title = 'Be MEAN - Users';
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com', age: 30}
      , {name: 'João', email: 'joao@macioesedoso.com', age: 68}
      , {name: 'Franciele', email: 'fran@quimica.com', age: 17}
      ];

      vm.add = add;
      function add(user){
        console.log('user',user);
        vm.users.push(user);
      }

      vm.ordenar = ordenar;
      function ordenar(campo){
        console.log(campo);
        vm.predicate = campo;
        vm.reverse = !vm.reverse;
      }
    }

    function CourseController() {
      var vm = this;
      vm.title = 'Be MEAN - Courses';
      vm.courses = [
        {name: 'Be MEAN', teacher: 'Suissa', hours: 200},
        {name: 'Learning Machine', teacher: 'Ivan Gustavo', hours: 30},
        {name: 'Laravel', teacher: 'Michael Douglas', hours: 50}
      ];

      vm.add = add;
      function add() {
        vm.courses.push({name: 'Agronegócio', teacher: 'Tecnologia', hours: 3});
      }
    }

    function TeacherController() {
      var vm = this;
      vm.title = 'Be Mean - Teachers';
      vm.teachers = [
          {name: 'Alex', email: 'alexmpprog@gmail.com.br', cursos: 'Laravel', age: 24},
          {name: 'Lucas Mota', email: 'Lucasmota@gmail.com.br', cursos: 'Laravel', age: 21},
          {name: 'Rafael', email: 'rafael@gmail.com.br', cursos: 'Laravel', age: 25}
        ];

        vm.add = add;
        function add(){
          vm.teachers.push({name: 'Tang', email: 'tangriane@gmail.com.br', cursos: 'PHP', age: 25});
        }
    }
  </script>
</body>
</html>
```