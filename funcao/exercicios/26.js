function listarNumPar(limInferior, limSuperior){
  let pares = []
  for(let i = limInferior; i < limSuperior; i++){
    if(i%2 == 0){
      pares.push(i)
    }
  }
  console.log(pares)
}

listarNumPar(0, 100)