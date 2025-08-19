let name = "Pietro"
let city = "General"
let age = 15
let profession = "Alfaiate"
let currentYear = 2025
let salary = 2033
let bonus = 52
let salaryTotal = Number(salary) + Number(bonus)
let dateBirth = currentYear - age

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

