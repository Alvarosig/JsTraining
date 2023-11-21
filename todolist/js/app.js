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
        <div class="item-icone">
            <span class="material-symbols-outlined">
                circle
            </span>
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete">
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

function delTarefa() {


}
