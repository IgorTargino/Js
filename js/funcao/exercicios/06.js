jurosSimples = (capInicial, juros, tempoAplic) => { 
  return capInicial + (capInicial * juros * tempoAplic)
}

jurosComposto = (capInicial, juros, tempoAplic) => {
  return capInicial * (1 + juros) ** tempoAplic
}

console.log(jurosSimples(100, 10/100, 20))
console.log(jurosComposto(100, 10/100, 20))