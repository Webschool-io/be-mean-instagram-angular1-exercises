# AngularJS - Aula 01 - Exercício  

## 1 - Explique qual é a definição de MVC, MVVM e MVP

MVC: Model View Controller.
-Model é a camada de dados
-Controller manipula os dados
-View apresenta os dados

MVVM: Model View ViewModel

-O Model encapsula a lógica de negócios e os dados. O Model nada mais é do que o modelo de domínio de uma aplicação, 
ou seja, as classes de negócio que serão utilizadas em uma determinada aplicação. 
Ele também contém os papéis e a validação dos dados de acordo com o negócio, cuja aplicação em questão visa a atender.

-A View é definir a aparência ou a estrutura que o usuário vê na tela. 
Sendo assim, a View não deve ter nenhuma outra responsabilidade ou qualquer regra de negócio. 
A View se liga ao ViewModel através de um conceito denominado **Binding**. 

-A responsabilidade da ViewModel, no contexto do MVVM, é disponibilizar para a View uma lógica de apresentação.
A View Model não tem nenhum conhecimento específico sobre a view, ou sobre como ela é implementada, nem o seu tipo. 
A ViewModel implementa propriedades e comandos para que a View possa preencher seus controles, e a notifica caso haja alteração de estado, através de eventos.


MVP: Model View Presenter 

-View: é o formulário que exibirá os dados, não contém regra alguma do negócio a não ser disparar eventos que notificam mudança de estado dos dados que ele exibe e processamento próprio dele, como por exemplo código para fechar o formulário. 
Um objeto view implementa uma interface que expõe campos e eventos que o presenter necessita.

-Model: São os objetos que serão manipulados. Um objeto Model implementa uma interface que expõe os campos que o presenter irá atualizar quando sofrerem alteração na view.

-Presenter: É a ligação entre View e Model, possui papel de mediador entre eles. Ele é encarregado de atualizar o view quando o model é alterado e de sincronizar o model em relação ao view.

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <title>BeMEAN AngularJS</title>
</head>
<body data-ng-app="BeMEAN">
  <div class="container">
    <h1>BeMEAN AngularJS - Exercício 1</h1>
    <form class="">
      <div class="form-group">
        <label for="nome">Nome: </label>
        <input type="text" class="form-control" name="nome" data-ng-model="nome">
      </div>

      <div class="form-group">
        <label for="email">E-mail: </label>
        <input type="text" class="form-control"name="email" data-ng-model="email">
      </div>

      <div class="form-group">
        <label for="telefone">Telefone: </label>
        <input type="text" class="form-control" required="required" maxlength="15" name="telefone" data-ng-model="telefone"  />
      </div>

    </form>

    <label>Dados de Contato:</label>
    <p>Nome: {{nome}}</p>
    <p>E-mail: {{email}}</p>
    <p>Telefone: {{telefone}} </p>
  </div>

  <script>
    angular.module("BeMEAN", []);
  </script>
</body>
</html>