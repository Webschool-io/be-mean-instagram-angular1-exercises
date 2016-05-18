###Nome: Antonio Marcos Alves de Lima

###Github : [antoniomalves] (https://github.com/antoniomalves)



```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <title>Be MEAN - Aula 2</title>
</head>
<!-- Iniciando minha aplicação com ng-app-->
<body data-ng-app="BeMEAN">
    <form>
        <div  class="container">
            ##Crie um exemplo para pelo menos 5 filtros padrões do Angular
            <div class="form-group">
                <label for="produto">Produto
                <input type="text"  class="form-control" placeholder="Informe o nome do produto" data-ng-model="produto" />
                {{ produto | uppercase }}
            </div>

            <div class="form-group">
                <label for="preco">Preço
                <input type="text" class="form-control" placeholder="Preço" data-ng-model="preco" />
                {{ preco | currency : 'R$'}}
            </div>

            <div class="form-group">
                <label for="descricao">Descrição do produto
                <input type="text" class="form-control" placeholder"Descrição do produto" data-ng-model="descricao" />
                {{ descricao | lowercase }}
            </div>

            <div class="form-group">
                <label for="data">Data de Validade
                <input type="date" class="form-control" name="data" ng-model="datavalidade" />
                {{ datavalidade | date : 'fullDate'}}
            </div>

            <div class="form-group">
                <label for="estoque">Quantidade em Estoque <br />
                <input type="number" min="0" name="estoque" data-ng-model="estoque">
                {{estoque | number:3}}
            </div>

            ## Crie um filtro novo onde você passe em um input a sua idade e ele diga se você é maior ou menor que 18 anos.
            <div class="form-group">
                <label for="idade">Informe sua idade
                <input type="number"  min="0" max="120" class="form-control" data-ng-model="idade" /> <br />
                {{idade | verificaIdade}}
            </div>

            ## Crie um filtro que receba um horario, entre 0:00 e 23:59, e diga:- bom dia(00:00 até 12:00), boa tarde(até 18:00), boa noite() dependendo do horário
            <div class="form-group">
                <label for="horas">Horas
                <input type="time"  id="data" class="form-control" data-ng-model="horas" /> <br />
                <span value ng-bind="horas | saudacao"></span>
            </div>
        </div>
    </form>

    <script type="text/javascript">
            angular.module('BeMEAN', [])
                .filter('verificaIdade', function(){
                    return function(idade){
                        if(idade){
                            if(idade > 18) return "Maior de 18 anos";
                            else return "Menor de 18 anos";
                        }
                    }
                })
                .filter('saudacao', function(){
                    return function(horas){
                        if(!horas instanceof Date) return 'Data inválida';
                        var hora = horas.getHours();
                        if(hora > 0 && hora < 12) return 'Bom dia!';
                        else if(hora >= 12 && hora <18 ) return 'Boa tarde!';
                        else return 'Boa noite!';
                    }
                });
    </script>

</body>
</html>
```
