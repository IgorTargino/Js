function verificarIntervalo(vetor, limiteInf=10, limiteSup=20) {
  let pertence = []
  let naoPertence = []

  for(let i = 0; i < vetor.length; i++){
    if((vetor[i] >= limiteInf) && (vetor[i] <= limiteSup)){
      pertence.push(vetor[i])
    }else{
      naoPertence.push(vetor[i])
    }
  }
  return `${naoPertence.length} Não pertencem ao intervalo e ${pertence.length} pertencem.`
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(verificarIntervalo(vetor))