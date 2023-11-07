const inputPeso = document.getElementById('peso');
const inputDistancia = document.getElementById('distancia');
const botao = document.getElementById('calcularButton');
const resultado = document.getElementById('resultado');
const calcularNovamenteButton = document.getElementById('calcularNovamente');
const resultadoContent = document.getElementById('resultado-content');
const inputsContent = document.getElementById('inputs-content');

function validaBotao() {
    if (inputDistancia.value && inputPeso.value) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

inputPeso.addEventListener('input', validaBotao);
inputDistancia.addEventListener('input', validaBotao);

function calcularFrete(peso, distancia, multiplicador = 6) {
    const frete = multiplicador * peso * distancia;
    return frete;
}

function calcularFreteBotao() {
    const totalFrete = calcularFrete(Number(inputPeso.value), Number(inputDistancia.value));
    resultado.innerHTML = `O valor do frete é de R$ ${totalFrete.toFixed(2)}`;
    resultadoContent.style.display = 'flex';
    inputsContent.style.display = 'none';
}

function calcularNovamente(){
    resultadoContent.style.display = 'none';
    inputsContent.style.display = 'flex';
    inputDistancia.value = null;
    inputPeso.value = null;
    validaBotao();
}