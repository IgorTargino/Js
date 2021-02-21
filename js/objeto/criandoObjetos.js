// usando a notação literal
const obj1 = {}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtores
function Produto(nome, preco, desc){
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.98, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionarios(nome, salarioBase, faltas){
  return {
    nome,
    salarioBase,
    faltas,
    getSalario(){
      return (salarioBase / 30) * (30-faltas)
    }
  }
}

const f1 = criarFuncionarios('João', 7980, 4)
const f2 = criarFuncionarios('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Objetct.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna um Objeto..
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)