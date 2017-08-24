# AngularJS - Aula 07 - Exercício
**user:** [MagnumCortez](https://github.com/MagnumCortez)  

**autor:** Magnum cortez

## 1 - Fazer a função do save o Controller de Professores e utilizar o forEach em vez do map

```html
<!DOCTYPE html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <title>Class 07</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
  <style>
    .wrapper{
      max-width: 600px;
      margin: 0 auto;
    }
  </style>
</head>
<body data-ng_controller="TeacherController as Teacher">
  <section class="row wrapper">
    <h1>{{Teacher.titulo}}</h1>
    <p class="col s12">
      <label>
        <input type="text" ng-model="Teacher.form.name" placeholder="Name">
      </label>
      <br>
      <label>
        <input type="text" ng-model="Teacher.form.course" placeholder="Course">
      </label>
      <br>
      <label>
        <input type="text" ng-model="Teacher.form.duration" placeholder="Duration">
      </label>
      
      <button data-ng-click="Teacher.add(Teacher.form)" class="btn btn-large green waves-effect waves-light col s6">Add Teacher</button>

      <button data-ng-click="Teacher.save(Teacher.form)" class="btn btn-large blue waves-effect waves-light col s6">Save Teacher</button>
    </p>

    <table border="1">
      <thead>
        <tr>
          <th colspan="{{ Teacher.keyLength +1 }}">
            <label>
              <input ng-model="searchTeacher" placeholder="Search">
            </label>
          </th>
        </tr>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Course</th>
          <th>Duarion</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="teacher in Teacher.teachers | filter:searchTeacher">
          <td>
            <input type="checkbox" id="teacher-{{$index}}" ng-model="teacher.selecionado"/>
            <label for="teacher-{{$index}}"></label> <!-- Usa-se por causa do materializeCSS -->
          </td>
          <td>{{ teacher.name }}</td>
          <td>{{ teacher.course }}</td>
          <td>{{ teacher.duration }}</td>
          <td>
            <button data-ng-click="Teacher.edit(teacher, $index)" class="btn btn-large blue waves-effect waves-light col s12" type="submit">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button data-ng-click="Teacher.remove(Teacher.teachers)" class="btn btn-large red waves-effect waves-light col s12">Delete</button>
  </section>

<script src="angular.min.js"></script>
<script>
  angular.module("BeMEAN",[])
  .controller("TeacherController", TeacherController)

  function TeacherController() {
    var vm = this;
    vm.titulo = "Professores";
    vm.teachers = [
      {name: 'Marcos Furtado', course: 'Linux', duration: '20 Horas'},
      {name: 'Eduardo Soares', course: 'PHP - Designer Patterns', duration: '8 Horas'},
      {name: 'Yuri Snoffer', course: 'Git e Bash', duration: '30 Horas'},
      {name: 'Valdir Tio', course: 'node.js', duration: '18 Horas'},
      {name: 'Talita Camilo', course: 'FrontEnd', duration: '15 Horas'},
      {name: 'Pedro Silva', course: 'Teste TDD', duration: '6 Horas'}
    ];
    vm.keyLength = Object.keys(vm.teachers[0]).length;

    vm.add = add;
    function add(teacher) {
      vm.teachers.push(angular.copy(teacher));
    }

    vm.edit = edit;
    function edit(teacher, index) {
      vm.form = angular.copy(teacher);
      vm.form.index = index;
    }

    vm.save = save;
    function save(teacher) {
      vm.teachers.forEach(function(el, i) {
        if (i === teacher.index) {
          vm.teachers.splice(i,1,angular.copy(teacher));
        }
      });
    }

    vm.remove = remove;
    function remove(teachers) {
      vm.teachers = teachers.filter(function(el) {
        return !el.selecionado;
      });
    }
  }
</script>
</body>
</html>
```