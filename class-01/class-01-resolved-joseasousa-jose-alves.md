# AngularJS - Aula 01 - Exercício
**user:** [joseasousa](https://github.com/joseasousa/)  
**autor:** Jose Alves De Sousa Neto

#### 1- Explique qual é a definição de MVC, MVVM,MVP 

## Model
```
Model é onde ira ficar a representação dos objetos do banco
```
## View

```
View são as telas onde ira ter a interação com o usuario
```
## Controller

```
Controller é a "cola" entre as view e os models, é onde ira se implementar a  parte lojica
```

### MVC (Model/View/Controller)
```
MVC é o modelo de camadas de aplicação onde se divide em model, view e controller
```


### MVVM (Model/View/ViewModel)
```
MVVM é o modelo de camadas onde se contacta uma view ela cham um model e retorna para outra view
```

### MVP

```
é o modelo baseado em apresentação 
```


## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```html
<div ng-app="Formulario">

<input type="text" name="email" data-ng-model="nome" placeholder="Nome">

<input type="email" name="nome" data-ng-model="email" placeholder="E-mail">

<input type="tel" name="telefone" data-ng-model="telefone" placeholder="Telefone"  />

<input type="number" name="idade" data-ng-model="idade" placeholder="Idade"  />
</div>

</form>

<strong>Dados</strong>
<p>Nome: {{ nome }}</p>
<p>E-mail: {{ email }}</p>
<p>Telefone: {{ telefone }}</p>
<p>Idade: {{ idade }}</p>

</div>
```
