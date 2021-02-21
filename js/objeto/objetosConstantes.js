// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'Mari'
console.log(pessoa.nome)

const pessoaConstate = Object.freeze({nome: 'Joao'})
pessoaConstate.nome = 'Maria'
console.log(pessoaConstate)