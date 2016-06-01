# Angularjs 1 - Aula 05 - Exercício

User: [Cerezini](https://github.com/cerezini)

Autor: Mateus Cerezini Gomes

Data: 1464056564542

## 1. Criar uma função para ordenar uma tabela à partir de uma coluna, *clickando* na sua *tr>th*, ordenando pelo campo da coluna.

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
</head>
<body data-ng-controller="UserController as User">
  <h1>{{ User.title }}</h1>

  <p>
    <label><input type="text" data-ng-model="searchUser"></label>
  </p>

  <table>
    <thead>
      <tr>
        <th data-ng-repeat="(key, value) in User.users[0]" data-ng-click="User.orderBy(key)">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="u in User.users | orderBy:User.predicate:User.reverse | filter : searchUser">
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
          <th data-ng-repeat="(key, value) in Course.courses[0]" data-ng-click="Course.orderBy(key)">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="c in Course.courses | orderBy:Course.predicate:Course.reverse | filter : searchCourse">
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
          <th data-ng-repeat="(key, value) in Teacher.teachers[0]" data-ng-click="Teacher.orderBy(key)">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="t in Teacher.teachers | orderBy:Teacher.predicate:Teacher.reverse | filter : searchTeacher">
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

      // Order
      vm.predicate = '';
      vm.reverse = false;
      vm.orderBy = orderBy;

      function orderBy(key) {
        if (key === vm.predicate) vm.reverse = !vm.reverse;
        else {
          vm.predicate = key;
          vm.reverse = false;
        }
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

      // Order
      vm.predicate = '';
      vm.reverse = false;
      vm.orderBy = orderBy;

      function orderBy(key) {
        if (key === vm.predicate) vm.reverse = !vm.reverse;
        else {
          vm.predicate = key;
          vm.reverse = false;
        }
      }
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

      // Order
      vm.predicate = '';
      vm.reverse = false;
      vm.orderBy = orderBy;

      function orderBy(key) {
        if (key === vm.predicate) vm.reverse = !vm.reverse;
        else {
          vm.predicate = key;
          vm.reverse = false;
        }
      }
    }
  </script>
</body>
</html>

```

## 2. Criar mais 1 *Controller* para *Teachers* com seu form para adição, listagem (defina um Array inicial) com a ordenação do exercício anterior, filtro filter e também use o seu filtro criado na segunda aula.

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
</head>
<body data-ng-controller="UserController as User">
  <h1>{{ User.title }}</h1>

  <p>
    <label>Name: <input type="text" data-ng-model="form.user.name"></label>
    <label>Email: <input type="email" data-ng-model="form.user.email"></label>
    <label>Age: <input type="number" data-ng-model="form.user.age"></label>
    <button data-ng-click="User.add(form.user)">ADD</button>
  </p>
  <p>
    <label>Search: <input type="text" data-ng-model="searchUser"></label>
  </p>

  <table>
    <thead>
      <tr>
        <th data-ng-repeat="(key, value) in User.users[0]" data-ng-click="User.orderBy(key)">{{ key }}</th>
        <th>classificação</th>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="u in User.users | orderBy:User.predicate:User.reverse | filter : searchUser">
        <td data-ng-repeat="(key, value) in u">{{ value }}</td>
        <td>{{u.age | isAdult}}</td>
      </tr>
    </tbody>
  </table>


  <div data-ng-controller="CourseController as Course">
    <h2>{{ Course.title }}</h2>
    <p>
      <label>Name: <input type="text" data-ng-model="form.course.name"></label>
      <label>Teacher: <input type="text" data-ng-model="form.course.teacher"></label>
      <label>Hours: <input type="number" data-ng-model="form.course.hours"></label>
      <button data-ng-click="Course.add(form.course)">ADD</button>
    </p>
    <p>
      <label>Search: <input type="text" data-ng-model="searchCourse"></label>
    </p>
    <table>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in Course.courses[0]" data-ng-click="Course.orderBy(key)">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="c in Course.courses | orderBy:Course.predicate:Course.reverse | filter : searchCourse">
          <td data-ng-repeat="(key, value) in c">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div data-ng-controller="TeacherController as Teacher">
    <h2>{{ Teacher.title }}</h2>
    <p>
      <label>Name: <input type="text" data-ng-model="form.teacher.name"></label>
      <label>Email: <input type="email" data-ng-model="form.teacher.email"></label>
      <label>Courses: <input type="text" data-ng-model="form.teacher.courses"></label>
      <button data-ng-click="Teacher.add(form.teacher)">ADD</button>
    </p>
    <p>
      <label>Search: <input type="text" data-ng-model="searchTeacher"></label>
    </p>
    <table>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in Teacher.teachers[0]" data-ng-click="Teacher.orderBy(key)">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="t in Teacher.teachers | orderBy:Teacher.predicate:Teacher.reverse | filter : searchTeacher">
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
      .controller('TeacherController', TeacherController)
      .filter('isAdult', isAdult);

    function isAdult() {
      return (age) => {
        if (age && !(isNaN(age))) {
          if (age < 18) return 'Menor de 18 anos.';
          else return 'Maior de 18 anos.'
        }
      }
    }

    function UserController() {
      var vm = this;
      vm.title = 'Be MEAN - Users';
      vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com', age: 30}
      , {name: 'João', email: 'joao@macioesedoso.com', age: 68}
      , {name: 'Franciele', email: 'fran@quimica.com', age: 17}
      ];

      // Order
      vm.predicate = '';
      vm.reverse = false;
      vm.orderBy = orderBy;

      function orderBy(key) {
        if (key === vm.predicate) vm.reverse = !vm.reverse;
        else {
          vm.predicate = key;
          vm.reverse = false;
        }
      }

      // Add
      vm.add = add;

      function add(user) {
        vm.users.push(user);
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

      // Order
      vm.predicate = '';
      vm.reverse = false;
      vm.orderBy = orderBy;

      function orderBy(key) {
        if (key === vm.predicate) vm.reverse = !vm.reverse;
        else {
          vm.predicate = key;
          vm.reverse = false;
        }
      }

      // Add
      vm.add = add;

      function add(course) {
        vm.courses.push(course);
      }
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

      // Order
      vm.predicate = '';
      vm.reverse = false;
      vm.orderBy = orderBy;

      function orderBy(key) {
        if (key === vm.predicate) vm.reverse = !vm.reverse;
        else {
          vm.predicate = key;
          vm.reverse = false;
        }
      }

      // Add
      vm.add = add;

      function add(teacher) {
        vm.teachers.push(teacher);
      }
    }
  </script>
</body>
</html>

```
