  function pulaLinha() {

        document.write("<br>");
        document.write("<br>");
}

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 100);
var chute = parseInt(prompt("digite seu chute!"));

if(chute == numeroPensado) {
    mostra("Você acertou!");

} else {
    mostra("Você errou, o número pensado foi " + numeroPensado);
}

// if(chute == numeroPensado) {
//     mostra("Você acertou!");
// }

// if(chute !=  numeroPensado) {
//     mostra("Você errou, o número pensado foi " + numeroPensado);
// }