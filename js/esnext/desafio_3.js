const caminho = require('path').join(__dirname, 'dados.txt')

function lerArquivo(caminho) {

  return new Promise((resolve) => {
    require('fs').readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString())
    })
  })
}

lerArquivo(caminho)
  .then(conteudo => conteudo.split('\n'))
  .then(linha => linha.join(','))
  .then(conteudo => `O valor final é: ${conteudo}`)
  .then(console.log)