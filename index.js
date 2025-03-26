let numeroUm = parseFloat(prompt("Digite o primeiro número para calcular: "));
let numeroDois = parseFloat(prompt("Digite o segundo número para calcular: "));
let selecionarOperacao = prompt("Digite qual operação desejada +, -, *, /: ");

if (selecionarOperacao == '+') {
    let soma = primeiroNum + segundoNum;
    console.log(`Resultado: ${soma}`);
}

else if (selecionarOperacao == "/"){
    let resultado = numeroUm / numeroDois;
    console.log(`A divisão de ${numeroUm} / ${numeroDois} = ${resultado} `);
}
else if (selecionarOperacao == "*"){
    let resultMult = numeroUm * numeroDois;
    console.log(`A multiplicação de ${numeroUm} X ${numeroDois} = ${resulMult} `);
}
else{
    console.log("Opção inválida")
}
