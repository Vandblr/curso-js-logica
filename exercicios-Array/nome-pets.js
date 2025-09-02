let pets = [];

function cadastrarpets() {
    let nome = prompt("Digite o nome do pet");
    pets.push(nome);
}

function listarPets() {
    let texto = "Lista de pets";

    for (let i =0; i < pets.length; i = i + 1) {
        let pet = pets[i]

        texto= texto + "\n\t " + i + " => " + pet;
    }

    alert(texto);
}

function removerPet() {
    let indicePararApagar = parseInt(prompt("Digite o pet que gostria de remover"));
    pets.splice(indicePararApagar, 1);
    alert("Pet removido com sucesso");
}

function alterarPet() {
    let = indiceParaAlterar = parseInt(prompt("Digite o indice que gostaria de alterar"));
    pets[indiceParaAlterar] = prompt("Digite o novo nome do pet");
    alert("Pet alterado comm sucesso");
}
