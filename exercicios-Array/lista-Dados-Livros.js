let titulos = [
  "O Nome do Vento",
  "Orgulho e Preconceito",
  "Do Mil ao Milhão",
  "Clean Code",
  "JavaScript: The Good Parts",
  "A Garota no Trem",
  "O Hobbit"
];

let anosDePublicacao = [2007, 1813, 2018, 2008, 2008, 2015, 1937];
let editoras = ["Arqueiro", "Penguin", "HarperCollins", "Prentice Hall", "O'Reilly", "Record", "HarperCollins"];
let numerosDePaginas = [656, 432, 192, 464, 176, 378, 320];
let precos = [79.90, 49.90, 39.90, 199.90, 129.90, 54.90, 59.90];
let categorias = ["Ficção", "Romance", "Financeiro", "Tecnologia", "Tecnologia", "Romance", "Ficção"];

function cadastrarLivro() {
  const titulo = prompt("Titulo:");
  const ano = parseInt(prompt("Ano:"));
  const editora = prompt("Editora:");
  const paginas = parseInt(prompt("Número de páginas:"));
  const preco = parseFloat(prompt("Preço:"));
  const categoria = prompt("Categoria:");

  titulos.push(titulo);
  anosDePublicacao.push(ano);
  editoras.push(editora);
  numerosDePaginas.push(paginas);
  precos.push(preco);
  categorias.push(categoria);

  alert(`Livro "${titulo}" cadastrado com sucesso!`);
}

function listarFiccao() {
  let lista = [];
  for (let indice = 0; indice < titulos.length; indice++) {
    if (categorias[indice].toLowerCase().trim() === "ficção") {
      lista.push(titulos[indice]);
    }
  }
  alert(lista.length > 0 
    ? `Livros de Ficção:\n${lista.join("\n")}` 
    : "Nenhum livro de Ficção encontrado.");
}

function listarPublicadosAPartir2010() {
  let lista = [];
  for (let indice = 0; indice < titulos.length; indice = indice + 1) {
    if (anosDePublicacao[indice] >= 2010) {
      lista.push(titulos[indice]);
    }
  }
  alert(`Publicados a partir de 2010:\n${lista.join("\n")}`);
}

function listaPorEditora() {
  let editora = prompt("Digite o nome da editora:").trim().toLowerCase();
  let lista = [];
  for (let indice = 0; indice < titulos.length; indice++) {
    if (editoras[indice].toLowerCase() === editora) {
      lista.push(titulos[indice]);
    }
  }
  alert(lista.length > 0 
    ? `Livros da editora ${editora}:\n${lista.join("\n")}` 
    : `Nenhum livro encontrado para a editora "${editora}".`);
}

function listarMaisDe300Paginas() {
  let lista = [];
  for (let indice = 0; indice < titulos.length; indice = indice + 1) {
    if (numerosDePaginas[indice] > 300) {
      lista.push(titulos[indice]);
    }
  }
  alert(`Livros com mais de 300 páginas : \n${lista.join("\n")}`);
}

function livroMaisPaginas() {
  let maior = 0;
  for (let indice = 1; indice < numerosDePaginas.length; indice = indice + 1) {
    if (numerosDePaginas[indice] > numerosDePaginas[maior]) {
      maior = indice;
    }
  }
  alert(`Livro com mais páginas:\n${titulos[maior]} - ${numerosDePaginas[maior]} páginas`);
}

function livroMenosPaginas() {
  let menor = 0;
  for (let indice = 1; indice < numerosDePaginas.length; indice = indice + 1) {
    if (numerosDePaginas[indice] < numerosDePaginas[menor]) {
      menor = indice;
    }
  }
  alert(`Livro com menos páginas:\n${titulos[menor]} - ${numerosDePaginas[menor]} páginas`);
}

function mediaPaginas() {
  let soma = 0;
  for (let indice = 0; indice < numerosDePaginas.length; indice = indice + 1) {
    soma = soma + numerosDePaginas[indice];
  }
  let media = soma / numerosDePaginas.length;
  alert(`Média de páginas: ${media.toFixed(2)}`);
}

function titulosGrandes() {
  let lista = [];
  for (let indice = 0; indice < titulos.length; indice++) {
    if (titulos[indice].length > 30) {
      lista.push(titulos[indice]);
    }
  }
  alert(lista.length > 0
    ? `Títulos com mais de 30 caracteres:\n${lista.join("\n")}`
    : "Nenhum título com mais de 30 caracteres encontrado.");
}
function livroMaisCaro() {
  let indice = 0;
  for (let i = 1; i < precos.length; i = i + 1) {
    if (precos[i] > precos[indice]) {
      indice = i;
    }
  }
  alert(`Livro mais caro:\n${titulos[indice]} - R$ ${precos[indice].toFixed(2)}`);
}

function livroMaisBarato() {
  let indice = 0;
  for (let i = 1; i < precos.length; i = i + 1) {
    if (precos[i] < precos[indice]) {
      indice = i;
    }
  }
  alert(`Livro mais barato:\n${titulos[indice]} - R$ ${precos[indice].toFixed(2)}`);
}

function listarTecnologia() {
  let lista = [];
  for (let indice = 0; indice < titulos.length; indice = indice + 1) {
    if (categorias[indice] === "Tecnologia") {
      lista.push(`${titulos[indice]} - R$ ${precos[indice].toFixed(2)}`);
    }
  }
  alert(`Livros de Tecnologia:\n${lista.join("\n")}`);
}

function listarRomance() {
  let lista = [];
  for (let indice = 0; indice < titulos.length; indice = indice + 1) {
    if (categorias[indice] === "Romance") {
      lista.push(`${titulos[indice]} (${anosDePublicacao[indice]})`);
    }
  }
  alert(`Livros de Romance:\n${lista.join("\n")}`);
}

function listarComJavaScript() {
  let lista = [];
  for (let indice = 0; indice < titulos.length; indice = indice + 1) {
    if (titulos[indice].includes("JavaScript")) {
      lista.push(titulos[indice]);
    }
  }
  alert(`Livros com "JavaScript" no título:\n${lista.join("\n")}`);
}
