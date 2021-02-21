function minMax(vetor) {
  let max = 0
  let min = 999

  for(let i = 0; i < vetor.length; i++){
    if(vetor[i] > max ){
      max = vetor[i]
    } 
    if(vetor[i] < min){
      min = vetor[i]
    }
  }  

  return [min, max]
}

vetor = [1, 2, 3, 4, 5, 6, , 14, 0, -45, 7, 8, 9, 10, 11, 12, 13]
console.log(minMax(vetor))