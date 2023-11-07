const inputSalario = document.getElementById('salario');
const botao = document.getElementById('calcularButton');

const resultadoMes = document.getElementById('resultado-mes');
const resultadoAno = document.getElementById('resultado-ano')
const calcularNovamenteButton = document.getElementById('calcularNovamente');
const resultadoContent = document.getElementById('resultado-content');
const inputsContent = document.getElementById('inputs-content');

function validaBotao() {
    if (inputSalario.value) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

inputSalario.addEventListener('input', validaBotao);

function calcularFgtsMes(salario, fgtsMes = 0.08) {
    const totalMes = salario * fgtsMes;
    return totalMes;
}

function calcularFgtsAno(salario, fgtsAno = 12) {
    const totalAno = calcularFgtsMes(salario) * fgtsAno;
    return totalAno;
}

function calcularFgtsBotao() {
    const totalFgtsMes = calcularFgtsMes(Number(inputSalario.value));
    const totalFgtsAno = calcularFgtsAno(Number(inputSalario.value));
    resultadoContent.style.display = 'flex';
    resultadoMes.innerHTML = `FGTS mensal - R$ ${totalFgtsMes.toFixed(2)}`;
    resultadoMes.style.backgroundColor = '#d5e7f7';
    resultadoMes.style.border = '2px solid #2483d7';
    
    resultadoAno.innerHTML = `FGTS anual - R$ ${totalFgtsAno.toFixed(2)}`;
    resultadoAno.style.backgroundColor = '#d2e4e1';
    resultadoAno.style.border = '2px solid #6aa49a';
    inputsContent.style.display = 'none';
}

function calcularNovamente(){
    resultadoContent.style.display = 'none';
    inputsContent.style.display = 'flex';
    inputSalario.value = null;
    validaBotao();
}