let body = document.getElementsByTagName("body")[0];
let ol = document.createElement("ol");



function criarTitulo() {
    let h1 = document.createElement("h1");
    h1.innerText = "Minhas Tarefas do Curso SuperDev";
    h1.classList.add("titulo")

    body.appendChild(h1);


}

function paragrafo() {
    let p = document.createElement("p");
    p.innerText = "Curso Super Dev é um curso focado em programação full stack python";
    p.classList.add("Paragrafo")

    body.appendChild(p);
}

function listaOrdenada() {

    ol.id = "lista-ordenada";
    body.appendChild(ol);

}

function criarCampoTitulo() {
    let label = document.createElement("label")
    label.for = "campo-tarefa";
    label.innerText = "Digite a tarefa";

    let input = document.createElement("input");
    input.id = "campo-tarefa";
    input.type = "text";

    
        body.appendChild(label);
        body.appendChild(input);
        
}

function criarBotao() {
    let botao = document.createElement("button");
    botao.innerText = "Registrar tarefa";
    botao.addEventListener("click", registrar);
    botao.type = "button";

    body.appendChild(botao);
}

function registrar() {
   let registrar = document.getElementById("campo-tarefa").value;
   
   criarLi(registrar);

}

function criarLi(nomeTrefa) {
     let li = document.createElement("li");
     li.innerText = nomeTrefa;

     ol.appendChild(li);
}



criarTitulo();
criarCampoTitulo();
paragrafo();
listaOrdenada();
criarBotao();