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

