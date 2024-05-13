let divHistorico = document.getElementById("div-historico")
divHistorico.style.display ="none"

function calcularIdade(oAnoNascimento){
    const hoje = new Date()
    const anoAtual = hoje.getFullYear()
    const idade = anoAtual - oAnoNascimento

    return idade
}

function calcularValorAdicional(aIdade){
    //constantes
    const SALARIO_ATE_20 = 1000
    const SALARIO_ACIMA_20 = 2000
    const IDADE_LIMITE = 20

    let adicional = SALARIO_ACIMA_20
    if(aIdade <= IDADE_LIMITE){
        adicional = SALARIO_ATE_20
    }

    return adicional
}

function calcularSalarioLiquido(aIdade,oSalarioBase, aGratificacao, oBonus, oDesconto, oValorTipo, oValorExperiencia){
    let adicional = calcularValorAdicional(aIdade)

    let salarioLiquido = ((oSalarioBase + aGratificacao + oBonus + adicional + oValorTipo) * oValorExperiencia) - oDesconto

    return salarioLiquido;
}

function imprimir(){

    //input
    const anoNascimento = parseInt(document.getElementById("anoNascimento").value)
    const nome = document.getElementById("nome").value
    const salarioBase = parseFloat(document.getElementById("salarioBase").value)
    const gratificacao = parseFloat(document.getElementById("gratificacao").value)
    const bonus = parseFloat(document.getElementById("bonus").value)
    const desconto = parseFloat(document.getElementById("desconto").value)

    //processamento
    const idade = calcularIdade(anoNascimento)
    let salarioLiquido = calcularSalarioLiquido(idade, salarioBase, gratificacao, bonus, desconto, valorTipo, valorExperiencia)

    const MINIMO_SALARIO_RICO = 50000

    // E - && - TODAS AS SITUAÇÕES DEVEM SER VERDADEIRAS PARA ACONTECER
    // OU - || - APENAS UMA SITUAÇÃO PRECISA SER VERDADEIRA
  
    let status = "pobre"
    if (salarioLiquido > MINIMO_SALARIO_RICO){
      status = "rico"
    }

    //output
    let mensagem = "Sou " + nome + ", tenho " + idade + " anos, ganho R$" + salarioLiquido + " e sou " + status + "."

    criarItemHistorico(mensagem)

    divHistorico.style.display ="block"
}

function criarItemHistorico(aMensagem){
    let historico = document.getElementById("ul-historico")
    let listItem = document.createElement("li")
    listItem.textContent = aMensagem
    historico.appendChild(listItem)
}