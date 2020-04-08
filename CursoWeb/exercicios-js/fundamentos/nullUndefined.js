let valor; // Não inicializada
console.log(valor);

valor = null;
console.log(null);
// console.log(null.ToString()) // Erro!

const produto = {};
console.log(produto);

console.log(produto.preco);
// console.log(produto.preco.a) // Também da erro, já que tentamos ler algo que é uma propriedade de um valor undefined

produto.preco = 4.0;

console.log(produto);
console.log(produto.preco.a); // Aqui o valor apresentado é o undefined já que temos a propriedade preco e dentro dela não atribuimos nada, não definimos nada

produto.preco = null; // Isso não faz com que nosso atributo preco fique vazio, ao invés disso apenas substituiremos o valor atual pelo valor NULL
console.log(produto.preco); // Como podemos ver o valor impresso foi NULL

delete produto.preco; // Aqui sim removemos o valor do nosso atributo preco
console.log(produto.preco); // Temos undefined pois deletamos o atributo preco

console.log(produto); // Ele volta a ser um objeto vazio
