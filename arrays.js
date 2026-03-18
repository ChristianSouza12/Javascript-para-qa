var paises = ["Brasil", "Argentina", "Colombia", "Alemanha"] // array = lista de dados      

console.log(paises[0]) // acessando uma posição do array

// para buscar um elemento em especifico, usar o [] e colocar o indice, lembrando que sempre começa no 0

console.log(paises.length) // acessando o tamanho do array

// usar o .length para buscar o tamanho do array.

console.log("acessando o país "+ paises[1]) // concatenando, ou seja juntando string com o array


// Operações com o array

paises.push("Espanha") // o push adiciona um novo elemento no FINAL do nosso array
paises.pop() // o pop vai remover o ULTIMO elemento do nosso array
paises.unshift("Bélgica")// o unshift adiciona um novo elemento no COMEÇO do nosso array
paises.shift() // o shift remove o PRIMEIRO elemento do nosso array

console.log(paises)