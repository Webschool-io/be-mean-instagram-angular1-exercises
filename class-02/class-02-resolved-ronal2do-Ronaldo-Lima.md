Nome: Ronaldo Lima
Github: ronal2do
Data: 1464228380

# AngularJS - Aula 02 - Exercício


## 1- Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="http://bulma.io/css/main.css">
  <title>Ex 2</title>
</head>
<body data-ng-app="AnyApp">
      <div class="container">
           <label class="label">Name</label>
        <p class="control">
          <input class="input" type="text" data-ng-model="name" placeholder="Text input to lowercase">
        </p>
        <label class="label">Username</label>
        <p class="control has-icon has-icon-right">
          <input class="input" type="text" data-ng-model="username" placeholder="Text input to uppercase">
          <i class="fa fa-check"></i>
        </p>
        <label class="label">B-day</label>
        <p class="control has-icon has-icon-right">
          <input class="input" type="date" data-ng-model="bday" placeholder="Text input">
          <i class="fa fa-check"></i>
        </p>
        <label class="label">Price</label>
        <p class="control has-icon has-icon-right">
          <input class="input" type="text" data-ng-model="price" placeholder="Text input">
          <i class="fa fa-check"></i>
        </p>

        <label class="label">Message</label>
        <p class="control">
          <textarea class="textarea" data-ng-model="message" placeholder="Textarea limit 10 characters"></textarea>
        </p>

        <p class="control">
          <button class="button is-primary">Submit</button>
          <button class="button is-link">Cancel</button>
        </p>


      <hr>
        {{ name | lowercase }} <br>
        {{ username | uppercase  }} <br> 
        {{ bday | date:'dd-MM-yyyy' }} <br>
        {{ message | limitTo:10 }} <br>
        {{ price | currency }} <br>

      </div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
      
      <script>
        angular.module("AnyApp", []);
      </script>
     
    </body>
</html>

```

## 2- Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menos que 18 anos.

```html

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="http://bulma.io/css/main.css">
  <title>Ex 3</title>
</head>
<body data-ng-app="AnyApp">
  <div class="container">
   <label class="label">Age</label>
    <p class="control">
      <input class="input" type="text" data-ng-model="age" placeholder="What your age?">
    </p>


  <hr>
   <strong>{{ age }}</strong>  {{ age | ageMetter }}

  </div>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  
  <script>
      angular.module('AnyApp', [])
      
      .filter('ageMetter', function() {
          return function(text) {
                if(text < 18) return 'You need to be older to have fun here';
                if(text >= 18) return 'Welcome, you are entitled to a beer!';
          };
      });
  </script>
</body>
</html>

```

## 3- Crie um filtro que receba um horário, entre 0:00 e 23:59, e diga:

* Bom dia. // até 12:00
* Boa tarde. // até 18:00.
* Boa noite.

Dependendo do horário.

```html

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="http://bulma.io/css/main.css">
  <title>Ex 4</title>
</head>
<body data-ng-app="AnyApp">
  <div class="container">
   <label class="label">Hours</label>
    <p class="control">
      <input class="input" type="text" data-ng-model="hour" placeholder="What time is it?">
    </p>


  <hr>
   <strong>{{ hour }}</strong>  {{ hour | whatTime }}

  </div>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  
  <script>
    angular.module("AnyApp", [])

     .filter('whatTime', function() {
                return function(text) {
                    if(text) {
                        var hour = text;
                       
                        var options = [
                            hour <= 12,  // antes do meio dia
                            hour > 12 && hour <= 18, 
                            hour > 18 && hour <= 24,
                            hour < 24 // limita até 24
                          ];

                        switch (options.indexOf(true)) {
                            case (0):
                                return 'Bom dia!';
                            case (1):
                                return 'Boa tarde!';
                            case (2):
                                return 'Boa noite!';
                            default:
                                return 'Horário inválido';
                         }
                    };
                };
            });

  </script>
 
</body>
</html>
```
