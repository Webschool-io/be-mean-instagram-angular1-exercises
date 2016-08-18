angular.module('BeMEAN', ['ngAnimate', 'ngMessages'])
    .controller('UserController', UserController);

function UserController() {
    var vm = this;

    vm.form = {};
    vm.titulo = "Be MEAN - Usuários";
    vm.editing = false;
    vm.reverse = false;
    vm.tituloStyleClass = "h1";

    vm.regexPhone = /9?([0-9]{4})-?([0-9]{4})/;
    vm.dateError = /(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}/;
    vm.numError = /[-+]?[0-9]*[.,]?[0-9]+/;
    vm.pwdError = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    vm.users = [
            {name: 'Suissa', email: 'suissera@manoveio.com', type: 'teacher', active: true},
            {name: 'João', email: 'joao@macioesedoso.com', type: 'student', active: false},
            {name: 'Franciele', email: 'fran@quimica.com', type: 'teacher', active: false},
            {name: 'Maria', email: 'm@gmail.com', type: 'student', active: true},
            {name: 'Jose', email: 'js@gmail.com', type: 'student', active: true}
    ];

    vm.lista_com_valor_inicial = vm.users[0].email;

    function getKeyLength() {
        return Object.keys(angular.copy(vm.users[0])).length;
    }
    vm.keysLength = getKeyLength();


    function orderByName(){
        vm.predicate = 'name';
        vm.reverse = !vm.reverse;
    }
    vm.orderByName = orderByName;

    function orderByEmail(){
        vm.predicate = 'email';
        vm.reverse = !vm.reverse;
    }
    vm.orderByEmail = orderByEmail;

    vm.add = add;
    function add(user) {
        if (vm.users.name.$valid) {
            vm.users.push(angular.copy(user));
            vm.form = {};
        } else {
            console.log("FUUUUDEU, DEU MERDA!!!");
        }
    }

    vm.remove = remove;
    function remove(users) {
        vm.users = users.filter(function(el){ return !el.selecionado });
    }

    vm.edit = edit;
    function edit(user, index) {
        vm.form = angular.copy(user);
        vm.form.index = index;
        vm.editing = true;
    }

    vm.save = save;
    function save(user) {
        function saveUser(el, i){
            if(i === user.index) {
                delete user.index;
                return angular.copy(user);
            }
            return el;
        }

        var users = vm.users.map(saveUser);
        vm.users = users;
        vm.editing = false;
        vm.form = {};
    }

    vm.submitForm = submitForm;
    function submitForm(user) {
        add(user);
    }
}
