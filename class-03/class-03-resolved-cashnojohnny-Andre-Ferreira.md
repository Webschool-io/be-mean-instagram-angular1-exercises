```html
  <div data-ng-controller="TeacherController as Teacher">
    <h1>{{ Teacher.title }}</h1>
    <ul>
      <li data-ng-repeat="teacher in Teacher.teachers">
        {{ teacher.name }} - {{ teacher.age | checkAge }}
      </li>
    </ul>
  </div>

  <script>
    angular.module("BeMEAN", [])
      .filter('checkAge', function() {
        return function(text) {
          if (text) {
            if (isNaN(text)) return 'Idade inválida';
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
        { name: 'Suissaa', age: 28 },
        { name: 'John Snow', age: 33 },
        { name: 'André', age: 17 }
      ]
    }
  </script>
```
