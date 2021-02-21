function negative(vetor) {
  let negativos = []

  for(let i = 0; i < vetor.length; i++){
    if(vetor[i] < 0){
      negativos.push(vetor[i])
    }
  }

  return negativos.length
}



vetor = [0 , 1, 2, 3, 4, 6, -5, -4, -2 ,1 , -2]
console.log(negative(vetor))