# AngularJS - Aula 05 - Exercício  
**user:** [gkal19](https://github.com/gkal19)  
**autor:** Gabriel Kalani
 
**Data:** 1463684745 

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
 
```js
 vm.ordenar = ordenar;
 function ordenar(campo) {
 	console.log(campo);
 	vm.predicate = campo;
 	vm.reverse = !vm.reverse;
 }
 ```
 
## Criar mais 1 Controller para Teachers com seu form para adição, listagem (defina um Array inicial) com a ordenação do exercício anterior, filtro filter e também use o seu filtro criado na segunda aula.

 ```js
 			function ProfessorController() {
 				var vm = this;
 				vm.titulo = "Webschool - Professores";
 				vm.professores = [
 					{Nome: 'Jean Carlo Nascimento', Idade:30, Palestrante: 'Sim'}
			      	,{Nome: 'Vagner Kaefer', Idade:30, Palestrante:'Não definido'}
			      	,{Nome: 'Anderson Faro', Idade:30, Palestrante:'Não definido'}
 				]
 				vm.addProf = addProf;
 				function addProf(professor) {
 					vm.professores.push(angular.copy(professor));
 				}
 			}
 ```
 
```html
<!-- `Form` para adicionar usuários -->
<p>
 			<label>Nome:
 				<input type="text" data-ng-model="form.User.nome">
 			</label>
 			</br>
 			<label>E-mail:
 				<input type="text" data-ng-model="form.User.email">
 			</label>
 			</br>
 			<label>Username:
 				<input type="text" data-ng-model="form.User.username">
 			</label>
 		</p>
 		<button data-ng-click="User.addUser(form.User)">Adicionar</button></br>
```
 

 ```html
 <!-- `Form` para adicionar professores -->
 <p>
 			<label>Nome:
 				<input type="text" data-ng-model="form.prof.nome">
 			</label>
 			</br>
 			<label>Idade:
 				<input type="number" data-ng-model="form.prof.idade">
 			</label>
 			</br>
 			<label>Palestrante:
 				<input type="text" data-ng-model="form.prof.palestrante">
 			</label>
 		</p>
 		 <button data-ng-click="Professor.addProf(form.prof)">Adicionar</button></br>
 ```
 
 [Arquivo Index.html](https://github.com/webschool-io/be-mean-instagram-angular1-exercises/blob/master/class-05/gkal19/index.html)
 
 