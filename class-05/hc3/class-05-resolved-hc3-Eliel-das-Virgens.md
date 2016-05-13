# AngularJS 1.5.x - Aula 05 - Exercício  
**user:** [hc3](https://github.com/hc3)  
**autor:** Eliel das Virgens

## Criar uma função para ordenar uma tabela a partir de uma coluna clicando em sua th>td ordenando pelo campo da coluna
```html
<table>
			<thead>
				<tr>
					<th data-ng-repeat="(key,value) in User.users[0]"><a href="" data-ng-click="User.ordenar('key')">{{ key }}</a></th>
				</tr>
			</thead>

			<tbody>
				<tr data-ng-repeat="user in User.users | orderBy:User.predicate:User.reverse |filter:searchUser">
					<td data-ng-repeat="(key,value) in user">{{ value }}</td>
				</tr>
			</tbody>
		</table>
```

```html
vm.ordenar = ordenar;
function ordenar(campo) {
	console.log(campo);
	vm.predicate = campo;
	vm.reverse = !vm.reverse;
}
```

## Criar mais 1 controller para teachers com seu form para adição ,listagem defina um array inicial com a ordenação do exercício
anterior , filtro filter e também use o seu filtro criado na segunda aula.

```html
			.controller('ProfessorController',ProfessorController);
			function ProfessorController() {
				var vm = this;
				vm.titulo = "Be Mean - Lista Professores";
				vm.professores = [
					{nome:"Jean",idade:30}
					,{nome:"Jhon Papa",idade:35}
					,{nome:"Addy Osmani",idade:35}
					,{nome:"Linus Turvald",idade:40}
				]
				vm.addProf = addProf;
				function addProf(professor) {
					vm.professores.push(angular.copy(professor));
				}
			}
```

```html
	<p>
			<label>Nome:
				<input type="text" data-ng-model="form.prof.nome">
			</label>
			</br>
			<label>Idade:
				<input type="number" data-ng-model="form.prof.idade">
			</label>
		</p>
		<button data-ng-click="Professor.addProf(form.prof)">Add</button></br>

```