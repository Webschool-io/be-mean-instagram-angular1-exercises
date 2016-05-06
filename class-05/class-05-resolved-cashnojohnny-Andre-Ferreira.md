## Exercício 1

# data-ng-click
```html
<thead>
  <tr>
    <th data-ng-repeat="(key, value) in User.users[0]"
      data-ng-click="User.orderBy(key)">{{ key }} </th>
  </tr>
</thead>
```

# controller
```html
<script>
  angular.module("BeMEAN", [])
    .controller('UserController', UserController);

  function UserController() {
    var vm = this;
    vm.title = 'Be MEAN - Users';
    vm.users = [
      { name: 'Suissaa', email: 'suissa@suissa.com' },
      { name: 'John Snow', email: 'john@got.com' },
      { name: 'André', email: 'andre@and.com'  }
    ];

    vm.add = add;
    function add(user) {
      vm.users.push(angular.copy(user));
    }

    // default orderBy
    vm.reverse = false;
    vm.predicate = 'name';

    vm.orderBy = orderBy;
    function orderBy(predicate) {
      vm.reverse = vm.predicate === predicate ? !vm.reverse: false;
      vm.predicate = predicate;
    }
  }
</script>
```

## Exercício 2

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  <title>Be MEAN</title>
</head>
<body>
  <div data-ng-controller="TeacherController as Teacher">
    <h1>{{Teacher.title}}</h1>
    <label>Busca: <input data-ng-model="searchTeacher"></label>

    <p>
      <label>Name:<input type="text" data-ng-model="form.Teacher.name"></label>
      <br/>
      <label>Email:<input type="email" data-ng-model="form.Teacher.email"></label>
      <br/>
      <label>Idade:<input type="number" data-ng-model="form.Teacher.age"></label>
      <button type="button" data-ng-click="Teacher.add(form.Teacher)">ADD TEACHER</button>
    </p>

    <table>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in Teacher.teachers[0]"
            data-ng-click="Teacher.orderBy(key)">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="teacher in Teacher.teachers | orderBy:Teacher.predicate:Teacher.reverse |
          filter:searchTeacher">
          <td data-ng-repeat="info in teacher">{{ info | checkAge }} </td>
        </tr>
      </tbody>
    </table>
  </div>

  <script>
    angular.module("BeMEAN", [])
      .filter('checkAge', function() {
        return function(text) {
          if (text) {
            if (isNaN(text)) return text;
            if (text >= 18) return 'Maior de 18 anos';
            else return 'Menor de 18 anos';
          }
        }
      })
      .controller('TeacherController', TeacherController);

    function TeacherController() {
      var vm = this;
      vm.title = 'Be MEAN - Professores';
      vm.teachers = [
        { name: 'Claudio', email: 'clausio@ssa.com', age: 28 },
        { name: 'Zulmira', email: 'zuzu@got.com', age: 33 },
        { name: 'Teacher XXX', email: 'techx@and.com', age: 17 }
      ];

      vm.add = add;
      function add(teacher) {
        vm.teachers.push(angular.copy(teacher));
      }

      // default orderBy
      vm.reverse = false;
      vm.predicate = 'name';

      vm.orderBy = orderBy;
      function orderBy(predicate) {
        vm.reverse = vm.predicate === predicate ? !vm.reverse: false;
        vm.predicate = predicate;
      }
    }
  </script>
</body>
</html>
```
