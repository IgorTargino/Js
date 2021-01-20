function aumentoSalarial(plano, salario){
  switch (plano) {
    case 'A':
      return salario * 1.10
    case 'B':
      return salario * 1.15
    case 'C':
      return salario * 1.20
    default:
      console.log('Plano inválido')
      break;
  }
}

console.log(aumentoSalarial('A', 1000))
console.log(aumentoSalarial('B', 1000))
console.log(aumentoSalarial('C', 1000))
console.log(aumentoSalarial('D', 1000))