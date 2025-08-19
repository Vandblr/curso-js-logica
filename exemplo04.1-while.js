function exemploWhile01() {
    let indice = 0;
    while (indice <= 4) {
        let item = prompt("Digite o nome do item");

        indice = indice + 1;
    }
}

function exemploWhile02() {
    
    while (indice < 3) {
        let nick = prompt("Digite seu nick").trim()
        let partidas = parseInt(prompt("Digite o número de partidas"));
        let percas = parseInt(prompt("Digite o número de percas"));
        let pdl = parseInt(prompt("Digite o pdl"));

        indice = indice + 1;
    }
}

function descobrirMaiorAltura() {
    let indice = 0 ;
    let maiorAltura = 0;
    while(indice < 13) {
        let altura = parseFloat(prompt("Digite a altura").replace(",", "."));

        if(altura > maiorAltura) {
            maiorAltura = altura;
        }

        indice = indice + 1;
    }

    alert("Maior Altura" + maiorAltura);
}


function descobrirMenorIdade() {
    let indice = 0;
    let menorIdade = 999999;
    while (indice < 3) {
        let nome = prompt("Digite o nome");
        let idade = parseInt(prompt("Digite a idade"));

        if(idade < menorIdade) {

        }
         indice = indice + 1;
    }
    alert("Menor idade " + menorIdade)
}

function solicitarAteDigitarFim() {
    let nome = "";
    while (nome.tolowweCase().trim() !== "fim") {
        nome = prompt("Digitar o nome ou o  'fim'  para encerrar")  
    }
}

function sistemaComMenu() {

    let opcaoEscolhida = 0;
    while (opcaoEscolhida !== 100) {
        opcaoEscolhida = parseInt(prompt(menu));
        if (opcaoEscolhida === 1) {
            exemploWhile01();
        } else if (opcaoEscolhida === 2) {
            exemploWhile02();
        } else if (opcaoEscolhida === 3) {
            descobrirMaiorAltura();
        }else if (opcaoEscolhida === 4) {
            descobrirMenorIdade();
        } else if (opcaoEscolhida === 5) {
            solicitarAteDigitarFim();
        } else if (opcaoEscolhida !== 100) {
            alert("Opção inválida");
        }
    }
}