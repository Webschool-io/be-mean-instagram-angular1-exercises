# AngularJS 1 - Aula 01 - Exercício

Nome: Amanda Vilela

Github: amandavilela

Data: 03/07/2016 - 17:18

## 1 - Explique qual é a definição de MVC, MVVM e MVP

### MVC (Model/View/Controller)

#### Model

Onde ficam os dados da aplicação, responsável pela leitura/escrita de dados e suas validações.

#### View

Onde os dados do Model são exibidos.

#### Controller

Recebe todas as requisições do usuário e manipula os dados que ficam no Model.

### MVVM (Model/View/ViewModel)

#### Model

Contém a lógica de negócios e os dados.

#### View

Define a aparência/estrutura exibida na tela.

#### ViewModel

Disponibiliza para a View uma lógica de apresentação.


### MVVM (Model/View/Presenter)

#### Model

Onde ficam os dados da aplicação, responsável pela leitura/escrita de dados e suas validações.

#### View

Onde os dados do Model são exibidos.

#### Presenter

Ligação entre View e Model, atualiza a View quando o Model é alterado e sincroniza o Model em relação à View.

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```
<input type="text" name="email" data-ng-model="nome" placeholder="Nome">

<input type="text" name="nome" data-ng-model="email" placeholder="E-mail">

<input type="text" name="telefone" data-ng-model="telefone" placeholder="Telefone"  />
</div>

</form>

<strong>Dados</strong>
<p>Nome: {{ nome }}</p>
<p>E-mail: {{ email }}</p>
<p>Telefone: {{ telefone }}</p>
```
