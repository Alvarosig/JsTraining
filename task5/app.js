const inputConvidado = document.getElementById('nome');
const inputNoivo = document.getElementById('noivo');
const inputNoiva = document.getElementById('noiva');
const inputData = document.getElementById('data');
const inputHoras = document.getElementById('horas');
const botao = document.getElementById('gerarButton');
const carta = document.getElementById('carta-content');

const gerarNovamenteButton = document.getElementById('gerarNovamente');
const resultadoContent = document.getElementById('resultado-content');
const inputsContent = document.getElementById('inputs-content');

function validaBotao() {
    if (inputConvidado.value && 
        inputNoivo.value && 
        inputNoiva.value && 
        inputData.valueAsDate > Date.now() && 
        inputHoras.value >= 0 && 
        inputHoras.value < 24) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

inputConvidado.addEventListener('input', validaBotao);
inputData.addEventListener('input', validaBotao);
inputHoras.addEventListener('input', validaBotao);
inputNoivo.addEventListener('input', validaBotao);
inputNoiva.addEventListener('input', validaBotao);

function escreverPedido(nome, noivo, noiva, data, horas) {
    const carta = `Caro(a) ${nome.value}!,

Você está convidado(a) para o casamento de ${noivo.value} e ${noiva.value},
a ser realizado no dia ${new Date(data.value).toLocaleDateString()}, às ${horas.value} horas.

Contamos com a sua presença!

Atenciosamente, 
os(as) noivos(as)`;

    return carta;
}

function gerarCartaBotao() {
    carta.innerHTML = `<pre>${escreverPedido(inputConvidado, inputNoivo, inputNoiva, inputData, inputHoras)}</pre>`;
    resultadoContent.style.display = 'flex';
    inputsContent.style.display = 'none';
}

function gerarNovamente(){
    carta.innerHTML ='';
    inputConvidado.value = null;
    inputNoivo.value = null;
    inputNoiva.value = null;
    inputData.value = null;
    inputHoras.value = null;
    resultadoContent.style.display = 'none';
    inputsContent.style.display = 'flex';
    validaBotao();
}