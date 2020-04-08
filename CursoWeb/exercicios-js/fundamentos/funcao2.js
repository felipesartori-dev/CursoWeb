/*Armazenando valor de uma função anonima (é exatamente igual às vistas na aula passada mas não
recebe um nome) em uma constante*/

const ImprimeSoma = function (a, b) {
  return a + b
}

console.log(ImprimeSoma(10, 8))

// Exemplo de uma função ARROW - A "Seta" indica que isso é uma função, ela substitui a palavra FUNCTION
const Soma = (a, b) => {
  return a + b
}

console.log(Soma(5, 8))

// Reduzindo ainda mais o tamanho da função ARROW
const Subtracao = (a, b) => a - b // Quando colocamos uma operação após a "seta" ela irá retornar o valor

console.log(Subtracao(10, 3))

// Reduzindo ainda mais, quando temos um único parâmetro nem precisamos dos parenteses
const Imprimir = a => console.log(a)

Imprimir('Fala ae pessoas, tudo sussa ?')
