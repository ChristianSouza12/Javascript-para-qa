// o que é ? é uma estrutra que vai se repetir algumas vezes, um loop.

// repetição por array 

const cidades = ["Indaiatuba", "Campinas", "São Paulo" , "Recife"]

cidades.forEach((elemento, index) =>{
    console.log("Execução número " + index) // para ver executando um de cada vez
    console.log(elemento)
})



// for normal

// for (let index = 0; index < array.length; index++) {
  
    
// }

 

for( let indice = 0; indice < cidades.length ; indice++){
    console.log(cidades[indice])

}
