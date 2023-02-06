// Estrutura de Controle
// Exemplo de estrutura do For

// Para(declaração; expressão; modificação){
//    faça
// }

// for(let hora =1; hora <=24; hora++){
//    
// }

// Aqui estou declarando a variável
/*let litros = 5;

// 40 é a capacidade do tranque
let abastecer = litros < 40;

// Eu abasteço o carro
litros++;

//  Para(declaração; expressão; modificação){
    for(let litros = 5; litros <= 40; litros++){
        console.log(litros);
    }*/

    // let nomes = "Giovani", "Jonathan", "Kiko";

    // 7, 6, 5, 3, 2, 1, 0 é <= 6
    // 0, 1, 2, 3, 4, 5, 6
    // <= 0 as 6
    // < 0 as 5 e tirar menos 6

    /*for(let numero = 7; numero <= 6; numero++){
        console.log(numero);
    }*/

/*
    let soma = 1 + 1;
    let soma2 = soma + 2;
*/
    // Eu tenho 2 alunos e cada aluno tem 2 notas

    // Jonathan e a nota1 5.6 e a nota2 6.1
    // Giovani  e a nota1 6.8 e a nota2 5.4


    // For dentro e outro for dentro
    /*for (let alunos = 1; alunos <= 2; alunos++) {
        console.log("Alunos " + alunos);
    }

    for(notas = 1; notas <= 2; notas++){
        console.log("A nota é " + notas);
    }*/

    //For dentro e outro for dentro
   /* for (let alunos = 1; alunos <= 2; alunos++) {
        console.log("Aluno " + alunos);
        for(notas = 1; notas <= 2; notas++){
            console.log("A nota é " + notas);
        }
    }*/


    // Estruturas de Controle

    // Quais tipos de estruturas de controle nós temos?

    // Estruturas condidicionais e Estruturas de repetição

    // Do While

    // a diferença do while e do Do While
    // DO While - ele faz antes de vertificar
    // while - ele verificar antes de fazer

    /*let passos = 40;

    while (passos <= 50){ // O while não sabe quanto vale a variavel nota
        console.log("Andou " + passos + " passos");
        passos++;
    }*/


    /*let hora = 9;

    do {
        console.log("Agora são " + hora + " horas.");
        hora++;
    } while (hora <= 12);

    while (hora <= 12) {
        console.log("Agora são " + hora + " horas.");
        hora++;
    }*/

    // Exemplo de calculadora

    /*let sinal = "+";

    if(sinal == "+"){
        console.log("Operação de soma");
    }else if(sinal == "-"){
        console.log("Operação de subtração");
    }

    switch (sinal) {
        case "+":
            console.log("Operação de soma");
            break;
        case "-":
        console.log("Operação de subtração");

        default:
            break;
    }*/


    // Eu tenho 2 alunos e cada aluno tem 2 notas

    // Jonathan e a nota1 5.6 e a nota2 6.1
    // Giovani  e a nota1 6.8 e a nota2 5.4

     //For dentro e outro for dentro

    /*for (let alunos = 1; alunos <= 2; alunos++) {
        console.log("Aluno " + alunos);
        for(notas = 1; notas <= 2; notas++){
            console.log("A nota é " + notas);
        }
    }*/

    let cliente = "Giovani";

    for(let cliente = 1; cliente <= 2; cliente++){
        console.log("Pedido de cliente: " + cliente);
        for (let carro = 0; carro <= 4; carro++) {
            console.log("Veículos tem? \n" + carro + " carros");
        }
    }