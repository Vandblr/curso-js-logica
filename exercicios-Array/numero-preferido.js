let preferido = [];

function cadastrarNumeros() {
    let numero = prompt("Digite núemro");
    preferido.push(numero);

}

function listarNumeros() {
    let texto = "listar numeros";

    for(let i = 0; i < preferido.length; i = i + 1) {

        let preferir = preferido[i]
        
        texto= texto + "\n\t " + i + " => " + preferir;
    }
    alert(texto);
}


function removerNumero() {
    let indicePararApagar = parseInt(prompt("Digite o indice que deseja apagar"));
    preferido.splice(indicePararApagar, 1);
    alert("numero removido com sucesso");
}

function alterarNumero() {
    let indiceParaAlterarNumero = parseInt(prompt("Digite o número que deseja alterar"));
    preferido[indiceParaAlterarNumero] = prompt("Digite o número");
    alert("Numero alterado com sucesso");
}