function makeWish(snack, amount){
  switch (snack) {
    case 100:
      return `${amount}x Cachorro Quente = R$${3.00*amount}`
    case 200:
      return `${amount}x Hambúrguer Simples = R$${4.00*amount}`
    case 300:
      return `${amount}x Cheeseburguer = R$${5.50*amount}`
    case 400:
      return `${amount}x Bauru = R$${7.50*amount}`
    case 500:
      return `${amount}x Refrigerante = R$${3.50*amount}`
    case 600:
      return `${amount}x Suco = R$${2.80*amount}`  
    default:
      return 'Código inválido'
  }
}

console.log(makeWish(100, 2))
console.log(makeWish(200, 2))
console.log(makeWish(300, 2))
console.log(makeWish(400, 2))
console.log(makeWish(500, 2))
console.log(makeWish(600, 2))
console.log(makeWish(700, 2))