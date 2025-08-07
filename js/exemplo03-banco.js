let saldo = 2000.00 ;

    function  sacar() {
        const valorSaque = parseFloat(
            prompt("Digite o valor do saque", "RS")
            .replace(",", ".")
            .replace("R$", "")
            .replace("", "")
        );

        if (valorSaque > saldo) {
            alert("Saldo insufuciente");
        }else {
            const confirmacao = confirm("Deseja realmente realizar o saque?");
            if (confirmacao === true) {
                saldo = saldo - valorSaque;
                apresentarSaldo();
            }
        }
    }

    function apresentarSaldo() {
        alert("Saldo atual R$" + saldo.toFixed(2).replace*".",",");
    }

    function depositar() {
        const valorDeposito = parseFloat(
            prompt("Digite o valor do depósito", "R$")
            .replace(",", ".")
            .replace("R$", "")
            .replace("", "")
        );
        
        if (valorDeposito <= 0) {
            alert("Valor de depósito não pode ser menor ou igual a R$ 0,00");
            depositar();
        } else {
            saldo = saldo + valorDeposito;
        }
    }
