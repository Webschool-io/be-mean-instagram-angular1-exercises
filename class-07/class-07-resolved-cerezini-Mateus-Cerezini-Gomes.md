# Angularjs 1 - Aula 07 - Exercício

User: [Cerezini](https://github.com/cerezini)

Autor: Mateus Cerezini Gomes

Data: 1464056564542

## 1. Fazer a função do **save** do Controller de Professores e utilizar o **forEach** em vez de **map**.

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
  <style>
    .wrapper {
      max-width: 600px;
      margin: 0 auto;
    }
  </style>
</head>
<body data-ng-controller="TeacherController as Teacher">

  <section class="row wrapper">
    <h1>{{ Teacher.title }}</h1>
    <p class="col s12">
      <label>
        <input type="text" data-ng-model="Teacher.form.name" placeholder="Name">
      </label>
      <br>
      <label>
        <input type="email" data-ng-model="Teacher.form.email" placeholder="Email">
      </label>
      <label>
        <input type="text" data-ng-model="Teacher.form.courses" placeholder="Courses">
      </label>
    </p>
    <button data-ng-click="Teacher.add(Teacher.form)" class="btn btn-large green waves-effect waves-light col s6">Add</button>
    <button data-ng-click="Teacher.save(Teacher.form)" class="btn btn-large blue waves-effect waves-light col s6">Save</button>
    <table>
      <thead>
        <tr>
          <th colspan="5">
            <label>
              <input ng-model="searchTeacher" placeholder="Search">
            </label>
          </th>
        </tr>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Courses</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="t in Teacher.teachers | filter:searchTeacher ">
          <td>
            <input type="checkbox" id="teacher-{{$index}}" ng-model="t.selecionado" />
            <label for="teacher-{{$index}}"></label>
          </td>
          <td>{{ t.name }}</td>
          <td>{{ t.email }}</td>
          <td>{{ t.courses }}</td>
          <td>
            <button data-ng-click="Teacher.edit(t, $index)" class="btn blue waves-effect waves-light col s12" type="submit" name="action">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button data-ng-click="Teacher.remove(Teacher.teachers)" class="btn btn-large red waves-effect waves-light col s12" type="submit" name="action">Remove
    </button>
  </section>

  <script src="../../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('TeacherController', TeacherController);

    function TeacherController() {
      var vm = this;
      vm.title = 'Be Mean - Teachers';
      vm.teachers = [
        {name: 'Russomano', email: 'russomano@bol.com.br', courses: 'Capoeira'},
        {name: 'Pedro Pedreira', email: 'pedropedra@bol.com.br', courses: 'Artesanato, Surf'},
        {name: 'Paulo Pão de Batata', email: 'potatopaulo@potato.br', courses: 'Web, Mongodb'},
        {name: 'Jaiminho', email: 'jaiminho@chaves.mx', courses: 'Matemática, Inglês'}
      ];

      vm.add = add;
      function add(teacher) {
        vm.teachers.push(angular.copy(teacher));
      }

      vm.remove = remove;
      function remove(teachers) {
        vm.teachers = teachers.filter( el => !el.selecionado);
      }

      vm.edit = edit;
      function edit(teacher, index) {
        vm.form = angular.copy(teacher);
        vm.form.index = index;
      }

      vm.save = save;
      function save(teacher) {
        let index = teacher.index;
        delete teacher.index;
        vm.teachers.splice(index, 1, teacher);
        // var teachers = [];
        // vm.teachers.forEach( (el, i) => {
        //   if (i === teacher.index) {
        //     delete teacher.index;
        //     teachers.push(teacher);
        //   }
        //   else {
        //     teachers.push(el);
        //   }
        // });
        // vm.teachers = teachers;
      }
    }
  </script>
</body>
</html>
```
