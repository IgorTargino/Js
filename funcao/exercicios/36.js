function multiplicarVetor(vetor, multiplicador) {
  let vetorResultado = []
  vetor.forEach(element => {
    vetorResultado.push(element * multiplicador)
  })
  
  return vetorResultado
}

function multiplicarVetorSe5(vetor, multiplicador) {
  let vetorResultado = []
  vetor.forEach(element => {
    if(element > 5) vetorResultado.push(element * multiplicador)
    else vetorResultado.push(element)
  })
  
  return vetorResultado
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(multiplicarVetor(vetor, 2))
console.log(multiplicarVetorSe5(vetor, 2))