// EXERCICIO 2 - ESTRUTURA DE DECISÃO

// Percorrer uma lista de cidade
// Contendo: [São Paulo,Rio de Janeiro, Florianópolis e Recife]
// Para cada item, verificar se a cidade Florianópolis está presente na lista
// Printar nome da cidade
// Caso esteja, avisar!
// Caso não seja o elemento procurado, avisar também.
// Número da execução
// Separador (---------------)

// EX:
// Execução : 1
// Cidade : São Paulo
// Elemento : Encontrado / Não encontrado
// --------------------------


const cidades = ["São Paulo", "Rio de Janeiro", "Florianópolis" , "Recife"]


 cidades.forEach((cidade, indice) =>{
    console.log("Execução número: " +( indice+1) )
    console.log("Cidade: " + cidade)

    if(cidade == "Florianópolis"){
    console.log("Elemento encontrado!")
    
}else{
    console.log("Elemento não encontrado!")
    
}
    console.log("----------------------------------")
})
