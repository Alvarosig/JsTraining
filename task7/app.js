const inputTarefa = document.getElementById('tarefa');
const inputShow = document.getElementById('input-show');

function adicionarTarefa() {
    const tarefaTexto = inputTarefa.value;
    if (!tarefaTexto) {
        return;
    }
    
    inputShow.style.display = 'block';

    const modeloTarefa = criarTarefa(tarefaTexto);
    inputShow.appendChild(modeloTarefa);

    inputTarefa.value = '';

    atualizarBotao();
}

function criarTarefa(tarefaTexto) {
    const modeloTarefa = document.createElement('div');
    modeloTarefa.className = 'tarefas-box';

    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'check';
    checkbox.onchange = function() {
        if (checkbox.checked) {
            paragrafo.style.textDecoration = 'line-through';
        } else {
            paragrafo.style.textDecoration = 'none';
        }
    }

    const paragrafo = document.createElement('p');
    paragrafo.textContent = tarefaTexto;

    const botao = criarBotaoExcluir();

    label.style.display = 'flex';
    label.style.margin = '8px';
    label.style.gap = '8px';
    label.appendChild(checkbox);
    label.appendChild(paragrafo);
    label.appendChild(botao);
    modeloTarefa.appendChild(label);

    return modeloTarefa;
}

function criarBotaoExcluir() {
    const botao = document.createElement('button');
    botao.textContent = 'X';
    botao.onclick = function(event) {
        apagarTarefa(event.target);
    };

    return botao;
}

function apagarTarefa(botao) {
    const tarefa = botao.closest('.tarefas-box');
    tarefa.remove();

    atualizarBotao();
}

function apagarTarefasSelecionadas() {
    const tarefas = document.querySelectorAll('.tarefas-box');
    tarefas.forEach(tarefa => {
        const checkbox = tarefa.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            tarefa.remove();
        }
    });

    atualizarBotao();
}

function atualizarBotao() {
    const botao = document.getElementById('apagar-selecionadas');
    const tarefas = document.querySelectorAll('.tarefas-box');
    if (tarefas.length > 0) {
        botao.style.display = 'block';
    } else {
        botao.style.display = 'none';
    }
}