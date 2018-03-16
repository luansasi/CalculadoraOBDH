function exibirResultadosDoDecimal() {
    var numeroBase = Number(document.getElementById("numeroDecimal").value);


    var ResultadoDecBin = "";
    var total = numeroBase;


    while (total > 0) { // CONDIÇÃO DIVIDIR ATÉ QUE O ÚLTIMO RESULTADO SEJA IGUAL A 1
        if (total % 2) {
            ResultadoDecBin = ResultadoDecBin + "1";
            // adiciona o algarismo "1" a string quando o resto da divisão é 1
        }
        else {
            ResultadoDecBin = ResultadoDecBin + "0";
            // adiciona o algarismo "0" a string quando o resto da divisão é 0
        }
        total = parseInt(total / 2);
        // divide e arredonda o total por 2 para reiniciar a condição "While"
    }
    
    // INÍCIO INVERSOR DA STRING BINÁRIO
    ResultadoDecBin = ResultadoDecBin.split(""); //converte a variável para array;
    ResultadoDecBin = ResultadoDecBin.reverse(); //reverte os algarismos/dígios em ordem;
    ResultadoDecBin = ResultadoDecBin.join(""); //junta todos os valores novamente conforme a ordem inversa.
    // FIM INVERSOR DA STRING BINÁRIO
 
    document.getElementById("resultadoDecimalUm").setAttribute('value', ResultadoDecBin);
    document.getElementById("resultadoDecimalDois").setAttribute('value', "abc");
    document.getElementById("resultadoDecimalTres").setAttribute('value', "abc");


}



var CalcularODecimal = document.getElementById("CalcularODecimal");
CalcularODecimal.addEventListener("click", exibirResultadosDoDecimal);

