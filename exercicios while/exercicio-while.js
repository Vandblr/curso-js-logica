function exercicio01() {

    let indice = 0;

    let total = 0;

    while (indice < 4) {
        let preco = parseFloat(prompt("Digite o preço").replace(",", "."))

        total = total + preco;

        indice = indice + 1;


    }

    let media = total / 4;


    alert("Total: R$ " + total.toFixed(2) + "\nMédia: R$ " + media.toFixed(2));
}


function exercicio02() {

    let indice = 0;
    let comA = 0;
    let outras = 0;

    while (indice < 5) {
        let palavra = prompt("Digite uma palavra");


        palavra = palavra.toLowerCase().trim();


        if (palavra.startsWith("a")) {
            comA = comA + 1;
        } else {
            outras = outras + 1;
        }

        indice = indice + 1;
    }


    alert("Começam com 'a': " + comA + " / Outras: " + outras);


}


function exercicio03() {

    let idade = 0;

    while (idade < 1 || idade > 120) {
        idade = parseInt(prompt("Digite a idade"));
        if (idade < 1 || idade > 120) {
            alert("Idade inválida, digite a idade certa");
        } else {
            alert("idade cadastrada");
        }

    }
}

function exercicio04() {

    let indice = 0;
    let maiorAltura = 0;


    while (indice < 3) {
        let altura = parseFloat(prompt("Digite a altura").replace(",", "."));

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        indice = indice + 1;
    } alert("Maior altura " + maiorAltura);

}

function exercicio05() {

    let menu = `Menu mini:

    1 - saudação
    2 - Par ou ímpar
    100 - sair
   Digite uma opção`;

    let opcao = 0;

    while (opcao !== 100) {
        opcao = parseInt(prompt("Digite uma opção"));

        if (opcao === 1) {
            let nome = prompt("Digite o seu nome");
            alert("Olá " + nome);
        } else if (opcao === 2) {
            let parImpar = parseInt(prompt("Digite um número"));
            if (parImpar % 2 !== 0) {
                alert("O número é impar");
            } else {
                alert("O número é par");
            }
        } else if (opcao !== 100) {
            alert("Opção inválida");
        }
    }

    alert("Sistema Encerrado");
}


function exercicio06() {

let nome = "";
let indice = 0;
let lista = "";

while (nome.toLowerCase().trim() !== "fim") {
    nome = prompt("Digite o nome ou 'fim' para encerrar");

    if (nome.toLowerCase().trim() !== "fim") {
        lista = lista + nome + "\n";

        indice++;
    }
} 
alert("Nomes cadastrados:\n" + lista + "\nQuantidade de nomes: " + indice);

}


function exercicio07() {

    let soma = 0;
    let indice = 0;

    while (indice < 4) {
        let precoTexto = (prompt("Digite um preço"));
        let precoLimpo = precoTexto

        .trim().replace("R$","").replace(",",".");

        let precoNumero = parseFloat(precoLimpo);

        soma = soma + precoNumero;
        indice++;
       
    }

    let media = soma  / 4;

    alert("Total:" + soma.toFixed(2) + "\nMédia: " + media.toFixed(2));
}



function exercicio08() {
     
    let indice = 0;
    let perguntas = 0;
    let naoPerguntas = 0;

    while (indice < 5) {
        let frase = prompt("Digite uma frase (" + (indice+1) + " de 5)").trimEnd();

        if (frase.endsWith("?")) {
            perguntas++;
        } else {
            naoPerguntas++;
        }

        indice++; 
    }

    alert("Perguntas: " + perguntas + "\nNão-perguntas: " + naoPerguntas);
}


function exercicio09() {

    let quantidadeVip = 0;
    let quantidadeOff = 0;
    let indice = 0;

    while (indice < 5) {
        let cupom = prompt("Insira um cupom");
        let norm = cupom.toLowerCase().trim();

        if (norm.startsWith("vip")) {
            quantidadeVip++;
        }
        if (norm.endsWith("off")) {
            quantidadeOff++;
        }

        indice++;
    }

    alert("Quantidade VIP: " + quantidadeVip + "\nQuantidade OFF: " + quantidadeOff);
}

function exercicio10() {

    let indice = 0;
    let lista = "";

    while ( indice < 3) {
        let nome =  prompt("Digite o nome completo (" + (indice+1) + " de 3)").trim();
        
        let partes = nome.split(" ");
        let primeiro = partes[0];

        lista = lista + primeiro + "\n";

        indice++;
    }

     alert("Primeiros nomes:\n" + lista);
}

