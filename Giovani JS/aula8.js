//Estrutura condicional IF

//let combustivel = "alcool"; 

/*

if ( combustivel == "gasolina" ) {
    console.log("Abastecer gasolina!");
} else if (combustivel == "alcool"){
    console.log("Abastecer alcool!");
} else if (combustivel == "diesel"){
    console.log("Abastecer Diesel")
} else {
    console.log("Valor informado é inválido, favor informe outro valor")
}

*/

// Exemplo Calculadora

/*let operacao = "soma";
let numero1 = 10;
let numero2 = 5;

if ( operacao == "soma" ) {
    console.log("Operação de soma " + (numero1 + numero2));

} else if (operacao == "subtracao"){
    console.log("A subtração dos dois valores é " + (numero1 - numero2));

} else if (operacao == "multiplicacao"){
    console.log(`A multiplicação de ${numero1} por ${numero2} é igual a ${numero1 * numero2}`)

} else if (operacao == "divisao"){
    console.log("A divisão dos dois valores é " + (numero1 - numero2))
} else {
    console.log("Operação inválida, informe uma operação válida!")
}*/


// Aqui temos tipos diferentes, então ele ira colocar um ao lado do outro

//Aqui temos tipos iguais então ele irá somar

let celular = "xiaomi";

let vender = 1200;
let entrada = 200;
let faltas = vender - entrada;
let parcela = 12;

console.log("Produto: " + celular + " Vender R$ " + vender + " Entrada à vista R$ " + entrada + " por " + parcela + " vezes valor R$ " + (faltas/parcela));
console.log("Vender R$ " + vender);
console.log("Entrada R$ " + entrada);
console.log("Restante R$ " + faltas);
console.log("Parcela " + parcela + " vezes");

console.log("Total = R$ " + (vender + entrada));
if ( celular == "xiaomi" ); {
    console.log("Sim o seu celular é xiaomi!");
}

