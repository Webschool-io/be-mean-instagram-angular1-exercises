Nome: Ronaldo Lima
Github: ronal2do
Data: 1464282108

# Angularjs 1 - Aula 04 - Exercício

## 1. Adicionar mais 1 campo em todos os Controllers e utilizar ele em orderBy.

```html

<!DOCTYPE html>
<html data-ng-app="AnyApp">
  <head>
    <meta charset="utf-8">
    <title>Aula 04 - ex 01</title>
  </head>
  <body data-ng-controller="UserController as User">

    <h1>{{ User.title }}</h1>

    <table>
      <thead>
        <tr> 
          <th data-ng-repeat=" (key, value) in User.users[0] ">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat=" user in User.users | orderBy:'forks' ">
          <td data-ng-repeat="(key, value) in user ">{{ value }}</td>
        </tr>
      </tbody>
    </table>


    <div data-ng-controller=" CourseController as Course ">
      <h2>{{ Course.title }}</h2>
      <table>
        <thead>
          <tr>
            <th data-ng-repeat=" (key, value) in Course.courses[0] ">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr data-ng-repeat=" course in Course.courses | orderBy:'stars' ">
            <td data-ng-repeat=" (key, value) in course ">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div data-ng-controller="TeacherController as Teacher">
      <h2>{{ Teacher.title }}</h2>
      <table>
        <thead>
          <tr>
            <th data-ng-repeat=" (key, value) in Teacher.teachers[0] ">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr data-ng-repeat=" teacher in Teacher.teachers | orderBy:'hours' ">
            <td data-ng-repeat=" (key, value) in teacher ">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

   

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      
    <script type="text/javascript">
      angular
        .module('AnyApp', [])
          .controller('UserController', UserController)
          .controller('CourseController', CourseController)
          .controller('TeacherController', TeacherController);

        function UserController() {
          var vm = this;
          vm.title = 'Be MEAN - Users';
          vm.users = [
            {name: 'Suissa', email: 'suissera@manoveio.com', forks: 987}
          , {name: 'João', email: 'joao@macioesedoso.com', forks: 573}
          , {name: 'Franciele', email: 'fran@quimica.com', forks: 173}
          ];
        }

        function CourseController() {
          var vm = this;
          vm.title = 'Be MEAN - Courses';
          vm.courses = [
            {name: 'Be MEAN', teacher: 'Suissa', stars: 1012},
            {name: 'Learning Machine', teacher: 'Ivan Gustavo', stars: 1931},
            {name: 'Laravel', teacher: 'Michael Douglas', stars: 1325}
          ];
        }
        function TeacherController() {
          var vm = this;
          vm.title = 'Teachers';
          vm.teachers = [
            {name: 'Kyung Oghenero', course: 'Node', hours: 12},
            {name: 'Nika Gnaeus', course: 'D3', hours: 10},
            {name: 'Chariovalda Lynna', course: 'React', hours: 19},
            {name: 'Manuel Gautier', course: 'Vue', hours: 08}
          ];
        }
    </script>
  </body>
</html>


```

## 2. Utilizar esse valor adicional no ng-init para cada ng-repeat da View.

```html

<!DOCTYPE html>
<html data-ng-app="AnyApp">
  <head>
    <meta charset="utf-8">
    <title>Aula 04 - ex 02</title>
  </head>
  <body data-ng-controller="UserController as User">
  <span data-ng-init="  Predicate = 'forks' ; 
                        cPredicate = 'stars' ; 
                        tPredicate = 'hours'; "></span>
    <h1>{{ User.title }}</h1>

    <table>
      <thead>
        <tr> 
          <th data-ng-repeat=" (key, value) in User.users[0] ">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat=" user in User.users | orderBy:Predicate ">
          <td data-ng-repeat="(key, value) in user ">{{ value }}</td>
        </tr>
      </tbody>
    </table>


    <div data-ng-controller=" CourseController as Course ">
      <h2>{{ Course.title }}</h2>
      <table>
        <thead>
          <tr>
            <th data-ng-repeat=" (key, value) in Course.courses[0] ">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr data-ng-repeat=" course in Course.courses | orderBy:cPredicate ">
            <td data-ng-repeat=" (key, value) in course ">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div data-ng-controller="TeacherController as Teacher">
      <h2>{{ Teacher.title }}</h2>
      <table>
        <thead>
          <tr>
            <th data-ng-repeat=" (key, value) in Teacher.teachers[0] ">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr data-ng-repeat=" teacher in Teacher.teachers | orderBy:tPredicate ">
            <td data-ng-repeat=" (key, value) in teacher ">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

   

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      
    <script type="text/javascript">
      angular
        .module('AnyApp', [])
          .controller('UserController', UserController)
          .controller('CourseController', CourseController)
          .controller('TeacherController', TeacherController);

        function UserController() {
          var vm = this;
          vm.title = 'Be MEAN - Users';
          vm.users = [
            {name: 'Suissa', email: 'suissera@manoveio.com', forks: 987}
          , {name: 'João', email: 'joao@macioesedoso.com', forks: 573}
          , {name: 'Franciele', email: 'fran@quimica.com', forks: 173}
          ];
        }

        function CourseController() {
          var vm = this;
          vm.title = 'Be MEAN - Courses';
          vm.courses = [
            {name: 'Be MEAN', teacher: 'Suissa', stars: 1012},
            {name: 'Learning Machine', teacher: 'Ivan Gustavo', stars: 1931},
            {name: 'Laravel', teacher: 'Michael Douglas', stars: 1325}
          ];
        }
        function TeacherController() {
          var vm = this;
          vm.title = 'Teachers';
          vm.teachers = [
            {name: 'Kyung Oghenero', course: 'Node', hours: 12},
            {name: 'Nika Gnaeus', course: 'D3', hours: 10},
            {name: 'Chariovalda Lynna', course: 'React', hours: 19},
            {name: 'Manuel Gautier', course: 'Vue', hours: 08}
          ];
        }
    </script>
  </body>
</html>

```

## 3. Criar um campo de filtro para cada ng-repeat.

```html<!DOCTYPE html>
<html data-ng-app="AnyApp">
  <head>
    <meta charset="utf-8">
    <title>Aula 04 - ex 03</title>
  </head>
  <body data-ng-controller="UserController as User">
  <span data-ng-init="  Predicate = 'forks' ; 
                        cPredicate = 'stars' ; 
                        tPredicate = 'hours'; "></span>
    <h1>{{ User.title }}</h1>
    <label><input type="text" data-ng-model="searchUser"></label>
    <table>
      <thead>
        <tr> 
          <th data-ng-repeat=" (key, value) in User.users[0] ">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat=" user in User.users | orderBy:Predicate | filter:searchUser ">
          <td data-ng-repeat="(key, value) in user ">{{ value }}</td>
        </tr>
      </tbody>
    </table>


    <div data-ng-controller=" CourseController as Course ">
      <h2>{{ Course.title }}</h2>
      <label><input type="text" data-ng-model="searchCourse"></label>
      <table>
        <thead>
          <tr>
            <th data-ng-repeat=" (key, value) in Course.courses[0] ">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr data-ng-repeat=" course in Course.courses | orderBy:cPredicate | filter:searchCourse ">
            <td data-ng-repeat=" (key, value) in course ">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div data-ng-controller="TeacherController as Teacher">
      <h2>{{ Teacher.title }}</h2>
      <label><input type="text" data-ng-model="searchTeacher"></label>
      <table>
        <thead>
          <tr>
            <th data-ng-repeat=" (key, value) in Teacher.teachers[0] ">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr data-ng-repeat=" teacher in Teacher.teachers | orderBy:tPredicate | filter:searchTeacher ">
            <td data-ng-repeat=" (key, value) in teacher ">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

   

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      
    <script type="text/javascript">
      angular
        .module('AnyApp', [])
          .controller('UserController', UserController)
          .controller('CourseController', CourseController)
          .controller('TeacherController', TeacherController);

        function UserController() {
          var vm = this;
          vm.title = 'Be MEAN - Users';
          vm.users = [
            {name: 'Suissa', email: 'suissera@manoveio.com', forks: 987}
          , {name: 'João', email: 'joao@macioesedoso.com', forks: 573}
          , {name: 'Franciele', email: 'fran@quimica.com', forks: 173}
          ];
        }

        function CourseController() {
          var vm = this;
          vm.title = 'Be MEAN - Courses';
          vm.courses = [
            {name: 'Be MEAN', teacher: 'Suissa', stars: 1012},
            {name: 'Learning Machine', teacher: 'Ivan Gustavo', stars: 1931},
            {name: 'Laravel', teacher: 'Michael Douglas', stars: 1325}
          ];
        }
        function TeacherController() {
          var vm = this;
          vm.title = 'Teachers';
          vm.teachers = [
            {name: 'Kyung Oghenero', course: 'Node', hours: 12},
            {name: 'Nika Gnaeus', course: 'D3', hours: 10},
            {name: 'Chariovalda Lynna', course: 'React', hours: 19},
            {name: 'Manuel Gautier', course: 'Vue', hours: 08}
          ];
        }
    </script>
  </body>
</html>

```