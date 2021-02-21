function classificaAluno(nota){
  let novaNota = arredondar(nota)
  if( novaNota >= 40){
    console.log('aprovado')
  }else {
    console.log('reprovado')
  }
}

function arredondar(nota){
  if( nota % 5 > 2){
    return nota + 5 - (nota % 5)
  }else {
    return nota
  }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)

