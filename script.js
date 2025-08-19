let name = "Pietro"
let city = "General"
let age = 15
let profession = "Alfaiate"
let currentYear = 2025
let salary = 2033
let bonus = 52
let salaryTotal = parseint(salary) + parseInt(bonus)
let dateBirth = parseint(currentYear) - parseInt(age)

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
=========================================
`)



