# AngularJS - Aula 01 - Exercício

**Nome: Antonio Marcos Alves de Lima**

**Github : https://github.com/antoniomalves**

**Data: 1462735865 (Timesamp Linux - BRT)**


## 1 - Explique  qual a definição de MVC, MVVM e MVP.

`MVC` - É um acrônimo de Model-View-Controller.
é um padrão de arquitetura de software(design pattern), usado para separar a aplicação em 3 camadas.
A camada de interação do usuário(view), a camada de manipulação dos dados(model) e a camada de controle(controller).

`MVVM` - É um acrônimo de Model-View-ViewModel. É um padrão de arquitetura que foi criado
por John Gossman, um dos arquitetosda WPF e Silverlight na Microsoft. Esse padrão se assemelha em muito com o padrão MVP e é especifico
para a arquitetura do WPF e Silverlight, também é uma especialização do padrão PM(Presentation-Model), introduzido por Martin Fowler em 2004.
A comuniação entre as camadas view-model e view é feita por um mecanismo denominado binding
O Model - é a entidade que representa o conceito lógico do negócio.
A view - tem a responsabilidade  de separar e definir a aparência ou a estrutura que o usuário vê na tela.
O ViewModel - contém a lógica de interface do usuário, os comandos, os eventos, e uma referência para o modelo. A ViewModel
implementa propriedades e comandos para que a View possa preencher seus controles, e a notifica
caso haja alteração de estado, seja através de eventos ou de notificação de alteração.

`MVP` - É o acrônimo de Model-View-Presenter.
Ele é considerado uma derivação do conceito MVC, o modelo é a camada que trata das regras de negócio, a View também segue o mesmo
papel que possui no MVC, de lidar com a interface do usuário, e o Presenter pode ser visto como a camada Controller do MVC, tendo a responsabilidade
de ligar o Model e a View.
Já que a ideia do MVP é que toda a lógica que normalmente iria ligar a interface do usuário com os dados seja movida para uma classe separada.
No padrão MVP, a interface do usuário não possui processamento algum.
Model - Onde estão contidas as informações e estados das entidades do domínio da aplicação e regras do negócio;
View - é uma interface que exibe os dados e mapeia os comandos do usuário (eventos) para o apresentador sendo responsável pela entrada e saída
Presenter - atua sobre o Model e sobre o View fazendo a comunicação entre eles e retorna os dados do repositório (Model), realiza a persistência e a formatação dos mesmos para exibição no View.


## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <title>Aula 1 - Angular BeMEAN</title>
</head>
<body data-ng-app="BeMEAN">
    <div class="container">
        <form>
            <div class="form-group">
                <label for="nome"> Seu nome:</label>
                <input type="text" name="nome" class="form-control"  placeholder="Nome" data-ng-model="nome"></input>
            </div>
            <div class="form-group">
                <label for="cpf"> CPF:   </label>
                <input type="text" name="cpf" class="form-control" placeholder="CPF" data-ng-model="cpf"></input>
            </div>
            <div class="form-group">
                <label for="endereco"> Endereço: </label>
                <input type="text" name="endereco" class="form-control" placeholder="Endereço" data-ng-model="endereco"></input>
            </div>
        </form>
        <br />
        <fieldset >
              <legend> Dados do Cliente</legend>
              Nome: {{nome}}<br />
              CPF:     {{cpf}}<br />
              Endereço: {{endereco}}<br />
        </fieldset>
    </div>
  <script>
          angular.module('BeMEAN', [])
  </script>
</body>
</html>```