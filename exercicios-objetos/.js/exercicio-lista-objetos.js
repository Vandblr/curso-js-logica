function listaDeCarros() {
    let carros = [
        {
            marca: "Chevrolet",
            modelo: "Onix",
            placa: "BRA2E19",
            cor: "Azul",
            data_emplacamento: 2022
        },
        {
            marca: "Fiat",
            modelo: "Uno",
            placa: "BRA2B16",
            cor: "Verde",
            data_emplacamento: 2020
        },
        {
            marca: "Citroen",
            modelo: "C3",
            placa: "BRA5F15",
            cor: "Branco",
            data_emplacamento: 2023
        },
        {
            marca: "kIA",
            modelo: "Picanto",
            placa: "BRA2R23",
            cor: "Laranja",
            data_emplacamento: 2019
        },
        {
            marca: "Renault",
            modelo: "Kwid",
            placa: "BRA2H15",
            cor: "preto",
            data_emplacamento: 2024
        },
        {
            marca: "BMW",
            modelo: "Bmw x4",
            placa: "BRA2W21",
            cor:"Cinza",
            data_emplacamento: 2025
        },
        {
            marca: "JEEP",
            modelo: "Renegade",
            placa: "BRA2l13",
            cor:"Vermelho",
            data_emplacamento: 2022
        }

    ]
    
     
    let marcas = carros.map(carro => {
        return {
            marca: carro.marca,
            modelo: carro.modelo
        };    
    });

    console.log(marcas)
   
    let carroFiat = carros.filter(carro => carro.marca == "Fiat").map(carro => carro.marca);
    
    console.log(carroFiat)

    let carroCor = carros.filter( carro =>  carro.cor == "Azul").map(carro => {
        return {
            cor: carro.cor,
            modelo: carro.modelo
         
        };
    });

    console.log(carroCor)

  let ano = carros.filter(carro => {
    let anoplaca = new Date(carro.data_emplacamento);
    if (anoplaca.getFullYear() === 2025) {
        return true;
    } else {
        return false;
    }
  });

  console.log(ano)
   
}
 listaDeCarros();








