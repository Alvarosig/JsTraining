const inputNota1 = document.getElementById('nota1');
const inputNota2 = document.getElementById('nota2');
const inputNota3 = document.getElementById('nota3');
const botao = document.getElementById('calcularButton');

const resultado = document.getElementById('resultado');
const calcularNovamenteButton = document.getElementById('calcularNovamente');
const resultadoContent = document.getElementById('resultado-content');
const inputsContent = document.getElementById('inputs-content');

function validaBotao() {
    if (inputNota1.value && inputNota2.value && inputNota3.value) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

inputNota1.addEventListener('input', validaBotao);
inputNota2.addEventListener('input', validaBotao);
inputNota3.addEventListener('input', validaBotao);

function calcularMedia(nota1, nota2, nota3, totalProvas = 3) {
    const media = (nota1 + nota2 + nota3) / totalProvas;
    return media;
}

function calcularMediaBotao() {
    const totalMedia = calcularMedia(Number(inputNota1.value), Number(inputNota2.value), Number(inputNota3.value));
    if (totalMedia < 6.5) { //Recup
        resultado.innerHTML = `Em recuperação - ${totalMedia.toFixed(1)}`;
        resultadoContent.style.display = 'flex';
        resultadoContent.style.backgroundColor = '#d5e7f7';
        resultadoContent.style.border = '2px solid #2483d7'
        inputsContent.style.display = 'none';
    } else { // Aprovado
        resultado.innerHTML = `Aprovado - ${totalMedia.toFixed(1)}`;
        resultadoContent.style.display = 'flex';
        resultadoContent.style.backgroundColor = '#d2e4e1';
        resultadoContent.style.border = '2px solid #6aa49a';
        inputsContent.style.display = 'none';
    }
}

function calcularNovamente(){
    resultadoContent.style.display = 'none';
    inputsContent.style.display = 'flex';
    inputNota1.value = null;
    inputNota2.value = null;
    inputNota3.value = null;
    validaBotao();
}