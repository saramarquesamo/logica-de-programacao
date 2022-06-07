//ATIVIDADE 1  - QND DE CARBONO 
//  function pulaLinha() {
//         document.write("<br>");
//     }

//     function mostra(frase) {
//         document.write(frase);
//         pulaLinha();
//     }

//     var quantidadeCarbono1 = parseInt(prompt("Quantidade de carbono substância 1"));
//     var quantidadeCarbono2 = parseInt(prompt("Quantidade de carbono substância 2"));

//     quantidadeCarbono2 == quantidadeCarbono2 + 2; // CORRIGIDO

//     if(quantidadeCarbono1 = quantidadeCarbono2 ) {

//         mostra("Acho que são substâncias parecidas");

//     } else {

//         mostra("São substâncias bem diferentes");
//     }

// ATIVIDADE 02 - PODE DIRIGIR OU NÃO 

    // function pulaLinha() {
    //     document.write("<br>");
    // }

    // function mostra(frase) {
    //     document.write(frase);
    //     pulaLinha();
    // }

    // var idade = parseInt(prompt("Qual é sua idade?"));
    // var temCarteira = prompt("Tem carteira? Responda S ou N");

    // if (idade >= 18 && temCarteira == "S") {
    //     mostra("Voce pode dirigir!")
    // } else{
    //     mostra("Ops! Você ainda não pode dirigir")
    // }20

// ATIVIDADE 03 SORTEIO 

// function pulaLinha() {

//         document.write("<br>");
//     }

//     function mostra(frase) {

//         document.write(frase);
//         pulaLinha();
//     }

//     function sorteia(n) {
//         return Math.round(Math.random() * n);
//     }    

//     var numeroPensado = sorteia(20);

//      var chute = parseInt(prompt("Já pensei. Qual você acha que é?"));

//     if(chute == numeroPensado) {
//         mostra("Uau! Você acertou, pois eu pensei no " + numeroPensado);
//     } else {
//         if(chute > numeroPensado) {
//             mostra("Você errou! Seu chute é maior que o número pensado!");
//         } else {
//             mostra("Você errou! Seu chute é menor que o número pensado!");
//         }

//     }

var numeroPar = 0;

while (numeroPar >= 1) {
    mostra("Lista de números pares " + numeroPar)
    numeroPar = numeroPar + 1 
}