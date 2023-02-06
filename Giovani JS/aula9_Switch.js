//atividade
//4 - Switch

let opcao = 6; // Case pegar numero 1 = Cliente, 2 = Carro, 3 = Entrada, 4 = Restante, 5 = Parcelas, 6 = Resultado, 7 = Sair;
let nome = "Giovani";
let vender = 18000;
let entrada = 5000;
let parcela = 24;
let faltas = (vender - entrada);

switch (opcao) {
    case 1:
        console.log("#### Cliente ####");
        console.log("Nome: " + nome);
        break;

    case 2:
        console.log("#### Carro ####");
        console.log("Carro valor total R$ " + vender);
        break;

    case 3:
        console.log("#### Entrada ####");
        console.log("Entrada total R$ " + entrada);
        break;

    case 4:
        console.log("#### Restante ####");
        console.log("Restante R$ " + faltas);
        break;

    case 5:
        console.log("#### Parcelas ####");
        console.log("Parcelas " + parcela + " vezes");
        break;

    case 6:
        console.log("#### Informacao ####");
        console.log("Nome: " + nome);
        console.log("Carro valor total R$ " + vender);
        console.log("Entrada total R$ " + entrada);
        console.log("Restante R$ " + faltas);
        console.log("Parcelas " + parcela + " vezes  R$ " + (faltas / parcela));
        break;

    case 7:
        console.log("Sair...");
        break;
            
    default:
        console.log('Fim');
}