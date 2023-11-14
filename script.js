// variáveis importantes
var valor1 = document.getElementById("valor1"),
valor2 = document.getElementById("valor2"),
opera = document.getElementById("opera"),
resultado = document.getElementById("resultado");

// inputs
var inputOperaOpt = document.getElementById("operacao"),
inputNumbResp = document.getElementById("resp"),
inputVerif = document.getElementById("verif"),
inputGerarVal = document.getElementById("gerarVal");


// mudar operação
inputOperaOpt.onchange = () => opera.innerText = inputOperaOpt.value;

// eventos
document.body.onload = function() {
    gerarValores(valor1, valor2);
    imprimirValores(valor1, valor2)
}
inputGerarVal.onclick = function() {
    gerarValores(valor1, valor2);
    imprimirValores(valor1, valor2)

    document.body.style.backgroundColor = '#393986';
    resultado.style.display = "none";
}
inputVerif.onclick = function() {
    // result = operacao(valor1, valor2, opera);
    var resp = Number.parseInt(inputNumbResp.value),
    result = operacao(valor1.value, valor2.value, inputOperaOpt.value);

    if (resp == result) {
        document.body.style.backgroundColor = '#17a836';
        resultado.style.display = 'block';
        resultado.innerText = 'Você acertou!!!';
    } else {
        document.body.style.backgroundColor = '#a81717';
        resultado.style.display = 'block';
        resultado.innerText = 'Você errou!!!';
    }
}

// funções importantes
function gerarValores(n1, n2) {
    n1.value = Math.floor(Math.random() * 999);
    n2.value = Math.floor(Math.random() * 999);
}
function imprimirValores(n1, n2) {
    n1.innerText = n1.value;
    n2.innerText = n2.value;
}
function operacao(n1, n2, opera) {
    if (opera == "+") {
        var resultFinal = n1 + n2;
        return resultFinal;
    } else if (opera == "-") {
        var resultFinal = n1 - n2;
        return resultFinal;
    } else {
        var resultFinal = n1 * n2;
        return resultFinal;
    }
}