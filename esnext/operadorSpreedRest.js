// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 9999.99}
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA =  ['João', 'Jorge','Maria']
const grupoFinal = ['Maura', ...grupoA, 'Leila']
console.log(grupoFinal)
