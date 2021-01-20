const notas = [7.7, 6.5, 5.2, 9.5, 8.9]

// Sem callback
let notasBaixas = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter( nota => nota < 7)
console.log(notasBaixas3)