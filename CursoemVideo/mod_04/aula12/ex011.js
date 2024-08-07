let hora = new Date()
horaAtual = hora.getHours()

if (horaAtual < 13) {
    console.log('Bom dia!')    
} else if (horaAtual <= 18){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}