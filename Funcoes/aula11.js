// Padaria, Posto de gasolina, Academia
let nome = "Giovani";
let pagamento;

function chamaNome(nome) {
    console.log("Sr(a). " + nome + " seu lanche está pronto.");
    return nome;
}

function formaPagamento(pagamento, nome) {
    if(pagamento == "Débito"){
        console.log("Muito obrigado, pagamento efetuado no débito! " + nome);
    } else if(pagamento == "Crédito"){
        console.log("Pagamento efetuado no Crédito! " + nome);
    } else {
        console.log("Muito obrigado, pagamento efetuado no PIX! " + nome);
    }
    return pagamento, nome;
}

chamaNome(nome);

formaPagamento("PIX", nome);

// Quantos lanche foram vendidos

let chamadosNomeVendidos = 1;
let lancheVendidos = 10;

console.log("\nChamados nomes vendidos: " + chamadosNomeVendidos);
console.log("Lanche vendidos: " + lancheVendidos + "\n");

// A média do valor da conta, ou seja 10 + 5 + 15 = 30 / 3 = 10


let empresa = "IFOOD"
let debito = 500;
let credito = 300;
let pix = 200;
let soma = (debito + credito + pix);

function valorConta(empresa) {
    if(empresa == "Débito"){
        console.log("Total Débito: R$ " + debito);
    } else if(empresa == "Crédito"){
        console.log("Total Crédito: R$ " + credito);
    } else {
        console.log("Total PIX: R$ " + pix);
    }
}

valorConta("Débito", empresa);
valorConta("Crédito", empresa);
valorConta("PIX", empresa);

// Qual lanche a pessoa quer, e usar um if else, switch

let pessoasPediuLanche;

function PessoaQuer(pessoasPediuLanche) {
    if(pessoasPediuLanche == "Pizza"){
        console.log("\nEu quero uma pizza");
        console.log("Infelizmente não temos mais nesse sabor, más temos outros se desejar.");
    } else {
        console.log("\nEu quero uma X-salada");
        console.log("Agradecemos a preferência, em menos de 40 minutos seu lanche estará pronto \n");
    }
}


PessoaQuer("X-salada", pessoasPediuLanche);
PessoaQuer("Pizza", pessoasPediuLanche);

let opcao = 1; // Case pegar numero 1 = Resultado valor da conta, 2 = Quantos lanche foram vendidos, 3 = Sair;

switch (opcao) {
    case 1:
        console.log("#### Lista do valor ####");
        console.log("Total Débito: R$ " + debito);
        console.log("Total Crédito: R$ " + credito);
        console.log("Total PIX: R$ " + pix);
        console.log("Total: R$ " + soma);
        break;

    case 2:
        console.log("#### Lanche vendidos ####");
        console.log("Chamados nomes vendidos: " + chamadosNomeVendidos);
        console.log("Lanche vendidos: " + lancheVendidos);
        break;

    case 3:
        console.log("Sair...");
        break;
            
    default:
        console.log('Fim');
}