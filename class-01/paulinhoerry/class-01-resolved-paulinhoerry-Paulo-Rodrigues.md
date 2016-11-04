# AngularJS 1 - Aula 01 - Exercício

Nome: Paulo Rodrigues

Github: [paulinhoerry](https://github.com/paulinhoerry)

Data: 03/11/2016

## 1 - Explique qual é a definição de MVC, MVVM e MVP

### MVC (Model/View/Controller)

#### Model

Manipula os dados da aplicação.

#### View

Responsável pela interação com o usuário e exibição dos dados. 

#### Controller

Receber os eventos disparado pelo usuário e manipula os dados que ficam no Model.

### MVVM (Model/View/ViewModel)

#### Model

Contém a lógica de negócios e os dados.

#### View

É o elemento visual.

#### ViewModel

Disponibiliza para a View uma lógica de apresentação.


### MVP (Model/View/Presenter)

#### Model

Onde ficam os dados da aplicação, responsável pela leitura/escrita de dados e suas validações.

#### View

Onde os dados do Model são exibidos.

#### Presenter

Ligação entre View e Model, atualiza a View quando o Model é alterado e sincroniza o Model em relação à View.

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```html
<input type="text" name="email" data-ng-model="nome" placeholder="Nome">

<input type="text" name="nome" data-ng-model="email" placeholder="E-mail">

<input type="text" name="telefone" data-ng-model="telefone" placeholder="Telefone"  />
</div>

</form>

<p>Nome: {{ nome }}</p>
<p>E-mail: {{ email }}</p>
<p>Telefone: {{ telefone }}</p>
```
