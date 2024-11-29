const lista = document.querySelector("#formularioCalc");
const print = document.querySelector("#listaMilitar");

function calcular() {
    const valor = parseFloat(document.getElementById("gold").value);
    const tipo = document.getElementById("classe").value;

    // Definição dos custos das unidades
    const av = 45, tri = 15, bm = 50, lf = 55, lr = 5, pb = 100, lc = 25, rep = 100;
    const hp = 3, bb = 45, esp = 4, giro = 15, gv = 12, ari = 15, fuzi = 3, mort = 30;
    let total = -1;
    let qnt = 100000; // Define um valor inicial para a quantidade de unidades

    if (valor < 0 || tipo === 'default') {
        mostrarMensagem("Valor Inválido!");
        limparTodosCampos();
        return;
    }

    if (tipo === 'frota') {
        while (total > valor || total === -1) {
            // Definir proporções
            let prop1 = qnt;
            let prop3 = qnt * 3;
            let prop10 = qnt * 10;

            // Cálculo do total
            let avprop = av * prop3;
            let triprop = tri * prop10;
            let bmprop = bm * prop1;
            let lfprop = lf * prop3;
            let lrprop = lr * prop3;
            let pbprop = pb * prop1;
            let lcprop = 0/*lc * prop3*/;
            let repprop = rep * 15;

            total = avprop + triprop + bmprop + lfprop + lrprop + pbprop + lcprop + repprop;

            if (total <= valor) {
                // Exibir as quantidades calculadas nos inputs
                document.getElementById("input1").value = prop3;
                document.getElementById("input2").value = prop10;
                document.getElementById("input3").value = '0'; /*prop3*/
                document.getElementById("input4").value = prop1;
                document.getElementById("input5").value = prop3;
                document.getElementById("input6").value = prop3;
                document.getElementById("input7").value = '15';
                document.getElementById("input8").value = prop1;
            }

            // Reduz a quantidade
            qnt--;
        }
    } else if (tipo === 'tropa') {
        while (total > valor || total === -1) {

            // Definir proporções
            let prop1 = qnt;
            let prop3 = qnt * 3;
            let prop6 = qnt * 6;
            let prop89 = qnt * 89;
            let prop133 = qnt * 133;

            // Cálculo do total
            let hpprop = hp * prop89;
            let bbprop = bb * prop1;
            let espprop = esp * prop133;
            let giroprop = giro * prop3;
            let gvprop = 0;
            let ariprop = ari * prop1;
            let fuziprop = fuzi * prop6;
            let mortprop = mort * prop1;

            


            total = hpprop + bbprop + espprop + giroprop + gvprop + ariprop + fuziprop + mortprop;

            if (total <= valor) {
                // Exibir as quantidades calculadas nos inputs
                document.getElementById("input1").value = prop89;
                document.getElementById("input2").value = prop1;
                document.getElementById("input3").value = prop133;
                document.getElementById("input4").value = prop3;
                document.getElementById("input5").value = '0';
                document.getElementById("input6").value = prop1;
                document.getElementById("input7").value = prop6;
                document.getElementById("input8").value = prop1;
            }

            // Reduz a quantidade
            qnt--;
        }
    }
}

// Adiciona o evento de cálculo ao formulário
lista.addEventListener('submit', (evento) => {
    evento.preventDefault();
    calcular();
});

function trocarclasse() {
    // Mesma função que você já tem para alterar as imagens
    const unitImages = {
        tropa: [
            "imagens/tropa/tropa-unit1.png",
            "imagens/tropa/tropa-unit2.png",
            "imagens/tropa/tropa-unit3.png",
            "imagens/tropa/tropa-unit4.png",
            "imagens/tropa/tropa-unit5.png",
            "imagens/tropa/tropa-unit6.png",
            "imagens/tropa/tropa-unit7.png",
            "imagens/tropa/tropa-unit8.png"
        ],
        frota: [
            "imagens/frota/frota-unit1.png",
            "imagens/frota/frota-unit2.png",
            "imagens/frota/frota-unit3.png",
            "imagens/frota/frota-unit4.png",
            "imagens/frota/frota-unit5.png",
            "imagens/frota/frota-unit6.png",
            "imagens/frota/frota-unit7.png",
            "imagens/frota/frota-unit8.png"
        ],
        default: [
            "imagens/defaultselect.png",
            "imagens/defaultselect.png",
            "imagens/defaultselect.png",
            "imagens/defaultselect.png",
            "imagens/defaultselect.png",
            "imagens/defaultselect.png",
            "imagens/defaultselect.png",
            "imagens/defaultselect.png"
        ]
    };

    const selectedClass = document.getElementById("classe").value;

    if (unitImages[selectedClass]) {
        // Atualiza cada unidade com a imagem correspondente
        for (let i = 1; i <= 8; i++) {
            const imgElement = document.getElementById(`unit${i}`);
            imgElement.src = unitImages[selectedClass][i - 1];
        }
    }

    // Limpa os campos de input1 até input8
    limparCamposDeUnidades();
}

// Função para limpar campos de unidades (input1 até input8)
function limparCamposDeUnidades() {
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`input${i}`).value = "";
    }
}

// Função auxiliar para limpar o formulário e os campos de unidades
function limparTodosCampos() {
    lista.reset();
    limparCamposDeUnidades();
}

function mostrarMensagem(mensagem) {
    alert(mensagem);
}
