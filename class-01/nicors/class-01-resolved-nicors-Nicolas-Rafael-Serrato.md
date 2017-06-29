# AngularJS - Aula 01 - Exercício 1 e 2
**Autor:** Nicolas Serrato
**User:** [nicors](https://github.com/nicors)
**Data:** 1498139553570

##   1- Explique qual a definição de MVC, MVVM e MVP.
**MVC**, **MVVM** e **MVP** são *padrões de arquitetura de software*, eles são muito parecidos quebrando o código em camadas, separando a interação com o usuário da manipulação de dados, permitindo **reuso** de código, **facilidade** de implementação de novas funcionalidades e **manutenção** do código.

### MVC
**MVC** se divide em 3 camadas, **Model**, **View** e **Controller**.
A camada de **Model** é responsável pela manipulação dos dados, **leitura**, **escrita** e **validação**.

A camada **View** é a camada de **interação** com o usuário, onde é exibido os dados para o usuário(**output**) e também responsável por receber novos dados do usuário(**input**).

**Controller** é a camada que vai receber as **requisições** do usuário, sendo reponsável por **solicitar** os dados ao **Model** correto e aprensetar a **View** correta ao usuário.

Resumindo, o usuário vai entrar com alguma **requisição** na **view**, esta irá se comunicar com o **Controller** informando a solicitação do usuário, o **Controller** com os **dados** passados pela **View** em mãos, irá localizar o **Model** correto e solicitar um **processamento** desses dados, o **Model** processa e retorna os dados para o **Controller** que por sua vez passa para a **View** exibir o resultado para o usuário.

### MVVM
O **MVVM** possui 3 camadas, **Model**, **View** assim como no **MVC** o que difere é a terceira camada que é **ViewModel** responsável pela comunicação entre o o **Model** e a **View** ele tem total acesso e conhecimento sobre a camada **Model** e fornece apenas uma lógica de apresentação para a **View** sem conhecimento algum ou qualquer tipo de preocupação de como a **View** funciona.

### MVP
O **MVP** é uma evolução do **MVC** onde a camada **Presenter** assume as responsabilidades da camada **Controller** realizando a comunicação entre o **Model** e a **View** além disso no **MVP** a camada **View** passa a ser responsável pelos eventos de **UI**(*User Interface*) que em **MVC** seria responsabilidade do **Controller**. 

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

*Obs: Aquivo index.html junto a pasta para testes*

```html
<!DOCTYPE html>
<html lang="pt-BR" ng-app="class01">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Class 01 - Exercício 02</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/css/materialize.min.css">
</head>
<body>
    <div class="container">
        <h2>Contato</h2>
        <form action="contato.js" method="post">
            <label for="nome">
                <input class="" type="text" placeholder="Nome" data-ng-model="nome">
            </label>
            <label for="email">
                <input class="" type="text" placeholder="E-mail" data-ng-model="email">
            </label>
            <label for="msg">
                <textarea class="" type="text" placeholder="Mensagem" data-ng-model="msg">
                </textarea>
            </label>
        </form>
    </div>

    <div class="container">
      <h2 class="">Visualização</h2>
      <p><strong>Nome:</strong> {{ nome }}</p>
      <p><strong>E-mail:</strong> {{ email }}</p>
      <p><strong>Mensagem:</strong> {{ msg }}</p>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/js/materialize.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  <script>
    angular.module('class01', []);
</script>
</body>
</html>
```