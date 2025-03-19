let numeroUm = parseFloat(prompt("Digite o primeiro número para calcular: "));
let numeroDois = parseFloat(prompt("Digite o segundo número para calcular: "));
let selecionarOperacao = prompt("Digite qual operação desejada +, -, *, /: ");


if (selecionarOperacao == "*"){
    let resultMult = numeroUm * numeroDois;
    console.log(`A multiplicação de ${numeroUm} X ${numeroDois} = ${resulMult} `);
}

