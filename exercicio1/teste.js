/*let num = [6, 5, 8, 2, 0, 1, 9, 8, 5]
console.log( num.sort())
console.log( num.length)
num.push(7, 3, 4)
console.log(num)
console.log(num.sort())
for (let pos in num){
    console.log(num[pos])
}*/
/*
function parimp (n){
    if (n%2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(parimp(12))
let res = parimp(11)
console.log(res)
*/
// Esta função abaixo exemplifica o que acontece caso não seja passado algum parâmetro à função
function soma(n1=1, n2=1){
    return n1 + n2
}
console.log(soma (5, 8))

// Fazendo uma variável receber como argumento uma função
let x = function(y){
    return y**2
}
console.log(x(3))

let f = function fatorial(n){
    let fat = 1
    for (let x = n; x > 1; x--){
        fat *= x
    }
    return fat
}
console.log(f(5))
//-----OOUUU--------
// RECURSIVIDADE
let f1 = function fatorial(n){
    if (n == 1)
        return 1
    else
        return n * fatorial(n-1)
}
console.log(f1(5))