function exercicio01() {

    let desejaCadastrar = "sim";
    let total = 0;
    let quantidade = 0;
    let maiorPreco = 0;
    let nomeMaisCaro = "";

    while( desejaCadastrar === "sim") {
        let produtos = "";
        let valores = 0;

        let nomeProduto = prompt("Digite o nome do produto").trim(); 
        if ( nomeProduto.length < 2) {
            alert("Invalido, insira mais que 2 letras");
            continue; 
        }
        let preco = parseFloat(prompt("Digite o valor do produto ex  R$ 1.299,90").replace(".", "").replace("," , ".").replace("R$", "").trim());
        
        produtos = produtos + nomeProduto;
        valores = valores + preco;
        
        if ( preco > maiorPreco) {
            maiorPreco = preco;
            nomeMaisCaro = nomeProduto;
        }

        total = total + preco;

        quantidade = quantidade + 1;
        
        desejaCadastrar = prompt("Cadastrar outro produto? (sim /não)").trim()
    }
      alert("Total: R$ " + total + 
        "\nQuantidade: " + quantidade +
        "\nMaior preço: " + maiorPreco +
        "\nNome do mais caro: " + nomeMaisCaro
      )

}

function exercicio02() {

    let indice = 0;

    while( indice < 5) {
        let informacoes = prompt("digite as informações ex (id;nome;cpf;aaaa-mm-dd)");
        
        let partes = informacoes.split(";")

        let id = partes[0].replace(/\D/g,"");
        let nome = partes[1].trim();
        let cpf = partes[2];
        let ano = partes[3];

        

        


        indice = indice +1;
    }
}



