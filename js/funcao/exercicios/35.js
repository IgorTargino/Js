let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorMain, vetorAdd) {
  for(let i = 0; i < vetorAdd.length; i++){
    vetorMain.push(vetorAdd[i])
  }
  console.log('Vetor adicionado: ' + vetorAdd)
  console.log('Vetor resultado: ' + vetorMain)
}

adicionaVetor(vetorPilha, vetorAdiciona)