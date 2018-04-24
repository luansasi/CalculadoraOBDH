document.addEventListener('DOMContentLoaded', function() {
    //Button Hex    
    var calcularHexadecimal = document.getElementById("calcularHexadecimal");
    calcularHexadecimal.addEventListener("click", exibirResultadosDoHexadecimal.bind(this));

    function exibirResultadosDoHexadecimal() {
        var caixaHexa = {
            inHexa: document.querySelector(".caixaHexa #numeroHexadecimal"),
            resultDecimal: document.querySelector('.caixaHexa #resultadoBinUm'),
            resultBinario: document.querySelector('.caixaHexa #resultadoHexaDois'),
            resultOctal: document.querySelector('.caixaHexa #resultadoBinTres')
        }

        // Decimal
        var decimal = parseInt(caixaHexa.inHexa.value, 16);
        
        // Binary
        var partes = caixaHexa.inHexa.value.split('');
        var resultBin = '';
        for (var i = 0; i < partes.length; i++) {
            resultBin += hex2bin(partes[i]);
        }

        // Octa
        var octa = decimal.toString(8);

        //Result
        caixaHexa.resultDecimal.value = decimal; // Hexa to decimal
        caixaHexa.resultBinario.value = resultBin; // Hexa to binary
        caixaHexa.resultOctal.value = octa; // Hexa to octa
    }

    function hex2bin (hex) {
        return ("0000" + (parseInt(hex, 16)).toString(2)).substr(-4);
    }

    //Button Bin
    var CalcularBinario = document.getElementById("CalcularBinario");
    CalcularBinario.addEventListener("click", exibirResultadosDoBinario.bind(this));
    

    function exibirResultadosDoBinario() {
        
        var caixaBinario = {
            inBinario: document.querySelector(".caixa_Bin #numeroBinario"),
            resultDecimal: document.querySelector('.caixa_Bin #resultadoBinUm'),
            resultOctal: document.querySelector('.caixa_Bin #resultadoBinDois '),
            resultHexadecimal: document.querySelector('.caixa_Bin #resultadoBinTres')
        }
    
    //Decimal
        var decimal = parseInt(caixaBinario.inBinario.value, 2);
    
    //Octa
        var octa = decimal.toString(8);
    
    //Hexa
        var hexa = decimal.toString(16);
        
    //Result
        caixaBinario.resultDecimal.value = decimal;
        caixaBinario.resultOctal.value = octa;
        caixaBinario.resultHexadecimal.value = hexa;
}
}, false);