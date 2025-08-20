function exercicio01() {

    let indice = 0;

    let total = 0;

    while (indice < 4) {
        let preco = parseFloat(prompt("Digite o preço").replace(",", "."))

        total = total + preco;

        indice =  indice + 1;

        
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