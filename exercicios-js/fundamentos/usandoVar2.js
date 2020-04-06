var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero )

/* O número 2 é impresso duas vezes pois não existe o conceito de escopo, nesse caso o 
número 2 sobrescreve o número 1 e será impresso pois ele é visto como uma variavel global */