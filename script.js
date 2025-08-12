let name = prompt("Digite seu nome")
let city = prompt("Digite sua cidade")
let age = prompt("Digite sua idade")
let profession = prompt("Digite sua profissão")
let currentYear = prompt("Digite o ano atual")
let salary = prompt("Digite seu salario")
let bonus = prompt("Digite o bonus")
let salaryTotal = Number(salary) + Number(bonus)
let dateBirth = age - currentYear

alert(`
 ========= RELATÓRIO DO USUÁRIO =========
Nome: ${name}
Idade: ${age}
Ano de nascimento: ${dateBirth}
Cidade: ${city}
Profissão: ${profession}

Salário base: ${salary}
Bônus: ${bonus}
Total mensal: ${salaryTotal}
Total ano: ${salaryTotal * 12}
Total anual (salário dobrado): ${(salaryTotal * 12) * 2}
=========================================    
    `)