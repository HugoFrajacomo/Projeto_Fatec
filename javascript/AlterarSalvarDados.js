/*-----------------------JAVASCRIPT-MOBILE------------------------------*/

function alterarDados01() {
    document.getElementById("mensagem1").innerHTML = "Campos habilitados";

    const alterarmobile = document.querySelectorAll(".input-perguntas-1");
    for (let alterar01 = 0; alterar01 < 10 ; alterar01++) {
        alterarmobile[alterar01].disabled = false;
    }
}


function salvarDados01() {
    const salvarmobile = document.querySelectorAll(".input-perguntas-1");

    for (let salvar01 = 0; salvar01 <= 9 ; salvar01++) {
        var input = salvarmobile[salvar01];
        var valor = input.value;

        if (valor.trim() === "") {
            return;
        }
        input.placeholder = valor;
        input.disabled = true;

    }
}

/*-----------------------JAVASCRIPT-DESKTOP------------------------------*/

function alterarDados() {
    document.getElementById("mensagem2").innerHTML = "Campos habilitados";

    const alterardesktop = document.querySelectorAll(".input-perguntas-2");
    for (let alterar02 = 0; alterar02 < 9; alterar02++) {
        alterardesktop[alterar02].disabled = false;
    }
}


function salvarDados() {
    const salvardesktop = document.querySelectorAll(".input-perguntas-2");

    for (let salvar02 = 0; salvar02 <= 20 ; salvar02++) {
        var input = salvardesktop[salvar02];
        var valor = input.value;

        if (valor.trim() === "") {
            return;
        }
        input.placeholder = valor;
        input.disabled = true;
    }
}
/*----------------------------------------------------------------------*/






