var campoOctal = document.getElementById("numeroOctal");
var campoBinario = document.getElementById("resultadoOctalBinario");
var campoDecimal = document.getElementById("resultadoOctalDecimal");
var campoHexa = document.getElementById("resultadoOctalHexadecimal");



function funcaoBinario(array, base) {
    var pot = 0;
    var decimal = 0;
    array.forEach(x => {
        decimal = decimal + (x * Math.pow(base, pot));
        pot++;
    });
    pot = 0;

    return decimal;
}



document.getElementById("calcOctal").addEventListener("click", () => {
    var octal = campoOctal.value;
    // var decimal = campoDecimal.value;
    // var binario = campoBinario.value;
    // var hexa = campoHexa.value;


    var arrayOctal = octal.split("").reverse();

    var decimal = funcaoBinario(arrayOctal, 8);

    campoDecimal.value = decimal;
    binario = "";


    while (decimal > 0) {
        if (decimal % 2)
            binario = binario + "1";
        else
            binario = binario + "0";

        decimal = parseInt(decimal / 2);
    }

    campoBinario.value = binario.split("").reverse().join("");

    arrayBinario = binario.split("").reverse();

    var index = arrayBinario.length;
    var final = index - 4;
    var arrayResultadoHexa = [];
    for (var i = 0; i < Math.ceil(arrayBinario.length / 4); i++) {
        arrayResultadoHexa.push(funcaoBinario(arrayBinario.slice(final, index).reverse(), 2));
        index -= 4;
        if (index - 4 < 0)
            final = 0;
        else
            final = index - 4;
    }

    var hexa = arrayResultadoHexa.map(x => {
        switch (x) {
            case 10:
                return "A";
            case 11:
                return "B";
            case 12:
                return "C";
            case 13:
                return "D";
            case 14:
                return "E";
            case 5:
                return "F";
            default:
                return x;
        }
    });

    campoHexa.value = hexa.reverse().join("");
});