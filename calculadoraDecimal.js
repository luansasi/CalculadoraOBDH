function exibirResultadosDoDecimal() {
    var numeroBase = Number(document.getElementById("numeroDecimal").value);

    var resultadoBinario;

    var par = 0;
    var impar = 0;

    var total = numeroBase / 2;

    while (total > 1) {

        alert(numeroBase);
        alert(total); // função pra mostrar o numero base
        document.getElementById("resultadoDecimalTres").setAttribute('value', total); // vai mostrar o total pra verificar a conta

        if (divTotal % 2 == 0) {
            par = par + 1;
            alert("Par"); // criar condição para adicionar um "0" a string resposta            
        }

        if (divTotal % 2 == 1) {
            impar = impar + 1;
            alert("Impar"); // criar condição para adicionar um "1" a string resposta
        }        
    }

    document.getElementById("resultadoDecimalDois").setAttribute('value', "abc");
    document.getElementById("resultadoDecimalUm").setAttribute('value', par);  


}



var CalcularODecimal = document.getElementById("CalcularODecimal");
CalcularODecimal.addEventListener("click", exibirResultadosDoDecimal);

