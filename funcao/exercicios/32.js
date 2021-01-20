function mediaAritmetica(vetor) {
  let total = 0

  for(let i = 0; i < vetor.length; i++){
    total += vetor[i]
  }


  return (total/vetor.length).toFixed(2)
}

vetor = [1 ,2 ,3, 4, 5, 6 ,7, 8,9, 10, 7, 5, 6, 7,8]
console.log(mediaAritmetica(vetor))