function functionDadosPaciente() {
    //utilizando multiplas variaveis

    let tipoSanguineo = "A+";
    let cpf = "102.12.129-20";
    let idade = 20;
    let nome = "Maria";
    console.log(`Nome: ${nome}
        tipo Sanguineo: ${tipoSanguineo}
        idade = ${idade}
        CPF : ${cpf}`);


    //Criando um objeto para armazenar váriaveis caracteristicas

    let pacieteMaria = {
        tipoSanguineo: "A+",
        cpf: "102.902.123-0",
        idade: 20,
        nome: "Maria"
    };

    //Alterar a idade da maria 

    paciente.idade = 22;
    console.log(`Nome: ${pacieteMaria.nome}
            tipo Sanguineo: ${pacieteMaria.tipoSanguineo}
            idade: ${pacieteMaria.idade}
            CPF: ${pacieteMaria.cpf}`);
}


function exercicioDadosJogo() {
    let nome = "Assassins Creed";
    let genero = "Aventura";
    let dataLancamento = "2007";
    console.log(`Nome: ${nome},
            genero : ${genero}
            Data de lançamento: ${dataLancamento}`);

    let jogo = {
        nome: "Assassins Creed",
        genero: "genero",
        dataLancamento: "2007"

    };
    console.log(`Nome: ${jogo.nome}
                genero: ${jogo.genero}
                data de lançamento: ${jogo.dataLancamento}`);

    jogo.publisher = "Ubisoft";
    jogo.preco = 200.00;

    console.log(`Nome: ${jogo.nome}
                    genero: ${jogo.genero}
                    data de lançamento: ${jogo.dataLancamento}
                    publisher: ${jogo.publisher}
                    preço: ${jogo.preco}`);

}




function exemploObjetoEmVetor() {
    let alunos = [];

    let aluno1 = {};
    aluno1.nome = prompt("Digite o nome do Aluno");
    aluno1.nota1 = parseFloat(prompt("Digite a nota 1"));
    aluno1.nota2 = parseFloat(prompt("Digite a nota 2"));
    aluno1.nota3 = parseFloat(prompt("Digite a nota 3"));
    aluno1.media = calcularMedia(aluno1);
    alunos.push(aluno1);

    let aluno2 = {};
    aluno2.nome = prompt("Digite o nome do Aluno");
    aluno2.nota1 = parseFloat(prompt("Digite a nota 1"));
    aluno2.nota2 = parseFloat(prompt("Digite a nota 2"));
    aluno2.nota3 = parseFloat(prompt("Digite a nota 3"));
    aluno2.media = calcularMedia(aluno2);
    alunos.push(aluno2);

    console.table(alunos);
}

function calcularMedia(aluno){
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    return media;
}


function listaDeColaboradores() {
    let colaboradores = [];

    let colaborador1 = {};
    colaborador1.nome = prompt("Digite o nome do colaborador");
    colaborador1.valorhora = parseFloat(prompt("digite o valor hora"));
    colaborador1.quantidadehoras = parseFloat(prompt("Digite a quantidade de hoas"));
    colaboradores.push(colaborador1);

    let colaborador2 = {};
    colaborador2.nome = prompt("Digite o nome do colaborador");
    colaborador2.valorhora = parseFloat(prompt("digite o valor hora"));
    colaborador2.quantidadehoras = parseFloat(prompt("Digite a quantidade de horas"));
    colaboradores.push(colaborador2);

    console.table(colaboradores);

}
function calcularSalarioBruto(colaboradores) {
    const salarioBruto = colaboradores.valorhora * colaboradores.quantidadehoras;
    return salarioBruto;
} 