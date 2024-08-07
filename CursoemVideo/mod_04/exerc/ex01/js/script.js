
function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    const data = new Date
    let hour = data.getHours()
    
    msg.innerHTML = `Agora são ${hour} horas`
    if (hour >= 0 && hour < 12) {
        img.src = 'imgs/manhã.jpg'
        document.body.style.background = "#FCC7A8"
    } else if (hour > 12 && hour < 19) {
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = "#AFAA55"
    } else{
        img.src = 'imgs/noite.jpg'
        document.body.style.background = "#0A6C85"
    }
}
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        if  (fsex[0].checked) {
            gender = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', '../imgs/homem-crianca.jpg')
            } else if(idade > 12 && idade < 25){
                img.setAttribute('src', '../imgs/homem-jovem.jpg')
            } else {
                img.setAttribute('src', '../imgs/homem-idoso.jpg')
            }
        } else if(fsex[1].checked){
            gender = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', '../imgs/mulher-crianca.jpg')
            } else if(idade > 12 && idade < 25){
                img.setAttribute('src', '../imgs/mulher-jovem.jpg')
            } else {
                img.setAttribute('src', '../imgs/mulher-idoso.jpg')
            }
        }
        res.style.textalign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${idade} anos.`
        res.appendChild(img)
    }     
}