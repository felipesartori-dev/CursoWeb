const pessoa = {
  nome: 'Ana',
  idade: 31,
  endereco: {
    logradouro: 'Rua oito',
    numero: 1000,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const {
  endereco: { logradouro, numero },
} = pessoa;
console.log(logradouro, numero);

const { atributoUndefined, teste = true } = pessoa; // mesmo atributos nao declarados podem ser utilizados
console.log(atributoUndefined, teste);
