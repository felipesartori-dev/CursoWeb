{
    {
        {
            {
                var teste = 'testando'
                console.log(teste)
            }
        }
    }
}

console.log(teste) // É possível chamar uma váriavel fora do escopo de onde foi declarada quando não se trata de função

function testando() 
{
    var local = 123
    console.log(local)
}

// console.log(local) Não é possivel acessar uma variável de uma função fora do escopo dela

testando()