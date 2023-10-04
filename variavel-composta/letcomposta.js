
//------------------------REPETIÇÃO------------------------

/*uma forma de fazer*/
var c = 1
var res = document.getElementById('res')
while (c<=10) {
    document.write('olá, mundo!<br>')
    c++
}

/*outra forma de fazer*/
var c = 1
var res = document.getElementById('res')
do {
    document.write(`teste ${c}<br>`)
    c++
} while (c <=10)


/*outra forma de fazer*/
for (c = 1; c<=10; c++){
    document.write('OLÁ <br>')
}

//---------------------------variável composta---------------------------
//criando a variável:
let num = [20, 25, 15]
//agora se eu quiser acrescentar um elemento dentro dessa variavel composta na posição 3:
num[3] = 10
//pra colocar os elementos em ordem crescente:
num.sort()
//agora se eu quiser acrescentar um elemento dentro dessa variável composta automaticamente sem mencionar a posição (vai pra última):
num.push(5)
//resultado:
console.log(num)
//pra saber quantos elementos tem na variável:
console.log(`O vetor tem ${num.length} posições`) 
//mostra o terceiro conteúdo (valor)
console.log(`O quarto valor do vetor é ${num[3]}`)
//ou pode mostrar tudo assim:
for( let pos=0; pos < num.length; pos++ ) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
// ou pode fazer assim. FORMA MAIS USADA
for( let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
// saber qual a posição no vetor
let teste = num.indexOf(15)
console.log(teste)

// --------------------function de variavel composta-------------------------

function parimp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
console.log(parimp(4))
    
function calc(n1, n2, n3) {
    return n1 + n2 * n3
}
console.log(calc(5, 2, 5 ))

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//--------------------variável dentro de uma function----------------------

let x = function(y) {
    return y*2
}
console.log(x(5))

//----------------RECURSÃO: quando a função chama ela mesma----------------

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))