

    function pulaLinha() {

        document.write("<br>");
        document.write("<br>");
}

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
}

for(var multiplicador = 1; multiplicador <= 10; multiplicador = multiplicador + 1) {

    mostra(7 * multiplicador);

}

mostra("FIM");

// É comum usarmos o **zero** para iniciar um laço de repetição. Isso nos trará vantagens quando, nas próximas atividades, formos trabalhar com *Array's*. Mas preste atenção, quando usamos o zero para iniciar uma repetição, precisamos substituir o sinal do limitador (espaco2), de ``<=`` (menor igual) para apenas ``<`` (menor), pois o zero conta como primeiro elemento dentro do laço.

// A ideia é que o laço deve se repetir 10 vezes, se trocarmos o valor de *i* por *zero* e mantermos o *<=*, o laço irá se repetir 11 vezes! Dito isso, temos o seguinte código:

for( var i = 0; i < 10; i++ ) {
    alert( "O resultado é " + (2 * i) );
}

//Temos o seguinte código utilizando o for():

for( var i = 0; i < 10; i++ ) {
    alert( "O resultado é " + (2 * i) );
}

//Agora, podemos fazer o mesmo utilizando o while():

var i = 0;
while( i < 10) {
    alert( "O resultado é " + (2 * i) );
    i++;    
}