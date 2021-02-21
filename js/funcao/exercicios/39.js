function trocarVetores(vetor1, vetor2) {
  if(vetor1.length == vetor2.length){
    for(let i = 0; i < vetor1.length; i++){
      vetor1[i] = vetor1[i] + vetor2[i]
      vetor2[i] = vetor1[i] - vetor2[i]
      vetor1[i] = vetor1[i] - vetor2[i]
    }
  }else{
    return 'Os vetores não são iguais.'
  }

  console.log('Novo vetor A: ' + vetor1)
  console.log('Novo vetor B: ' + vetor2)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]
trocarVetores(vetorA, vetorB)