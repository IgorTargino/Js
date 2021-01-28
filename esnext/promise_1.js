let a = 1
console.log(a)

new Promise(function(cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

  .then(nome => nome[0])
  .then(letra => letra[0])
  .then(letra => letra.toLowerCase())
  .then(letraMinuscula => console.log(letraMinuscula))