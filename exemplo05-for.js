function exemploSolicitarNomes() {
    // let indice = 0;
    // while(indice < 3){
    //     let nome = prompt("Digite o nome");
    //     indice = indice + 1;
    // }

    // for tem como objetivo ir de um ponto até outro.
    // for(variável; condição; incremento/decremento)
    for (let indice = 0; indice < 3; indice = indice + 1) {
        let nome = prompt("Digite o nome");
    }

    function exemploApresentarSoma() {
        let soma = 0;
        for (let indice = 0; indice < 6; indice = indice + 1) {
            let numero = parseInt(prompt("Digite o numero"));
            soma = soma + numero;
        }
        alert("Somar: " + soma);
    }

    function exemploContador() {
        let contador;
        for (contador = 0; contador <= 10; contador = contador + 1) {
            alert(contador)
        }
        alert("Valor contador: " + contador);
    }

    function exemploContagemRegressiva() {
        for (let contador = 10; contador >= 0; contador = contador - 1) {
            if (contador === 0) {
                alert("Feliz ano novo!!!!!!!!!!");
            } else {
                alert(contador);
            }
        }
    }

    function calcularQuantidadeCamisetasPorTamanho() {

        //camisetas P, M , G, G2
        let quantidadeP = 0, quantidadeM = 0, quantidadeG = 0, quantidadeG2 = 0;
        let quantidadeCamisetas = parseInt(prompt("Digite a quantidade de camisetas desejadas"));
        for (let indice = 0; indice < quantidadeCamisetas; indice = indice + 1) {
            let tamanho = prompt("[" + (indice + 1) + "/" + quantidadeCamisetas + "] - Digite o tamanho da camiseta [P/M/G/G2]: ").toUpperCase().trim();

            while (tamanho !== "P" && tamanho !== "M" && tamanho !== "G" && tamanho !== "G2") {
                tamanho = prompt("Tamanho inválido.\n[" + (indice + 1) + "/" + quantidadeCamisetas + "] - Digite o tamanho da camiseta [P/M/G/G2]: ").toUpperCase().trim();
            }

            if (tamanho === "P") {
                quantidadeP = quantidadeP + 1;
            } else if (tamanho === "M") {
                quantidadeM = quantidadeM + 1;
            } else if (tamanho === "G") {
                quantidadeG = quantidadeG + 1;
            } else if (tamanho === "G2") {
                quantidadeG2 = quantidadeG2 + 1;
            }
        }
        alert(`Quantidade de camisetas por tamanho:
            P - ${quantidadeP}
            M - ${quantidadeM}
            G - ${quantidadeG}
            G2 - ${quantidadeG2}`)
    }
    
}

function numeroN() {

    let numeroN = parseInt(prompt("Digite um número"));

    for (let indice = 1; indice <= numeroN ; indice = indice + 1) {
        

        alert("numero: " + indice);
    }
}

function somarPares() {

    let soma = 0;

    for(indice = 1; indice <= 5; indice = indice + 1) {
        let numero = parseInt(prompt("Digite um número " + indice + " até 5"));

        if( numero % 2 === 0) {
            soma = soma + numero;
        }
    }

    alert(" A soma dos números pares é " + soma);
}


function numerada()  {

    let numero = parseInt(prompt("Digite um número "));

    for (let indice = 1; indice <= numero; indice = indice + 1 ) {
        alert("Mensagem " + indice)
    } 
}



function paresN() {

    let numero = parseInt(prompt("Digite um número"));
    let resultado = ""

    for (let indice = 1; indice <= numero; indice = indice + 1) {
     
        if(indice % 2 === 0) {
            alert("Os números pares são " + indice);
        }
    } 
}




function contar() {

    let acimaDe100 = 0;

    for (let indice = 1; indice <= 5; indice = indice + 1) {
     let numero = parseInt(prompt("Digite o " + indice + "º número"));
       
        if (numero > 100) {
            acimaDe100 = acimaDe100 + 1;

        }

    }

     alert("Total de números maiores que 100: " + acimaDe100)
}




function multiplicar() {
  let produto = 1;

    for (let indice = 0; indice <3; indice = indice + 1) {
        let numero = parseInt(prompt("Digite o número"));
        produto = produto * numero;
    } alert("Resultado " + produto)
}


function media() {

    let soma = 0;
   

    for(let indice = 0; indice < 5; indice = indice + 1) {

         let numero = parseFloat(prompt("Digite o " + (indice + 1) + "º número"));

          soma = soma + numero;
    }

    let media = soma / 5;
    alert("A média dos números é: " + media);
}


function contarImpares() {
    let contador = 0;

    let numero = parseInt(prompt("Digite um número"))
      
    for (let indice = 1; indice <= numero; indice = indice + 1) {
        if( indice % 2 !== 0) {
            contador++;
        }
       
    } 

      alert("Quantidade de números impares " + indice)

   
}

function somarPares() {

    let soma = 0;

    for (let indice = 1; indice <= 5; indice = indice + 1) {
        
        let numero = parseInt(prompt("Digite o número")); 

        if ( numero % 2 === 0) 
         soma = soma + numero;
       
    }

    alert("a soma dos pares é: " + soma)
}



function contagemSimples() {

    let numero = parseInt(prompt("Digite um número"))

    for ( let indice = 1; indice <= numero; indice = indice + 1) {
         alert(" Número " + indice)
    }
       
}


function media() {

   
   let soma = 0;
     
    for (indice = 0; indice < 5; indice = indice + 1) {
        
        let numero = parseInt(prompt("Digite um número"))

         soma = soma + numero;
        
    }

    let media = soma / 5;

    alert("a soma da media é: " + media)

    
}

function contarImpar() {

let contador = 0;

let numero  = parseInt(prompt("Digite um número"));

    for (let indice = 1; indice <= numero; indice = indice + 1) {
        
        if (indice % 2 !== 0 ) {
          contador = contador + 1;
    }
}

 alert("Total de números ímpares de 1 até " + numero + " são : " + contador)

}


function maiorNumero()  {

    let maiorNumero = 0;
     


    for (indice = 0; indice <= 5; indice = indice + 1) {

        let numero = parseInt(prompt("Digite o número"))
        if ( numero > maiorNumero) {
            maiorNumero = numero;
        }
    }

    alert("o Maiornúemro é " + maiorNumero)

}


function contagemProgressiva() {

    let quantidade = parseInt(prompt("Digite o número "));

    for(let indice = 0; indice <= quantidade; indice = indice + 1) 
    alert("número " + indice);
}