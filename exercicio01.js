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

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')
    var res = document.getElementById('res1')
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

function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var intervalo = document.getElementById('txtintervalo')
    var resultado = document.getElementById('res2')
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var n3 = Number(intervalo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0){
        alert('[ERRO] Está faltando dados!.')
    } else {
        if (n3 <= 0) {
            alert('Intervalo inválido. Considere o intervalo de 1 em diante.')
            n3 = 1
        }
        resultado.innerHTML = 'Contando:<br>'
        if (n1 < n2) { //contagem crescente
            for(var c = n1; c <= n2; c += n3) /*é o mesmo que c = c + n3*/{
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else { //contagem decrescente
            for(var c = n1; c >= n2; c -= n3){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}

function tabuada() {
    var txttabuada = document.getElementById('txttabuada')
    var tabuada = document.getElementById('tabuada')
    var res3 = document.getElementById('res3')
    var num = Number(txttabuada.value)
    if(txttabuada.value.length == 0 || txttabuada.value > 10 | txttabuada.value < -10) {
        alert('Digite um número de 0 a 10')
    } else {
        var c = 1
        res3.innerHTML = ''
        res3.style.textAlign = 'justify'
        res3.style.margin = '15px'
        //tabuada.innerHTML = ''

        while (c <= 10) {
            //SE QUISER COLOCAR DENTRO DE UM SELECT
            /* var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}` //útil pro php, aqui muda nd não
            tabuada.appendChild(item) 
            c++ */
            res3.innerHTML += `${num} x ${c} = ${num*c} <br>`
            c++
        }
    }
}

//---------------------exercicio da variavel composta---------------

let campo = document.getElementById('txtcampo')
let add = document.getElementById('add')
let res4 = document.getElementById('res4')
let valores = []

function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function lista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (numero(campo.value) && !lista(campo.value, valores)) {
        valores.push(Number(campo.value))
        add.innerHTML += `Valor ${campo.value} adicionado.<br>`
        res4.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    campo.value = ''
    add.style.display = 'block'
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            media += valores[pos]/valores.length // TAMBÉM FUNCIONA: media = soma / total 
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        res4.innerHTML = ''
        res4.innerHTML += `Quantidade de valores cadastrados: <strong>${total}<strong> <br> <br>`
        res4.innerHTML += `Maior valor informado: <strong>${maior}</strong> <br><br>`
        res4.innerHTML += `Menor valor informado <strong>${menor}</strong> <br><br>`
        res4.innerHTML += `Soma dos valores: <strong>${soma}<strong> <br><br>`
        res4.innerHTML += `Média dos valores: <strong>${media}<strong> <br><br>`
    }
}