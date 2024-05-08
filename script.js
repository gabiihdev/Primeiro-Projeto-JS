//constantes
const SALARIO_ATE_20 = 1000
const SALARIO_ACIMA_20 = 2000
const IDADE_LIMITE = 20

//input
const anoNascimento = parseInt(prompt("Informe o seu ano de nascimento:"))
const nome = prompt("Informe o seu nome:")
const salarioBase = parseFloat(prompt("Informe o salário base:"))
const gratificacao = parseFloat(prompt("Informe a gratificação:"))
const bonus = parseFloat(prompt("Informe o bônus:"))
const desconto = parseFloat(prompt("Informe o desconto:"))

//processamento
const hoje = new Date()
const anoAtual = hoje.getFullYear()
const idade = anoAtual - anoNascimento

let adicional = SALARIO_ACIMA_20
if(idade <= IDADE_LIMITE){
    adicional = SALARIO_ATE_20
}

let salarioLiquido = salarioBase + gratificacao + bonus - desconto + adicional

//output
let mensagem = "Sou " + nome + ", tenho " + idade + " anos e ganho R$" + salarioLiquido
alert(mensagem)