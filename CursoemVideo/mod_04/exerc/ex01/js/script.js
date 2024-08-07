
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