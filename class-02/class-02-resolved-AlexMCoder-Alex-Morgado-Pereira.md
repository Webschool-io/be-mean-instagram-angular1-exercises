# 1) Crie 1 exemplo para pelo menos 5 filtros padrões do Angular

```
<html data-ng-app="BeMEAN">
<head>
	<meta charset="UTF-8">
	<title>Angular</title>
</head>
<body>
	Filter Uppercase: {{ nome | uppercase }} <br>
	Filter lowercase: {{ nome | lowercase }} <br>
	Filter limitTo: {{ nome | limitTo:3 }} <br>

	Filter Currency: {{ number | currency }} <br>

	Filter Date: {{ data | date }} <br>

	<label for="name">Digite o Nome:</label>
	<input type="text" id="name" data-ng-model="nome"> <br>

	<label for="value">Digite um valor:</label>
	<input type="text" id="value" data-ng-model="number"><br>

	<label for="date">Digite uma data:</label>
	<input type="date" id="date" data-ng-model="data">

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>

    <script type="text/javascript">
      angular.module('BeMEAN', []);
    </script>
</body>
</html>
```

# 2) Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menor que 18 anos.

```
<html data-ng-app="BeMEAN">
<head>
	<meta charset="UTF-8">
	<title>Angular</title>
</head>
<body>
	Você é: {{ idade | isAdult }} <br>

	<label for="age">Qual sua idade:</label>
	<input type="number" id="age" data-ng-model="idade"> <br>

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>

    <script type="text/javascript">

      angular.module('BeMEAN', [])
      .filter('isAdult', () => {
      	return (age) => {

      		if (age && !isNaN(age) ) {
      			if(age < 18) return 'Menor de idade.';
      			else return 'Maior de idade';
      		}

      		if(isNaN(age)) return 'digite sua idade';
      	}
      });

    </script>
</body>
</html>
```

# 3) Crie 1 filtro que receba um horário, entre 0:00 e 23:59, e diga:
* Bom dia. // até 12:00
* Boa tarde. // até 18:00
* Boa noite.

```
<html data-ng-app="BeMEAN">
<head>
	<meta charset="UTF-8">
	<title>Angular</title>
</head>
<body>
	Você é: {{ time | isTime }} <br>

	<label for="time">Qual sua idade:</label>
	<input type="time" id="time" data-ng-model="time"> <br>

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>

    <script type="text/javascript">

      angular.module('BeMEAN', [])
      .filter('isTime', () => {
      	return (time) => {

      		if (!isNaN(time)){
      			let hour = time.getHours();
      			if(hour > 0 && hour < 12) return 'Bom dia';
      			else if (hour < 18) return 'Boa tarde';
      			else return 'Boa noite';
      		}

      	}
      });

    </script>
</body>
</html>
```
