function contar(){
    let start = document.querySelector('input#start').value
    let end = document.querySelector('input#end').value
    let step = document.querySelector('input#step').value   
    let res = document.getElementById('res')

    if(start == 0 || end == 0 || step == 0){
        alert('Os números devem ser maiores que 0')
    } else{
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