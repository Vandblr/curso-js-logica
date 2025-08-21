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
        let opcao = parseInt(prompt("Digite uma opção"));

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
        } else {
            alert("Sistema Encerrado");
        }
    }

}


function exercicio06() {

 
 
}
