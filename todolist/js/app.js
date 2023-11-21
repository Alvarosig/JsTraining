/* Variáveis */
let contador = 0 // Número de tarefas adicionadas
let input = document.querySelector('#tarefa');
let btnAdd = document.querySelector('#btn-add');
let main = document.querySelector('#areaLista');

/* Eventos */

input.addEventListener('keyup', function(e) {
    // Tecla 13 = enter
    if(e.keyCode === 13) {
        e.preventDefault();
        btnAdd.click();
    }
});

btnAdd.addEventListener('click', addTarefa);

/* Funções */

function addTarefa() {

    let valorInput = input.value;

    if ((valorInput !== null) && (valorInput !== "") && (valorInput !== undefined)) {

        contador++;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcar(${contador})" class="item-icone">
            <span id="icone_${contador}" class="material-symbols-outlined">
                circle
            </span>
        </div>
        <div onclick="marcar(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="delTarefa(${contador})" class="delete">
                <span class="material-symbols-outlined">
                    delete
                </span>
                Deletar
            </button>
        </div>
    </div>`

    // Adicionando o conteudo na tag main
    main.innerHTML += novoItem;

    // Zerando o input da tarefa
    input.value = "";
    input.focus();

    }
}

function delTarefa(id) {
    
    let tarefa = document.getElementById(id);
    tarefa.remove()

}

function marcar(id) {

    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if(classe == 'item') {
        
        item.classList.add('clicado');
        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('material-symbols-outlined'); 
        icone.classList.remove('circle'); 
        icone.classList.add('material-symbols-outlined');
        icone.classList.add('task-alt-icon');

        item.parentNode.appendChild(item);

    } else {
        
        item.classList.remove('clicado');
        let icone = document.getElementById('icone_' + id);
        icone.classList.add('material-symbols-outlined'); 
        icone.classList.add('circle'); 
        icone.classList.remove('material-symbols-outlined');
        icone.classList.remove('task-alt-icon');

    }
}