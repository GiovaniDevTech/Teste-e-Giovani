//Crie dois exemplos de operadores de atribuição
//Crie dois exemplos de operadores unários
//Crie dois exemplos de operadores binários
//Crie dois exemplos de operadores ternários
//Crie dois exemplos de operador E
//Crie dois exemplos de operador OU


/*

//Operadores de atribuição

let prato = "azul";
console.log(prato);

prato = "Vermelho";
console.log(prato);

prato += "Amarelo";
console.log(prato);

//Operadores Unários
console.log(" ");
console.log("Operadores Unários");

let n1 = 1;
console.log(n1);

n1++;
console.log(n1);

let n2 = 20;
console.log(n2);

n2--;
console.log(n2);

let n3 = 15;
n3 = n3 + 1; // Isso daqui caso não soubessemos fazer n3++
n3 += 1;
n3++;

n3 += 4; // Aqui estou somando mais 4

n3 = n3 - 2;
n3 -= 10 // Eu posso também subtrair
n3--;

n3 -= 6;


console.log(n3);

// Exemplo com palavras
console.log("");
console.log("Exemplo com palavras")
console.log("");

let nome = "Giovani";
let sobreNome = "Vieira";

console.log(nome + sobreNome);

nome += "Vieira"; // Vai acontecer a mesma coisa
console.log(nome);

// Operadores binários

let n4 = 5;
console.log(n4 + 5); // Exemplo de operação binária

n4++; // Exemplo de operação unária

// Operador ternário 
// Ele exige 3 operadores


let idade = 10;

// Dez é maior que nove ? 
let resultado = 10 > 9 ? "Verdadeiro" : "Falso";

console.log("")
console.log("Imprimindo resultado")
console.log(resultado);
console.log("")

let comparacao = "Giovani" === "Giovani" ? "é igual!" : "Não é igual!";
console.log(comparacao);


//                1º Comparação       2ª Verdadeira   3 Falsa
let comparacao2 = "Gabr" === "Giovani" ? "é igual!" : "Não é igual!";
console.log(comparacao2);

*/

let idadeDaPessoa = 20;
let maiorIdade = false; // Isso daqui é uma NEGAÇÃO afirmação de que é menor de idade
let maiorIdade2 = true; // Isso daqui é uma AFIRMAÇÃO de que é menor de idade

let verificacao = idadeDaPessoa > maiorIdade ? "É maior de idade" : "É menor de idade";

// booleano com número 
// verdadeiro com verdadeiro
// verdadeiro com falso
// falso com verdadeiro
// falso com falso

let Professor = "Gabriel";
let Aluno = "Giovani"
let Turma = "T1"

console.log("Meu Professor é melhor : " + Professor);
console.log("Aluno : " + Aluno);
console.log("Turma : " + Turma);

let temosDinheiro = false;
let estaSol = false;



// Operador E = && 
let resultadoOperadorE = temosDinheiro && estaSol;

console.log(resultadoOperadorE);

//Isso daqui vai negar o resultado
let resultadoOperadorENegacao = !resultadoOperadorE;
console.log(resultadoOperadorENegacao);

let camisaPreta = true;
camisaPreta = !camisaPreta;

"Giovani" != "Giovani" // Aqui estou comparando se Giovani é diferente de Giovani


// Operador OU
console.log(" --- Operador OU --- ")

let bicicletaAzul = false;
let bicicletaVermelha = false;

// PIPE
let resultadoOu = bicicletaAzul || bicicletaVermelha;
console.log(resultadoOu);

let negacaoOu = !resultadoOu;
console.log("A negação é: " + negacaoOu);


let hora = 8;
let bomDia = hora < 12 ? "Bom dia!" : "Boa tarde ou Boa noite!"
console.log("Exemplo GIOVANI");

let verdadeOuMentira = true;

// Assim é mais difícil de editar depois 
let frase = "O São Paulo é " + verdadeOuMentira + " o melhor time do mundo! "; // Forma mais comum
console.log(frase);


let nota = 10;
let aluno = "Giovani";
let frase3 = `Parabéns ${aluno} você passou! ` + ("nota : ") + nota ;

console.log(frase3);


