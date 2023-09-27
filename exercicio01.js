function carregar() {
    var msg = window.document.getElementById('hora')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        img.src = 'dia.jpg'
        document.body.style.background = '#B9CFEB'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background =  '#DCD39A'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background =  '#0D2D59'
    }
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formularioano.value < 1900 || formularioano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var formulariosexo = document.getElementsByName('sexo')
        var idade = ano - Number(formularioano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(formulariosexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'childm.png')
            } else if (idade >= 12 && idade < 60){
                img.setAttribute('src', 'man.png')
            } else if (idade >= 60){
                img.setAttribute('src', 'elderlym.png')
            }
        } else if(formulariosexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'childw.png')
            } else if (idade >= 12 && idade < 60){
                img.setAttribute('src', 'woman.png')
            } else if (idade >= 60){
                img.setAttribute('src', 'elderlyw.png')
            }
        }
        res.innerHTML = `Detectamos que você é <strong>${genero}</strong> e tem <strong>${idade}</strong> anos.<br><br>`
        res.appendChild(img)
    }

}