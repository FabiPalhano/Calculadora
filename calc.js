var primeiroValor = parseInt (prompt("Digite o primeiro valor:"))
var segundoValor = parseInt (prompt("Digite o segundo valor:"))

var operacao = prompt("Digite 1 para fazer uma divisão, 2 para fazer uma multiplicação, 3 para fazer uma adição ou 4 para fazer uma subtração")

if (operacao == 1) {
    var resultado = primeiroValor / segundoValor
    document.write ("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 2){
    var resultado = primeiroValor * segundoValor
    document.write ("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3){
    var resultado = primeiroValor + segundoValor
    document.write ("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 4){
    var resultado = primeiroValor - segundoValor
    document.write ("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
    document.write ("<h2>" + "Operação Inválida" + "</h2>")
}


//if = se
//else = senão
//else if = senão se
//== comparação
//= atribuição
//escrevendo na tela = document.write()
//concatenação = juntar palavras com variáveis = ("palavra" + variavel)