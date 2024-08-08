function contar(){
    let start = document.querySelector('input#start').value
    let end = document.querySelector('input#end').value
    let step = document.querySelector('input#step').value   
    let res = document.getElementById('res')

    if(start.length == 0 || end.length == 0 || step.length == 0){
        alert('Os números devem ser maiores que 0')
    } else{
        if (step <= 0){
            window.alert('Passo inválido. Considerando step = 1')
            step = 1
        }
        if(start < end){
            res.innerHTML = 'Contando: '
            for(let i = Number(start); i <= Number(end); i+=Number(step)){
                res.innerHTML += ` ${i}&#x1F449;`                        
            }
            res.innerHTML += `&#x1F6A9; `
        } else{
            res.innerHTML = 'Contando: '
            for(let i = Number(start); i >= Number(end); i-=Number(step)){
                res.innerHTML += ` ${i}&#x1F449;`                        
            }
            res.innerHTML += `&#x1F6A9; `
        }
    }
}