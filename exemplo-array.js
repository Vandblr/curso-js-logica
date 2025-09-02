let livros = []; 
let precos = [59.20, 198.30, 3.00];
let categorias = ["Mediano", "Caro", "promo"];

// Tabela dpreços
//"promo"  até 10
//mediano até 100
//"caro"  acima de 100


function cadastrarLivro() {
    let nome = prompt("Digite o nome do livro");
    livros.push(nome);

    let preco =parseFloat(prompt("Digite o preço do livro"));
    precos.push(preco);

    let categoria ="";
    if (preco <= 10) {
        categoria = "Promo"
    } else if (preco <= 100) {
        categoria = "Mediano"
    } else {
        categoria = "Caro"
    }
    categorias.push(categoria);
}

function listarLivros() {
    let texto = "Lista de livros";

    for (let i =0;  i < livros.length; i = i + 1){
        let livro = livros[i]

        let preco = precos[i];
        let categoria =  categorias[i];

        texto= texto + "\n\t " + i + " => " + livro + " R$ " + preco + "("+ categoria + ")";
    }

    alert(texto);
}

function removerLivro() {
    let nomePararApagar = parseInt(prompt("Digite o nome que deseja apagar"));
    for(let i = 0; i <livros.length; i = i + 1) {
        let livro = livros[i];

        if (nomePararApagar === livro ) {
            livros.splice(i, i);
            precos.splice(i, 1);
            categorias.splice(i,1);
            alert("Livro removido com sucesso");
            return;
        }
    }
    alert("Livro removido com sucesso");
}

function alterarLivro() {
    let indiceParaAlterarLivro = parseInt(prompt("Digite o livro que deseja alterar"));
    let novoNome = prompt("Digite o novo nome do livro",
        livros[indiceParaAlterarLivro])
        let novoPreco = parseFloat(prompt("Digite o novo preço", precos[indiceParaAlterarLivro]));

        let novaCategoria = "";
        if(novoPreco <= 10) {
            novaCategoria = "Promo"
        }else if (novoPreco <= 100) {
            novaCategoria = "Mediano"
        } else  {
            novaCategoria = "Caro";
        }
        livros[indiceParaAlterarLivro] = novoNome;
        precos[indiceParaAlterarLivro] = novoPreco;
        categorias[indiceParaAlterarLivro] =novaCategoria;
    alert("Livro alterado com sucesso");
}