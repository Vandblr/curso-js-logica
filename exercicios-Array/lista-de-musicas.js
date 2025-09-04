let titulos = [ "Blinding Lights ","Bohemian Rhapsody ","Evidências ","Aquarela do Brasil ","Rap Lord ","Shape of You ","Tempo Perdido "];
let anosDeLancamento = [ 2019,1975,1990, 1939,2016,2017,1986];
let artistas = ["The Weeknd ","Queen ","Chitãozinho & Xororó ","Ary Barroso ","Haikaiss ", "Ed Sheeran ","Legião Urbana "];
let albuns = [ "After Hours","A Night at the Opera","Evidências","Aquarela do Brasil","Teto Baixo","Divide","Dois"];
let duracoesEmSegundos = [200,355,260, 225,300,240, 266];
let generos = ["Pop","Rock", "Sertanejo", "MPB", "Rap", "Pop","Rock"];


function cadastrarMusicas() {

    let titulo = prompt("titulo");
    let ano = parseInt(prompt("lançamento"));
    let artista = parseInt(prompt("artista"));
    let album = parseInt(prompt("album"));
    let duracao = parseInt(prompt("duração em segundos"));
    let genero = parseInt(prompt("gênero"))


    titulos.push(titulo);
    anosDeLancamento.push(ano);
    artistas.push(artista);
    albuns.push(album);
    duracoesEmSegundos.push(duracao);
    generos.push(genero)

    alert(`Titulo: "${titulo}" cadastrado com sucesso !`);

}


function listarAnoDeLancamento() {
    let lista = [];
    for (let indice = 0; indice < titulos.length; indice = indice + 1) {
    let lançamento = anosDeLancamento[indice];
    let musica = titulos[indice];
    if( lançamento < 2000) {
        lista.push(musica)
    }
    }
    
    alert( `Lista de ano de lançamento : 
${lista}`)

}


function listarMusicasDoArtista() {
    let lista = [];
    alert(artistas)
    let buscar = prompt(" Digite o  artista");
    for (indice = 0; indice < titulos.length; indice = indice + 1){
      let artista = artistas[indice];
      let musica = titulos[indice];
      if(buscar.toLowerCase() === artista.toLowerCase()){
        lista.push(musica)
      }
    }

    alert("lista de músicas do artista " + lista)
}

function  musicasMaisLonga() {
      let musicasMaisLonga = 0;
      let nomeMusicaMaisLonga = "";

      for(let indice = 0; indice < titulos.length; indice = indice + 1) {
       
        let tempo = duracoesEmSegundos[indice];
        let musica = titulos[indice];

        if(tempo > musicasMaisLonga) {
         musicasMaisLonga = tempo
         nomeMusicaMaisLonga = musica;
       }

      }
   alert("Música mais longa " + nomeMusicaMaisLonga)
  
}

function musicasMaisCurta() {
    let musicasMaisCurta = 99999;
    let nomeMusicaMaisCurta = "";

    for(let indice = 0; indice < titulos.length; indice = indice + 1) {
        
        let tempo = duracoesEmSegundos[indice];
        let musica = titulos[indice];

        if(tempo < musicasMaisCurta) {
            musicasMaisCurta = tempo
            nomeMusicaMaisCurta = musica;
            
        }
    }

    alert("Música mais curta " + nomeMusicaMaisCurta)
}

function mediaMusicas() {
    let soma = 0;

    for(let indice = 0; indice < titulos.length; indice = indice + 1) {
        let tempo = duracoesEmSegundos[indice];
        soma = soma + tempo;

    }

    let media = soma / titulos.length;

    alert(" A média das músicas é: " + media)
    
     
}