function imparPar(vetor) {
  let impares = []
  let pares = []

  for(let i = 0; i < vetor.length; i++){
    if(vetor[i] % 2 == 0) pares.push(vetor[i])
    else impares.push(vetor[i])
  }
  return `${pares.length} pares e ${impares.length} impares`
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(imparPar(vetor))