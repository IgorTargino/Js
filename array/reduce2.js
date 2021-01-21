const alunos = [
  {nome:"Joao", nota: 7.3, bolsista: false},
  {nome:"Maria", nota: 9.2, bolsista: true},
  {nome:"Pedro", nota: 9.8, bolsista: false},
  {nome:"Ana", nota:8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas ?
const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista){
  return (resultado && bolsista)
})
console.log(todosBolsistas)

// Desafio 2: Algum aluno é bolsista ?
const algumBolsista = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista){
  return (resultado || bolsista)
})
console.log(algumBolsista)

// Metódo do professor
const todosBolsistas2 = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas2))

const algumBolsista2 = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista2))