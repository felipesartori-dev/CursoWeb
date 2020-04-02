function ImprimirSoma(a , b) {
    console.log(a + b)
}

ImprimirSoma(1 , 2)
ImprimirSoma(1 , 2, 3, 4, 5, 6) // Ignora o restante dos número e utiliza apenas os 2 primeiros já que a função espera receber 2 parametros
ImprimirSoma(1) // Imprime o valor Not a Number pois estamos somando um número com um valor undefided, já que não passamos um parametro para B
ImprimirSoma(1 , 'teste') // Concatena o número + String passada 
ImprimirSoma() // Imprime Not a Number já que não definimos nenhum valor

// Funcão com retorno

/* b = 0 quer dizer que quando não for passado nenhum parametro para B ele será 0 */
function Soma(a, b = 0) {
    return (a + b)
}

console.log(Soma(2, 3))
console.log(Soma(3)) // Diferente da primeira vez que teriamos um Not a Number, aqui como deixamos um valor padrão pra B caso não fosse passado parametro, a soma acontece normalmente e temos o valor

let resultado = Soma(5, 7)
console.log(resultado) // Também podemos guardar o retorno de uma função em uma variável