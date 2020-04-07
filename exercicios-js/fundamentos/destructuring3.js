function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min: 50, max: 100}))

const obj = {min: 15,max: 50}
console.log(rand(obj))

console.log(rand({})) // se utiliza dos parametros padronizados que passamos na declaração

console.log(rand({min: 980}))

console.log(rand())