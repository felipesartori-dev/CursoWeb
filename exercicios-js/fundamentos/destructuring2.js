const [a] = [35]
console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 5, 19, ,]
console.log(n1, n3, n5, n6)

const teste = [[1, 3, 4],[5, 10]]
console.log(teste)

const [n1, n2, n3 = [9, 15]] = teste
console.log(n1[2], n2[1], n3[0])
