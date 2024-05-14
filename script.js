let divHistorico = document.getElementById("div-historico")
divHistorico.style.display ="none"

function calcularValorAdicional(aIdade){
    const SALARIO_ATE_20 = 1000
    const SALARIO_ACIMA_20 = 2000
    const IDADE_LIMITE = 20

    return aIdade <= IDADE_LIMITE ? SALARIO_ATE_20 : SALARIO_ACIMA_20
}

function calcularSalarioLiquido(aIdade,oSalarioBase, aGratificacao, oBonus, oDesconto, oValorTipo, oValorExperiencia){
    let adicional = calcularValorAdicional(aIdade)

    return ((oSalarioBase + aGratificacao + oBonus + adicional + oValorTipo) * oValorExperiencia) - oDesconto
}

function calcularIdade(oAnoNascimento){
    const hoje = new Date()
    const anoAtual = hoje.getFullYear()

    return anoAtual - oAnoNascimento
}

function criarItemHistorico(aMensagem){
    let historico = document.getElementById("ul-historico")
    let listItem = document.createElement("li")
    listItem.textContent = aMensagem
    historico.appendChild(listItem)
}

function obterStatus(oSalarioLiquido, aIdade, oValorExperiencia){

    const MINIMO_SALARIO_RICO = 5000
    const MINIMA_IDADE_RICO = 50
    const MINIMA_EXPERIENCIA_RICO = 1.4

    if (oSalarioLiquido > MINIMO_SALARIO_RICO && aIdade > MINIMA_IDADE_RICO && oValorExperiencia == MINIMA_EXPERIENCIA_RICO){
        return "rico"
    }

    return "pobre"
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
  
    let status = obterStatus(salarioLiquido, idade, valorExperiencia)

    //output
    let mensagem = "Sou " + nome + ", tenho " + idade + " anos, ganho R$" + salarioLiquido + " e sou " + status + "."

    criarItemHistorico(mensagem)

    divHistorico.style.display ="block"
}