var salarioAtual = 500;
var salario = 500;

function aumentoSalario(maior, menor, percentual, porcentagem) {
    if (salario > menor && salario <= maior) {
        aumento = (percentual) * salario
        salario = (salario + aumento)
        console.log("Salário atual: " + salarioAtual)
        console.log("Novo salario: " + salario)
        console.log("Reajuste ganho: " + aumento)
        console.log("Em percentual: " + porcentagem)
    }
}

aumentoSalario(500, 0, 0.10, "10%")
