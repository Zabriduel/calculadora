let numeroUm = parseFloat(prompt("Digite o primeiro número para calcular: "));
let numeroDois = parseFloat(prompt("Digite o segundo número para calcular: "));
let selecionarOperacao = prompt("Digite qual operação desejada +, -, *, /: ");

if (selecionarOperacao = "-"){
    console.log (`A subtração dos numeros é ${numeroUm-numeroDois}`);
}

else if (selecionarOperacao == '+') {
    let soma = numeroUm + numeroDois;
    console.log(`Resultado: ${soma}`);
}

else if (selecionarOperacao == "/"){
    let resultado = numeroUm / numeroDois;
    console.log(`A divisão de ${numeroUm} / ${numeroDois} = ${resultado} `);
}
else if (selecionarOperacao == "*"){
    let resultMult = numeroUm * numeroDois;
    console.log(`A multiplicação de ${numeroUm} X ${numeroDois} = ${resultMult} `);
}
else{
    console.log("Opção inválida")
}
