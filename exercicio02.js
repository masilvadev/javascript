/*UMA FORMA DE REPETIÇÃO*/
var c = 1
var res = document.getElementById('res')
while (c<=10) {
    document.write('olá, mundo!<br>')
    c++
}

/*OUTRA FORMA DE REPETIÇÃO QUE É A MESMA DE CIMA*/
var c = 1
var res = document.getElementById('res')
do {
    document.write(`teste ${c}<br>`)
    c++
} while (c <=10)


/*OUTRA FORMA DE REPETIÇÃO QUE É A MESMA DE CIMA*/
for (c = 1; c<=10; c++){
    document.write('OLÁ <br>')
}

//outro exemplo só que usando variaveis compostas
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))