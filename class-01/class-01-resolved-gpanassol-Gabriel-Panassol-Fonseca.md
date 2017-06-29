# AngularJS 1 - Aula 01 - Exercício

Nome: Gabriel Panassol
Github: https://github.com/gpanassol
Data: 14/02/2017 - 23:29

## 1 - Explique qual é a definição de MVC, MVVM e MVP

### MVC

O MVC é uma arquitetura de software muito utilizada para aplicação web. Ela é separa por três camadas, que por sinal é a sua sigla:

#### M - Model
Basicamente o modelo é onde eu tenho os dados. Ele é responsável pela leitura, escrita e validação desses dados.

#### V - View
Camada de visualização. Nela esta toda as 'telas' que interagem com o usuário.

#### C - Controller
Camada responsável por receber as requisições do usuário.

### MVVM

O MVVM, visa estabelecer uma clara separação de responsabilidades em uma aplicação WPF e Silverlight, mantendo uma espécie de façade entre o Modelo de objetos e a View que é a interface, com a qual o usuário interage.

### MVP

O MVP é uma evolução do MVC que se comunica bidirecionalmente com as outras camadas, evitando que o Model tenha que se comunicar diretamente com o View sem passar pelo Controller e este último é fundamental para a interação com o usuário. O MVP desacopla as funções e torna a arquitetura ainda mais modular.

 - A camada Presenter é ciente de tudo o que ocorre nas outras duas camadas e deixa-as cientes do que ela está fazendo
 - a interação com usuário é feita primariamente pelo View, e este pode delegar ao Presenter determinadas tarefas
 - há uma relação um-para-um entre estas camadas. Nesta relação há uma referência do View para o Presenter mas não o oposto.

É possível vincular dados do View com o Model através de data binding. Isto ocorre na variação Supervising Controller, em oposição à variação Passive View onde a View essencialmente só possui o desenho da UI.

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, formatados.

```
<!doctype html>
<html lang="en" data-ng-app="BemVindo">
<head>
  <meta charset="UTF-8">
  <title>{{titulo}}</title>
</head>
<body>

  <table>
    <tr>
      <td>Seu Nome:</td>
      <td><input type="text" data-ng-model="nome"></td>
    <tr>
    <tr>
      <td>Profissão:</td>
      <td><input type="text" data-ng-model="profissao"></td>
    <tr>
    <tr>
      <td>Responsabilidades:</td>
      <td><input type="text" data-ng-model="responsabilidade"></td>
    <tr>
  </table>

  <!-- Utilizamos o valor de nome que está no nosso escopo local -->
  <p>Olá {{ nome }}, Bem Vindo!!
    <br/> Sua função será {{ profissao }} nessa empresa e
    <br/> suas responsabilidades serão {{responsabilidade}}
  </p>
  <script src="angular.min.js"></script>
  <script>
    angular.module('BemVindo', [])
  </script>
</body>
</html>
```
