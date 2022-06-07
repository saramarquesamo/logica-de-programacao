function pulaLinha() {

    document.write("<br>");	
    document.write("<br>");	
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var vitorias = parseInt(prompt("Entre com nº de vitórias"));
var empates = parseInt(prompt("Entre com o n] de empates"));

var pontos = vitorias * 3 + empates;

mostra(pontos);

if(pontos > 28) {

    mostra("Seu time está melhor do que no ano passado.");

}

if(pontos < 28) {

    mostra("Seu time está pior do que no ano passado.");
}

if(pontos == 28) {

    mostra("Seu time está igual igual ao ano passado.");

}

mostra("FIM");