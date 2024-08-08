
function tabuada(){
    number = document.querySelector('input#txtnum').value
    tab = document.querySelector('select#tabu')
    res = document.getElementById('res')
    res.innerHTML = ''
    let resultado;
    for (let i = 0; i <=10; i++){
        resultado = number * i
        res.innerHTML += ` ${number}x${i} = ${resultado}<br>`
    }
}

