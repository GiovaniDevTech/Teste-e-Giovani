let nome = "Giovani";
let cpf = "CPF: 123.456.789-12";
let cnpj = "CNPJ: ";
let pontosOriginal = 1000;
let pontos = 208;
let empresa = "Serasa Experian";
let plano = "basico";
let consultar = cpf; // se cnpj
let situacao = "Parabéns!, seu nome está limpo no Serasa";
let dividas = "Não encontramos nenhum dívida negativada"; // se pagou já, tirar negativo seu nome 5 dias uteis 

while (consultar) {
    console.log("#### " + empresa + " ####" + "\n");
    console.log("Nome : " + nome + "\n");
    console.log("Consulta foi encontrar: " + consultar + "\n");
    console.log("Seu pontos : " + (pontosOriginal - pontos) + "\n");
    console.log("Seu plano : " + plano + "\n");
    console.log("Situação: " + situacao + "\n");
    console.log("Dívidas em seu nome: " + dividas + "\n");
    consultar++;
}