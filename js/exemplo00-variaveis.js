function apresentarMensagemConsole() {
    console.log("Hello World")
}
function apresentarMensagemUsuario(){
    alert("Minha primeira mensagem em JS para o usuário");
}

//buton onclick="exemploVriaveisInteiras()"somar inteiros fixos</button>"
//pdarãp de nomenclatura de funções em JS camelCase
function exemploVriaveisInteiras() {
    //padrão de nomenclatura de variáveis em JS é cameLCase
    let numero1 = 7; //tipo inteiro
    let numero2 = 24; //tipo inteiro
    let soma = numero1 + numero2;
    alert("soma:" + soma)
}

function exemploVariaveisString() {
    let nome = "john";
    let nomeComposto = "thiago"
    let sobrenome = "Doe";
    //o + tem função de soma e concatenação
    //concatenaçãp juntar duas coisas "Ana" "Maria" "AnaMaria"
    //John Thiago Doe 
    let nomeCompleto = nome + "" + nomeComposto+ "" + sobrenome;
    alert("Nome Completo" + nomeCompleto);
}

    function exemploVariaveisFloat(){

    let precoAbacaxi = 12.39;
    let precoSwitch2 = 4500.00;

    let total = precoAbacaxi + precoSwitch2;
    alert("total:" + total);

}

function exemploMercado() {
    let produto1Nome = "Cerveja"
    let produto1Quantidade = 12;
    let produto1preco = 5.30;
    let produto1Total = produto1Quantidade * produto1preco;
    
    let produto2Nome = "Amendoim";
    let produto2Quantidade = 2;
    let produto2Preco = 8.00;
    let produto2Total = produto2Quantiadade * produto2Preco;

    let totalCompra = produto1Total + produto2Total;

    alert(
        "produto 1: " + produto1Nome +
        "\nQuantidade: " + produto1Quantidade +
        "\nPreço Unitario: " + produto1Preco +
        "\n valor: " + produto1Total +
        "\n\nproduto 2: " + produto2Nome +
        "\Preço unitário: " + produto2Preco +
        "/nValor: " + produto2Total +
        "\n\nTotal: " + totalCompra

    )
}