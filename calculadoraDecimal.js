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
    var binCru = ResultadoDecBin;
    var binOcatal = ResultadoDecBin;

    // INÍCIO INVERSOR DA STRING BINÁRIO
    ResultadoDecBin = ResultadoDecBin.split(""); //converte a variável para array;
    ResultadoDecBin = ResultadoDecBin.reverse(); //reverte os algarismos/dígios em ordem;
    ResultadoDecBin = ResultadoDecBin.join(""); //junta todos os valores novamente conforme a ordem inversa.
    // FIM INVERSOR DA STRING BINÁRIO


    var respostaOctal = "";
    var binNumeral = binCru.length;


    binNumeral = binNumeral % 3;



    while ((binNumeral % 3) > 0) {
        binOcatal = binOcatal + "0";
        binCru = binCru + 1;
        binNumeral = binCru.length;

    }

    binOcatal = binOcatal.match(/.{1,3}/g);


    var i = binOcatal.length;

    while (i >= 0) {

        if (binOcatal[i] == "000") {
            respostaOctal = respostaOctal + "0";
        }
        else if (binOcatal[i] == "100") {
            respostaOctal = respostaOctal + "1";
        }
        else if (binOcatal[i] == "010") {
            respostaOctal = respostaOctal + "2";
        }
        else if (binOcatal[i] == "110") {
            respostaOctal = respostaOctal + "3";
        }
        else if (binOcatal[i] == "001") {
            respostaOctal = respostaOctal + "4";
        }
        else if (binOcatal[i] == "101") {
            respostaOctal = respostaOctal + "5";
        }
        else if (binOcatal[i] == "011") {
            respostaOctal = respostaOctal + "6";
        }
        else if (binOcatal[i] == undefined) {
            respostaOctal = respostaOctal + "";
        }
        else {
            respostaOctal = respostaOctal + "7";
        }
        i = i - 1;
    }

    document.getElementById("resultadoDecimalUm").setAttribute('value', ResultadoDecBin);
    document.getElementById("resultadoDecimalDois").setAttribute('value', respostaOctal);
    document.getElementById("resultadoDecimalTres").setAttribute('value', binOcatal);
}



var CalcularODecimal = document.getElementById("CalcularODecimal");
CalcularODecimal.addEventListener("click", exibirResultadosDoDecimal);

