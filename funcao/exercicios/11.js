function eBissexto(ano) {
  if( ano === 0){
    return false
  }else if(ano % 400 === 0){
    return true
  } else if(ano % 100 === 0){
    return false
  } else if(ano % 4 === 0){
    return true
  } else {
    return false
  }
}

console.log(eBissexto(0))
console.log(eBissexto(4))
console.log(eBissexto(100))
console.log(eBissexto(400))
console.log(eBissexto(800))
console.log(eBissexto(2020))
console.log(eBissexto(2021))