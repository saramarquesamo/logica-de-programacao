// function pulaLinha() {

//     document.write("<br>");
//     document.write("<br>");
// }

// function mostra(frase) {

//     document.write(frase);
//     pulaLinha();
// }

// var limite = parseInt(prompt("Entre com a data limite"));

// var anoCopa = 1930;

// while(anoCopa <= limite) {

//     mostra("Teve copa em " + anoCopa);
//     anoCopa = anoCopa + 4;
// }

// mostra("FIM");

// Usando a instrução while imprima todos os números pares de 1 a 100 e ao final imprima a palavra "FIM". DICA: incremente o contador de dois em dois!

// var numeroPar = 0;

// while (numeroPar >= 1) {
//     mostra("Lista de números pares " + numeroPar)
//     numeroPar = numeroPar + 1 
// }

// console.log(numeroPar);,

// CORREÇÃO
/* <meta charset="UTF-8">
<script>
    function pulaLinha() {
        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    var contador = 2;
    while(contador <= 100) {
        mostra(contador);
        contador = contador + 2; // incrementa de dois em dois
    }
    mostra("FIM");
</script> */

//Imprima todos os números entre 30 e 40 (inclusive 30 e 40), porém os números 33 e 37 não devem ser impressos! No final escreva a palavra "FIM". Use o while para essa tarefa. DICA: o if pode ajudá-lo!

// function pulaLinha() {

//     document.write("<br>");
//     document.write("<br>");
// }

// function mostra(frase) {

//     document.write(frase);
//     pulaLinha();
// }

// function imprime() {

//     var numero = 30;
//     while (numero >= 30 && numero <= 40) {
//         mostra(numero)
//     }
// }

// //CORRECAO
// <meta charset="UTF-8">
// <script>
//     function pulaLinha() {
//         document.write("<br>");
//     }

//     function mostra(frase) {
//         document.write(frase);
//         pulaLinha();
//     }

//     var contador = 30;

//     while(contador <= 40) {

//         if( contador == 33 ) {
//         contador = contador + 1;
//         }
//         else if(contador == 37) {    
//             contador = contador + 1;
//         }
//         else {
//         mostra(contador);
//         contador = contador + 1; 
//         }
//       }

//     mostra("FIM");

// </script>
