function money(num){
  return `R$ ${num.toFixed(2).toString().replace(".",",")}`
}

console.log(money(3.0002))