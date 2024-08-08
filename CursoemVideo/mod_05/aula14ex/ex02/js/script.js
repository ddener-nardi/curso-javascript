
function tabuada(){
    number = document.querySelector('input#txtnum').value
    tab = document.querySelector('select#tabu')
    res = document.getElementById('res')
    tab.innerHTML = ''
    let resultado;
    for (let i = 0; i <=10; i++){
        resultado = number * i
        let opt = document.createElement('option') 
        opt.text = ` ${number}x${i} = ${resultado}`
        tab.appendChild(opt)
    }
}

