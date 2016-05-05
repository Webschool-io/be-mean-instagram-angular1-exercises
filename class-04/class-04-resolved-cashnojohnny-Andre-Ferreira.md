## Controller
```html
  <script>
    angular.module("BeMEAN", [])
      .controller('TeacherController', TeacherController);

    function TeacherController() {
      var vm = this;
      vm.title = 'Be MEAN - Professores';
      vm.teachers = [
        { name: 'Suissaa', email: 'suissa@suissa.com', age: 28 },
        { name: 'John Snow', email: 'john@got.com', age: 33 },
        { name: 'André', email: 'andre@and.com', age: 17 }
      ]
    }
  </script>
```
## Exercício 1
```html
<div data-ng-controller="TeacherController as Teacher">
  <table>
    <thead>
      <tr>
        <th data-ng-repeat="(key, value) in Teacher.teachers[0]">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="teacher in Teacher.teachers | orderBy:'email':true">
        <td data-ng-repeat="info in teacher">{{ info }}</td>
      </tr>
    </tbody>
  </table>
</div>
```
## Exercício 2
```html
<div data-ng-controller="TeacherController as Teacher">
  <span data-ng-init="predicate = 'email'; reverse = false" />
  <table>
    <thead>
      <tr>
        <th data-ng-repeat="(key, value) in Teacher.teachers[0]">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="teacher in Teacher.teachers | orderBy:predicate:reverse">
        <td data-ng-repeat="info in teacher">{{ info }}</td>
      </tr>
    </tbody>
  </table>
</div>
```
## Exercício 3
```html
<div data-ng-controller="TeacherController as Teacher">
  <label>Busca: <input data-ng-model="searchTeacher">
  <span data-ng-init="predicate = 'email'; reverse = false" />
  <table>
    <thead>
      <tr>
        <th data-ng-repeat="(key, value) in Teacher.teachers[0]">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="teacher in Teacher.teachers | orderBy:predicate:reverse |
        filter:searchTeacher">
        <td data-ng-repeat="info in teacher">{{ info }}</td>
      </tr>
    </tbody>
  </table>
</div>
```
