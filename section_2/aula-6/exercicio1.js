let nome = 'João Otávio';
let anos = 20;
let peso = 84;
let alturaEmMetros = 1.80;
let calcImc =  peso / (Math.pow(alturaEmMetros, 2));
let anoNascimento;
let anoAtual = new Date().getUTCFullYear();
anoNascimento = anoAtual - anos;

console.log(`${nome} tem ${anos} anos, pesa ${peso}kg, tem ${alturaEmMetros} de altura e seu IMC é de ${calcImc}. ${nome} nasceu em ${anoNascimento}. `)

