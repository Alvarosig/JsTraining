// NÃO CONSEGUI COLOCAR PLACEHOLDER NO INPUT DATE

const inputNome = document.getElementById('nome');
const inputDataInicio = document.getElementById('dataInicio');
const inputDataFim = document.getElementById('dataTermino');
const botao = document.getElementById('gerarButton');
const carta = document.getElementById('carta-content');

const gerarNovamenteButton = document.getElementById('gerarNovamente');
const resultadoContent = document.getElementById('resultado-content');
const inputsContent = document.getElementById('inputs-content');

function validaBotao() {
    if (inputNome.value && inputDataInicio.valueAsDate && inputDataFim.valueAsDate && 
        inputDataInicio.valueAsDate < inputDataFim.valueAsDate) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

inputNome.addEventListener('input', validaBotao);
inputDataInicio.addEventListener('input', validaBotao);
inputDataFim.addEventListener('input', validaBotao);

function escreverPedido(nome, dataInicio, dataTermino) {
    const hoje = new Date();
    const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = hoje.toLocaleDateString('pt-BR', opcoes);
    const carta = `Caro(a) responsável,

Gostaria de solicitar minhas férias:

Nome do funcionário: <strong>${nome.value}</strong>

Data de inicio: <strong>${new Date(dataInicio.value).toLocaleDateString()}</strong>

Data de fim: <strong>${new Date(dataTermino.value).toLocaleDateString()}</strong>

Agradeço a atenção.

Atenciosamente, <strong>${nome.value}</strong>

Gerado em ${dataFormatada}`;

    return carta;
}

function gerarCartaBotao() {
    carta.innerHTML = `<pre>${escreverPedido(inputNome, inputDataInicio, inputDataFim)}</pre>`;
    resultadoContent.style.display = 'flex';
    inputsContent.style.display = 'none';
}

function gerarNovamente(){
    carta.innerHTML ='';
    inputNome.value = null;
    inputDataInicio.value = null;
    inputDataFim.value = null;
    resultadoContent.style.display = 'none';
    inputsContent.style.display = 'flex';
    validaBotao();
}