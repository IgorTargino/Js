
function gerarNumerosEntre(min, max, tempo){
  min > max ? [max, min] = [min, max] : [min, max]

  return new Promise((resolve) => {
    setTimeout( () => {
      const aleatorio = parseInt(Math.random()* (max-min+1)) + min
      resolve(aleatorio)
    }, tempo)
  })
}

function gerarVariosNumeros(){
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1 , 60, 10),
  ])
}

console.time('promise')

gerarVariosNumeros()
  .then(console.log)
  .then(() => {
    console.timeEnd('promise')
  })
