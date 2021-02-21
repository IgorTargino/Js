function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        con.log('temp')
        reject('Ocorreu um erro!')
      } else {
        resolve(valor)
      }
    } catch(e){
      reject(e)
    }
  })
}

funcionarOuNao('Testando...', 1)
  .then(v => console.log(`Valor: ${v}`))
  .catch(err => console.log(`Erro: ${err}`))