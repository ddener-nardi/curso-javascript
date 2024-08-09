let listaDeNumeros = []
function adicionar(){
    let num = document.querySelector('#txtnumber').value
    if( num > 100 || num == '' || listaDeNumeros.indexOf(num) != -1){
        if(num > 100){alert('O número deve ser menor ou igual a 100!')}else{alert('Selecione um número válido!')}
    }else{
        listaDeNumeros.push(Number(num))
        const selectListaNumeros = document.querySelector('select#lista-numeros')
        const criarOpt = document.createElement('option')
        selectListaNumeros.appendChild(criarOpt)
        criarOpt.innerHTML = `${num}`
    }  
}
function finalizar() {
    if(listaDeNumeros.length == 0){alert('Deve haver ao menos um número acima.')} 
    else {
        resLista = document.querySelector('div#res-lista')
        let sum = 0;
        for(let i in listaDeNumeros){
            sum += listaDeNumeros[i]
        }
        resLista.innerHTML = `Ao todo, temos ${listaDeNumeros.length} números cadastrados.<br>`
        listaDeNumeros.sort()
        resLista.innerHTML += `O maior valor é ${maiorNum()}.<br>`
        resLista.innerHTML += `O menor valor é ${menorNum()}.<br>`
        resLista.innerHTML += `Somando todos os valores, temos ${sum}.<br>`
        resLista.innerHTML += `A média dos valores digitados é ${sum / listaDeNumeros.length}.<br>`
    }  
}
function maiorNum(){
    let maior = 0
    for (let i in listaDeNumeros){
        if(listaDeNumeros[i] > maior){
            maior = listaDeNumeros[i] 
        }
    }
    return maior
}
function menorNum(){
    let menor = 101
    for (let i in listaDeNumeros){
        if(listaDeNumeros[i] < menor){
            menor = listaDeNumeros[i] 
        }
    }
    return menor
}