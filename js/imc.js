function pulaLinha() {

    document.write("<br>");	
    document.write("<br>");	
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {
   //var imc = peso / (altura *altura);
    //mostra("O imc calculado é: " + imc);

    return peso / (altura *altura);
}

var nome = prompt("Informe o seu nome");
var alturaInformada = prompt(nome + ", informe sua altura");
var pesoInformado = prompt(nome + ", informe seu peso");

var imc = calculaImc(pesoInformado, alturaInformada);

document.write(nome + ", o seu IMC é " + imc);

// var imcFlavio = calculaImc(70, 1.80);
// mostra(imcFlavio)

// var pesoFlavio = 73;
// var alturaFlavio = 1.71;
// calculaImc(pesoFlavio, alturaFlavio);
if(imc < 18.5) {

    mostra("Você está abaixo do recomendado");

}

if(imc > 35) {

    mostra("Você está acima do recomendado");
}

// if(imc >= 18.5) {

//     if(imc <= 35) {

//         mostra("Seu IMC está excelente!");

//     }

// }

if(imc >= 18.5 && imc <= 35) {

    mostra("Seu IMC está excelente!");

}