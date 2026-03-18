 // EXERCICIO 1 - ESTRUTURA DE REPETIÇÃO
 // Percorrer uma lista de nomes, contendo os nomes : Eduardo, Maria, Fernando, João e Francisco
 // Coloque o numero da execução, começando em 1
 // o nome que esta sendo executado
 // Separadores

 // Ex : 
 // Execução: 1
 // Nome: Eduardo
 // -------------------

 const nomes = ["Eduardo" , "Maria", "Fernando", "João", "Francisco"]

 nomes.forEach((elemento, indice) =>{
    console.log("Execução número: " +( indice+1) )
    console.log("Nome: " + elemento)
    console.log("-----------------")
})
// ----------------------------------------------------------------------------------

for( let indice = 0; indice < nomes.length ; indice++){
    console.log("Execução número :" + (indice + 1))
    console.log("Nome:" + nomes[indice])
    console.log("-----------------")

}