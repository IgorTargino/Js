function impares(limiteInf = 0, limiteSup = 100) {
  if(limiteInf > limiteSup){
    limiteInf = limiteSup + limiteInf
    limiteSup = limiteInf - limiteSup
    limiteInf = limiteInf - limiteSup
  }

  for(let i = limiteInf; i < limiteSup; i++){
    if(i%2 == 1) console.log(i)
  }
}

impares(10,90)