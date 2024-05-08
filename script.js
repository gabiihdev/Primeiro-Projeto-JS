//input
anoNascimento = 2006
nome = "Gabriela"

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "Sou " + nome + " e tenho " + idade + " anos."

//output
alert(mensagem)