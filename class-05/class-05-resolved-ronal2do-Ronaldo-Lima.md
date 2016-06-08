**Nome:** Ronaldo Lima
**Github:** ronal2do
**Data:** 1464313682

# Angularjs 1 - Aula 05 - Exercício

## 1. Criar uma função para ordenar uma tabela à partir de uma coluna, *clickando* na sua *tr>th*, ordenando pelo campo da coluna.

```html

<!DOCTYPE html>
<html data-ng-app="AnyApp">
  <head>
    <meta charset="utf-8">
    <title>Aula 05 - ex 02</title>
  </head>
  <!-- User -->
  <body data-ng-controller="UserController as User">

    <h1>{{ User.title }}</h1>

   <label><input type="text" data-ng-model="searchUser" placeholder="Search"></label>
    <table>
      <thead>
            <th data-ng-repeat="(key, value) in User.users[0]" 
                data-ng-click="User.orderBy(key)">
                  <a href="">{{ key }}</a>
            </th>
      </thead>
      <tbody>
        <tr data-ng-repeat=" user in User.users | orderBy:User.predicate:User.reverse | filter:searchUser ">
          <td data-ng-repeat="(key, value) in user ">{{ value }}</td>
        </tr>
      </tbody>
    </table>

<!-- Course -->
    <div data-ng-controller=" CourseController as Course ">
      <h2>{{ Course.title }}</h2>

      <label><input type="text" data-ng-model="searchCourse" placeholder="Search"></label>
      <table>
        <thead>
              <th data-ng-repeat="(key, value) in Course.courses[0]" 
                  data-ng-click="Course.orderBy(key)">
                    <a href="">{{ key }}</a>
              </th>
        </thead>
        <tbody>
          <tr data-ng-repeat=" course in Course.courses | orderBy:Course.predicate:Course.reverse | filter:searchCourse ">
            <td data-ng-repeat=" (key, value) in course ">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
<!-- Teacher -->
    <div data-ng-controller="TeacherController as Teacher">
      <h2>{{ Teacher.title }}</h2>
  
      <label><input type="text" data-ng-model="searchTeacher" placeholder="Search"></label>
      <table>
         <thead>
            <tr>
              <th data-ng-repeat="(key, value) in Teacher.teachers[0]" 
                  data-ng-click="Teacher.orderBy(key)">
                    <a href="">{{ key }}</a>
              </th>
            </tr>
          </thead>
        <tbody>
          <tr data-ng-repeat=" teacher in Teacher.teachers | orderBy:Teacher.predicate:Teacher.reverse | filter:searchTeacher ">
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
          vm.predicate = '';
          vm.reverse = false;
          vm.orderBy = orderBy;

          vm.users = [
            {name: 'Suissa', email: 'suissera@manoveio.com', forks: 987}
          , {name: 'João', email: 'joao@macioesedoso.com', forks: 573}
          , {name: 'Franciele', email: 'fran@quimica.com', forks: 173}
          ];

           function orderBy(key) {
            if (
              key == vm.predicate) 
              vm.reverse = !vm.reverse;
            else {
              vm.predicate = key;
              vm.reverse = false;
            }
          }

        }

        function CourseController() {
          var vm = this;
          vm.title = 'Be MEAN - Courses';
          vm.predicate = '';
          vm.reverse = false;
          vm.orderBy = orderBy;

          vm.courses = [
            {name: 'Be MEAN', teacher: 'Suissa', stars: 1012},
            {name: 'Learning Machine', teacher: 'Ivan Gustavo', stars: 1931},
            {name: 'Laravel', teacher: 'Michael Douglas', stars: 1325}
          ];

           function orderBy(key) {  // acho que eu podia usar de fora para não precisar repetir sempre isso.
            if (
              key == vm.predicate) 
              vm.reverse = !vm.reverse;
            else {
              vm.predicate = key;
              vm.reverse = false;
            }
          }

        }
        function TeacherController() {
          var vm = this;
          vm.title = 'Teachers';
          vm.predicate = '';
          vm.reverse = false;
          vm.orderBy = orderBy;

          vm.teachers = [
            {name: 'Kyung Oghenero', course: 'Node', entrance: 12},
            {name: 'Nika Gnaeus', course: 'D3', entrance: 10},
            {name: 'Chariovalda Lynna', course: 'React', entrance: 19},
            {name: 'Manuel Gautier', course: 'Vue', entrance: 08}
          ];

          function orderBy(key) { // acho que eu podia usar de fora para não precisar repetir sempre isso.
            if (
              key == vm.predicate) 
              vm.reverse = !vm.reverse;
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

<!DOCTYPE html>
<html data-ng-app="AnyApp">
  <head>
    <meta charset="utf-8">
    <title>Aula 05 - ex 02</title>
  </head>
  <!-- User -->
  <body data-ng-controller="UserController as User">

    <h1>{{ User.title }}</h1>

      <label><input type="text" data-ng-model="form.user.name" placeholder="name"></label><br>
      <label><input type="text" data-ng-model="form.user.email" placeholder="email"></label><br>
      <label><input type="text" data-ng-model="form.user.forks" placeholder="forks"></label><br>
      <button data-ng-click="User.add(form.user)">ADD</button><br>

    <label><input type="text" data-ng-model="searchUser" placeholder="Search"></label>
    <table>
      <thead>
            <th data-ng-repeat="(key, value) in User.users[0]" 
                data-ng-click="User.orderBy(key)">
                  <a href="">{{ key }}</a>
            </th>
      </thead>
      <tbody>
        <tr data-ng-repeat=" user in User.users | orderBy:User.predicate:User.reverse | filter:searchUser ">
          <td data-ng-repeat="(key, value) in user ">{{ value }}</td>
        </tr>
      </tbody>
    </table>

<!-- Course -->
    <div data-ng-controller=" CourseController as Course ">
      <h2>{{ Course.title }}</h2>

      <label><input type="text" data-ng-model="form.course.name" placeholder="name"></label><br>
      <label><input type="text" data-ng-model="form.course.teacher" placeholder="teacher"></label><br>
      <label><input type="text" data-ng-model="form.course.stars" placeholder="stars"></label><br>
      <button data-ng-click="Course.add(form.course)">ADD</button><br>

      <label><input type="text" data-ng-model="searchCourse" placeholder="Search"></label>
      <table>
        <thead>
              <th data-ng-repeat="(key, value) in Course.courses[0]" 
                  data-ng-click="Course.orderBy(key)">
                    <a href="">{{ key }}</a>
              </th>
        </thead>
        <tbody>
          <tr data-ng-repeat=" course in Course.courses | orderBy:Course.predicate:Course.reverse | filter:searchCourse ">
            <td data-ng-repeat=" (key, value) in course ">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
<!-- Teacher -->
    <div data-ng-controller="TeacherController as Teacher">
      <h2>{{ Teacher.title }}</h2>
  
      <label><input type="text" data-ng-model="form.teacher.name" placeholder="Name"></label><br>
      <label><input type="text" data-ng-model="form.teacher.course" placeholder="Course"></label><br>
      <label><input type="text" data-ng-model="form.teacher.entrance" placeholder="Entrance"></label><br>
      <button data-ng-click="Teacher.add(form.teacher)">ADD</button><br>
    

      <label><input type="text" data-ng-model="searchTeacher" placeholder="Search"></label>
      <table>
         <thead>
            <tr>
              <th data-ng-repeat="(key, value) in Teacher.teachers[0]" 
                  data-ng-click="Teacher.orderBy(key)">
                    <a href="">{{ key }}</a>
              </th>
            </tr>
          </thead>
        <tbody>
          <tr data-ng-repeat=" teacher in Teacher.teachers | orderBy:Teacher.predicate:Teacher.reverse | filter:searchTeacher ">
            
            <td>{{ teacher.name }} </td>
            <td><strong>{{ teacher.course | uppercase }}</strong></td>
            <td><strong>Horário da aula</strong> {{ teacher.entrance }} - {{ teacher.entrance | whatTime }} </td>
    
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
          .controller('TeacherController', TeacherController)
          .filter('whatTime', function() {
                return function(text) {
                    if(text) {
                        var hour = text;
                       
                        var options = [
                            hour <= 12,  // antes do meio dia
                            hour > 12 && hour <= 18, 
                            hour > 18 && hour <= 24,
                            hour < 24 // limita até 24
                          ];

                        switch (options.indexOf(true)) {
                            case (0):
                                return 'Aula diurna!';
                            case (1):
                                return 'Aula vespertina!';
                            case (2):
                                return 'Aula noturna!';
                            default:
                                return 'Horário inválido';
                         }
                    };
                };
            });

        function UserController() {
          var vm = this;
          vm.title = 'Be MEAN - Users';
          vm.add = add;
          vm.predicate = '';
          vm.reverse = false;
          vm.orderBy = orderBy;

          vm.users = [
            {name: 'Suissa', email: 'suissera@manoveio.com', forks: 987}
          , {name: 'João', email: 'joao@macioesedoso.com', forks: 573}
          , {name: 'Franciele', email: 'fran@quimica.com', forks: 173}
          ];

           function orderBy(key) {
            if (
              key == vm.predicate) 
              vm.reverse = !vm.reverse;
            else {
              vm.predicate = key;
              vm.reverse = false;
            }
          }

          function add(user) {
            vm.users.push(angular.copy(user));
          }


        }

        function CourseController() {
          var vm = this;
          vm.title = 'Be MEAN - Courses';
          vm.add = add;
          vm.predicate = '';
          vm.reverse = false;
          vm.orderBy = orderBy;

          vm.courses = [
            {name: 'Be MEAN', teacher: 'Suissa', stars: 1012},
            {name: 'Learning Machine', teacher: 'Ivan Gustavo', stars: 1931},
            {name: 'Laravel', teacher: 'Michael Douglas', stars: 1325}
          ];

           function orderBy(key) {  // acho que eu podia usar de fora para não precisar repetir sempre isso.
            if (
              key == vm.predicate) 
              vm.reverse = !vm.reverse;
            else {
              vm.predicate = key;
              vm.reverse = false;
            }
          }

          function add(course) {
            vm.courses.push(angular.copy(course));
          }
        }
        function TeacherController() {
          var vm = this;
          vm.title = 'Teachers';
          vm.add = add;
          vm.predicate = '';
          vm.reverse = false;
          vm.orderBy = orderBy;

          vm.teachers = [
            {name: 'Kyung Oghenero', course: 'Node', entrance: 12},
            {name: 'Nika Gnaeus', course: 'D3', entrance: 10},
            {name: 'Chariovalda Lynna', course: 'React', entrance: 19},
            {name: 'Manuel Gautier', course: 'Vue', entrance: 08}
          ];

          function orderBy(key) { // acho que eu podia usar de fora para não precisar repetir sempre isso.
            if (
              key == vm.predicate) 
              vm.reverse = !vm.reverse;
            else {
              vm.predicate = key;
              vm.reverse = false;
            }
          }

          function add(teacher) {
            vm.teachers.push(angular.copy(teacher));
          }

        }
        
    </script>
  </body>
</html>


```