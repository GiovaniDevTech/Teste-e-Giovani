//Atividade 
// 1 - Selecionassem um elemento 
// 2 - Alterar o conteúdo de um elemento
// 3 - Removerem um elemento
// 4 - Desafio! Criar um botão que mostre algo na tela

let texto = document.querySelector(' .texto3');

function traducao() {
    texto.innerHTML = "Oi, tudo bem? meu nome é Giovani, prazer conhecer, eu fico muito feliz, aprendi inovação.";
}
let removeTraducao = texto;
function apagar() {

    removeTraducao.remove()
}

function ok() {
    alert("Perfeito!, ótimo... Parabéns!!! -  Professor Gabriel")
}