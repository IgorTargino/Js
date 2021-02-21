let stringPontuacao = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function records(string) {
  const pontuações = string.split(', ')
  let max = 0
  let min = 999
  let recordsQueb = 0
  let posMin = 0

  for(let i = 1; i < pontuações.length ; i++){
    //console.log(`${typeof pontuações[i]} ${typeof max}`)
    console.log(`Pontuacao: ${pontuações[i]} max: ${max} ${Number(pontuações[i]) > Number(max)}`)
    if(Number(pontuações[i]) > Number(max)){
      max = pontuações[i]
      recordsQueb++
    } else if( pontuações[i] < min){
      min = pontuações[i]
      posMin = i+1
    }
  }
  return [recordsQueb, posMin]
}

console.log(records(stringPontuacao))
