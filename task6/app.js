const inputCodigo = document.getElementById('codigo');
const inputQtd = document.getElementById('qtd');
const botao = document.getElementById('gerarButton');
const carta = document.getElementById('carta-content');
const cartaAgradecimento = document.getElementById('carta-agradecimento');

const gerarNovamenteButton = document.getElementById('gerarNovamente');
const resultadoContent = document.getElementById('resultado-content');
const inputsContent = document.getElementById('inputs-content');

function validaBotao() {
    if (inputCodigo.value && inputQtd.value ) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

inputCodigo.addEventListener('input', validaBotao);
inputQtd.addEventListener('input', validaBotao);

function escreverPedido(codigo, quantidade) {
    let preco;
    let nome;

    switch (codigo) {
        case 1123:
            nome = 'Hambúrguer';
            preco = 12.00;
            break;
        case 3423:
            nome = 'Sanduíche de pernil'
            preco = 9.00;
            break;
        case 4521:
            nome = 'Bauru'
            preco = 15.00;
            break;
        case 5322:
            nome = 'Sanduíche de mortadela'
            preco = 34.99;
            break;
        default:
            return 'Código do produto não encontrado';
    }

    return  quantidade + ' '+ nome + ' custam R$ ' + (preco * quantidade).toFixed(2);
}


function gerarPedido() {
    const numberCod = Number(inputCodigo.value);
    const numberQtd = Number(inputQtd.value);
    carta.innerHTML = escreverPedido(numberCod, numberQtd);
    carta.style.textAlign= 'center'; 
    cartaAgradecimento.innerHTML = '<p><em>Lanchonete online agradece !</em></p>'
    resultadoContent.style.display = 'flex';
    inputsContent.style.display = 'none';
}

function gerarNovamente(){
    carta.innerHTML ='';
    inputCodigo.value = null;
    inputQtd.value = null;
    resultadoContent.style.display = 'none';
    inputsContent.style.display = 'flex';
    validaBotao();
}