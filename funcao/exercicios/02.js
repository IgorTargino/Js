function tipoDeTriangulo(a ,b ,c ){
  if( (a === b) && (a === c)){
    return 'Equilatero'
  } else if( (a === b) || (a === c) || (b === c)){
    return 'Isoceles'
  }
  return 'Escaleno'
}

console.log(tipoDeTriangulo(4, 4, 4))