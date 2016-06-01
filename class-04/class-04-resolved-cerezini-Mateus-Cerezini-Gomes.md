# Angularjs 1 - Aula 04 - Exercício

User: [Cerezini](https://github.com/cerezini)

Autor: Mateus Cerezini Gomes

Data: 1464056564542

## 1. Adicionar mais 1 campo em todos os Controllers e utilizar ele em orderBy.

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
</head>
<body data-ng-controller="UserController as User">

  <h1>{{ User.title }}</h1>

  <table>
    <thead>
      <tr>
        <th data-ng-repeat="(key, value) in User.users[0]">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="u in User.users | orderBy:'age'">
        <td data-ng-repeat="(key, value) in u">{{ value }}</td>
      </tr>
    </tbody>
  </table>


  <div data-ng-controller="CourseController as Course">
    <h2>{{ Course.title }}</h2>
    <table>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in Course.courses[0]">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="c in Course.courses | orderBy:'hours':true">
          <td data-ng-repeat="(key, value) in c">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div data-ng-controller="TeacherController as Teacher">
    <h2>{{ Teacher.title }}</h2>
    <table>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in Teacher.teachers[0]">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="t in Teacher.teachers | orderBy:'courses'">
          <td data-ng-repeat="(key, value) in t">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <script src="../../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController)
      .controller('CourseController', CourseController)
      .controller('TeacherController', TeacherController);

    function UserController() {
      var vm = this;
      vm.title = 'Be MEAN - Users';
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com', age: 30}
      , {name: 'João', email: 'joao@macioesedoso.com', age: 68}
      , {name: 'Franciele', email: 'fran@quimica.com', age: 17}
      ];
    }

    function CourseController() {
      var vm = this;
      vm.title = 'Be MEAN - Courses';
      vm.courses = [
        {name: 'Be MEAN', teacher: 'Suissa', hours: 200},
        {name: 'Learning Machine', teacher: 'Ivan Gustavo', hours: 30},
        {name: 'Laravel', teacher: 'Michael Douglas', hours: 50}
      ];
    }

    function TeacherController() {
      var vm = this;
      vm.title = 'Be Mean - Teachers';
      vm.teachers = [
        {name: 'Russomano', email: 'russomano@bol.com.br', courses: 'Capoeira'},
        {name: 'Pedro Pedreira', email: 'pedropedra@bol.com.br', courses: 'Artesanato, Surf'},
        {name: 'Paulo Pão de Batata', email: 'potatopaulo@potato.br', courses: 'Web, Mongodb'},
        {name: 'Jaiminho', email: 'jaiminho@chaves.mx', courses: 'Matemática, Inglês'}
      ];
    }
  </script>
</body>
</html>
```

## 2. Utilizar esse valor adicional no ng-init para cada ng-repeat da View.

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
</head>
<body data-ng-controller="UserController as User">
  <span data-ng-init="userPredicate = 'age'; coursePredicate = 'hours'; teacherPredicate = 'courses'; courseReverse = true"></span>
  <h1>{{ User.title }}</h1>

  <table>
    <thead>
      <tr>
        <th data-ng-repeat="(key, value) in User.users[0]">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="u in User.users | orderBy:userPredicate">
        <td data-ng-repeat="(key, value) in u">{{ value }}</td>
      </tr>
    </tbody>
  </table>


  <div data-ng-controller="CourseController as Course">
    <h2>{{ Course.title }}</h2>
    <table>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in Course.courses[0]">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="c in Course.courses | orderBy:coursePredicate:courseReverse">
          <td data-ng-repeat="(key, value) in c">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div data-ng-controller="TeacherController as Teacher">
    <h2>{{ Teacher.title }}</h2>
    <table>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in Teacher.teachers[0]">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="t in Teacher.teachers | orderBy:teacherPredicate">
          <td data-ng-repeat="(key, value) in t">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <script src="../../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController)
      .controller('CourseController', CourseController)
      .controller('TeacherController', TeacherController);

    function UserController() {
      var vm = this;
      vm.title = 'Be MEAN - Users';
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com', age: 30}
      , {name: 'João', email: 'joao@macioesedoso.com', age: 68}
      , {name: 'Franciele', email: 'fran@quimica.com', age: 17}
      ];
    }

    function CourseController() {
      var vm = this;
      vm.title = 'Be MEAN - Courses';
      vm.courses = [
        {name: 'Be MEAN', teacher: 'Suissa', hours: 200},
        {name: 'Learning Machine', teacher: 'Ivan Gustavo', hours: 30},
        {name: 'Laravel', teacher: 'Michael Douglas', hours: 50}
      ];
    }

    function TeacherController() {
      var vm = this;
      vm.title = 'Be Mean - Teachers';
      vm.teachers = [
        {name: 'Russomano', email: 'russomano@bol.com.br', courses: 'Capoeira'},
        {name: 'Pedro Pedreira', email: 'pedropedra@bol.com.br', courses: 'Artesanato, Surf'},
        {name: 'Paulo Pão de Batata', email: 'potatopaulo@potato.br', courses: 'Web, Mongodb'},
        {name: 'Jaiminho', email: 'jaiminho@chaves.mx', courses: 'Matemática, Inglês'}
      ];
    }
  </script>
</body>
</html>
```

## 3. Criar um campo de filtro para cada ng-repeat.

```html
<!doctype html>
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

  <table>
    <thead>
      <tr>
        <th data-ng-repeat="(key, value) in User.users[0]">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="u in User.users | orderBy:userPredicate | filter : searchUser">
        <td data-ng-repeat="(key, value) in u">{{ value }}</td>
      </tr>
    </tbody>
  </table>


  <div data-ng-controller="CourseController as Course">
    <h2>{{ Course.title }}</h2>
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

  <script src="../../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController)
      .controller('CourseController', CourseController)
      .controller('TeacherController', TeacherController);

    function UserController() {
      var vm = this;
      vm.title = 'Be MEAN - Users';
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com', age: 30}
      , {name: 'João', email: 'joao@macioesedoso.com', age: 68}
      , {name: 'Franciele', email: 'fran@quimica.com', age: 17}
      ];
    }

    function CourseController() {
      var vm = this;
      vm.title = 'Be MEAN - Courses';
      vm.courses = [
        {name: 'Be MEAN', teacher: 'Suissa', hours: 200},
        {name: 'Learning Machine', teacher: 'Ivan Gustavo', hours: 30},
        {name: 'Laravel', teacher: 'Michael Douglas', hours: 50}
      ];
    }

    function TeacherController() {
      var vm = this;
      vm.title = 'Be Mean - Teachers';
      vm.teachers = [
        {name: 'Russomano', email: 'russomano@bol.com.br', courses: 'Capoeira'},
        {name: 'Pedro Pedreira', email: 'pedropedra@bol.com.br', courses: 'Artesanato, Surf'},
        {name: 'Paulo Pão de Batata', email: 'potatopaulo@potato.br', courses: 'Web, Mongodb'},
        {name: 'Jaiminho', email: 'jaiminho@chaves.mx', courses: 'Matemática, Inglês'}
      ];
    }
  </script>
</body>
</html>
```
