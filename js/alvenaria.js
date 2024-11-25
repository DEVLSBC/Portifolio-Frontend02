const select = document.getElementById('nivel');
    for (let i = 1; i <= 50; i++) {
        const option = document.createElement('option');
        option.value = `nv${i}`;
        option.textContent = i;
        select.appendChild(option);
    }

// Função auxiliar para limpar o formulário e os campos de unidades
function limparTodosCampos() {
    lista.reset();
    limparCamposDeUnidades();
}

function mostrarMensagem(mensagem) {
    alert(mensagem);
}