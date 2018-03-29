function exibirResultadosDoDecimal() {
    var numeroBase = Number(document.getElementById("numeroDecimal").value);


    var resultadoDecBin = "";
    var total = numeroBase;


    while (total > 0) { // CONDIÇÃO DIVIDIR ATÉ QUE O ÚLTIMO RESULTADO SEJA IGUAL A 1
        if (total % 2) {
            resultadoDecBin = resultadoDecBin + "1";
            // adiciona o algarismo "1" a string quando o resto da divisão é 1
        }
        else {
            resultadoDecBin = resultadoDecBin + "0";
            // adiciona o algarismo "0" a string quando o resto da divisão é 0
        }
        total = parseInt(total / 2);
        // divide e arredonda o total por 2 para reiniciar a condição "While"
    }
    var binCru = resultadoDecBin;
    var binOcatal = resultadoDecBin;
    var binCruDois = resultadoDecBin;
    var binHexadecimal = resultadoDecBin;

    // INÍCIO INVERSOR DA STRING BINÁRIO
    resultadoDecBin = resultadoDecBin.split(""); //converte a variável para array;
    resultadoDecBin = resultadoDecBin.reverse(); //reverte os algarismos/dígios em ordem;
    resultadoDecBin = resultadoDecBin.join(""); //junta todos os valores novamente conforme a ordem inversa.
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

        if (binOcatal[i] == undefined) {
            respostaOctal = respostaOctal + "";
        }
        else if (binOcatal[i] == "000") {
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

        else {
            respostaOctal = respostaOctal + "7";
        }
        i = i - 1;
    }


    // inicio formula hexadecimal
    var binNumeralDois = binCruDois.length;
    binNumeralDois = binNumeralDois % 4;
    alert(binNumeralDois);



    while ((binNumeralDois % 4) > 0) {
        binHexadecimal = binHexadecimal + "0";
        binCruDois = binCruDois + 1;
        binNumeralDois = binCruDois.length;

    }

    binHexadecimal = binHexadecimal.match(/.{1,4}/g);
    alert(binHexadecimal);

    var respostaHexadecimal = "";
    var j = binHexadecimal.length;

    while (j >= 0) {

        if (binHexadecimal[j] == "0000") {
            respostaHexadecimal = respostaHexadecimal + "0";
        }
        else if (binHexadecimal[j] == "1000") {
            respostaHexadecimal = respostaHexadecimal + "1";
        }
        else if (binHexadecimal[j] == "0100") {
            respostaHexadecimal = respostaHexadecimal + "2";
        }
        else if (binHexadecimal[j] == "1100") {
            respostaHexadecimal = respostaHexadecimal + "3";
        }
        else if (binHexadecimal[j] == "0010") {
            respostaHexadecimal = respostaHexadecimal + "4";
        }
        else if (binHexadecimal[j] == "1010") {
            respostaHexadecimal = respostaHexadecimal + "5";
        }
        else if (binHexadecimal[j] == "0110") {
            respostaHexadecimal = respostaHexadecimal + "6";
        }
        else if (binHexadecimal[j] == "1110") {
            respostaHexadecimal = respostaHexadecimal + "7";
        }
        else if (binHexadecimal[j] == "0001") {
            respostaHexadecimal = respostaHexadecimal + "8";
        }
        else if (binHexadecimal[j] == "1001") {
            respostaHexadecimal = respostaHexadecimal + "9";
        }
        else if (binHexadecimal[j] == "0101") {
            respostaHexadecimal = respostaHexadecimal + "A";
        }
        else if (binHexadecimal[j] == "1110") {
            respostaHexadecimal = respostaHexadecimal + "B";
        }
        else if (binHexadecimal[j] == "0011") {
            respostaHexadecimal = respostaHexadecimal + "C";
        }
        else if (binHexadecimal[j] == "1011") {
            respostaHexadecimal = respostaHexadecimal + "D";
        }
        else if (binHexadecimal[j] == "0111") {
            respostaHexadecimal = respostaHexadecimal + "E";
        }
        else if (binHexadecimal[j] == "1111") {
            respostaHexadecimal = respostaHexadecimal + "F";
        }
        else if (binHexadecimal[j] == undefined) {
            respostaHexadecimal = respostaHexadecimal + "";
        }
        j = j - 1;
    }





    document.getElementById("resultadoDecimalUm").setAttribute('value', resultadoDecBin);
    document.getElementById("resultadoDecimalDois").setAttribute('value', respostaOctal);
    document.getElementById("resultadoDecimalTres").setAttribute('value', respostaHexadecimal);
}



var CalcularODecimal = document.getElementById("CalcularODecimal");
CalcularODecimal.addEventListener("click", exibirResultadosDoDecimal);

