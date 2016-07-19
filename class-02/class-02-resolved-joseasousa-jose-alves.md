# AngularJS - Aula 02 - Exercício
**user:** [joseasousa](https://github.com/joseasousa/)  
**autor:** Jose Alves De Sousa Neto

## 1 - Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.

```html

 <input type="number" data-ng-model="numero">
    <br> {{numero| number:2}}
    <br>
    <br>
    <input type="text" data-ng-model="abc">
    <br> {{abc| limitTo:3}}
    <br>
    <br>
    <input type="date" data-ng-model="data">
    <br> {{data| date:'dd-MM-yy'}}
    <br>
    <br>
    <input type="text" data-ng-model="maiusculo">
    <br> {{maiusculo| uppercase}}
    <br>
    <br>
    <input type="number" data-ng-model="grana">
    <br> {{grana| currency}}

```

## Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior que 18 anos.


```html
  <label for="nome">
      <input type="number" data-ng-model="texto">
  </label> {{texto | demaior }}

  <script>
   angular.module('BEMEAN', [])
   .filter('demaior',function(){
                return function(age){
                    if(age){ 
                    if (age<18){ return "com "+age+" é de Menor"}
                    else{return "com "+age+" é de Maior"}
                    }
                }
        });
	</script>
```

## Crie 1 filtro que receba um horário e entre as 0:00 e 23:59 e diga
##Bom dia // até 12:00
##Boa tarde  // até 18:00
##Boa noite  


```html
 <label for="nome">
      <input type="time" data-ng-model="texto">
  </label> {{texto | comprimento }}

  <script>
   angular.module('BEMEAN', [])
   .filter('comprimento', function(){
              return function(t){
                if(t){
                    var ho =  t.getHours();
                    if (ho > 0 && ho < 12){
                        return 'bom dia ';
                    }else if(ho < 18 && ho >11){
                        return 'boa tarde';
                    }else{
                        return 'boa noite';
                    }
                }
            }
          
        });
	</script>
```