function fatorial(num){
  let fatorial = 1
  for(let i = 0; i < num; i++){
    fatorial *= num - i
  }
  return fatorial
}

console.log(fatorial(0))