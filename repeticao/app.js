
function pulaLinha() {
        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

//Usando a instrução while imprima todos os números pares de 1 a 100 e ao final imprima a palavra "FIM". DICA: incremente o contador de dois em dois!

var contador = 2;
while (contador <= 100) {
    mostra(contador)
    contador = contador + 2;
}

mostra("Fim")

// //Imprima todos os números entre 30 e 40 (inclusive 30 e 40), porém os números 33 e 37 não devem ser impressos! No final escreva a palavra "FIM". Use o while para essa tarefa. DICA: o if pode ajudá-lo!

var numero = 30;
while (numero <= 40) {
    mostra(numero);
    numero = numero + 1;
    if(numero == 33 || numero == 37){
        numero = numero + 1 // incremento pode usar ++;
    }
}
mostra("fim");


// //Imprima em ordem decrescente todos os números entre 20 e 0, incluindo os limites! No final, escreva a palavra "FIM". DICA: você pode decrementar uma variável!

var lista = 20;
while (lista >= 0) {
    mostra(lista);
    lista = lista - 1;
}
mostra("fim");

//LOGIN SISTEMA
//Altere o código para que o usuário tenha 3 tentativas para realizar o login. Atenção: Se ele acerta na primeira tentativa, não faz sentido continuar a perguntar seu login e senha.

    var loginCadastrado = "alura";
    var senhaCadastrada = "alura321";

    var maximoTentativas = 3;
    var tentativaAtual = 1;

    while(tentativaAtual <= maximoTentativas) {

        var loginInformado = prompt("Informe seu login");
        var senhaInformada = prompt("Informe sua senha");

        if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

            alert("Bem-vindo ao sistema, " + loginInformado);

            tentativaAtual = maximoTentativas; // acertou, então faço o gasto de todas as tentativas para sair do loop. Lá embaixo vai incrementar + 1! 

        } else {

            if (tentativaAtual == 3) {
                alert("Número permitido de tentativas ultrapassado!");
            } else {
                alert("Login inválido. Tente novamente");
            }
        }

       // vai para a próxima tentativa
        tentativaAtual = tentativaAtual +1  
    }


