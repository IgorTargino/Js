function calcularPreco(idade){
  let precoFinal = 100
  if(idade < 10){
    precoFinal += 80
  }else if((idade <= 10) && (idade <= 30)){
    precoFinal += 50
  }else if((idade > 30) && (idade <= 60)){
    precoFinal += 95
  }else if(idade > 60){
    precoFinal += 130
  }
  return precoFinal
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));