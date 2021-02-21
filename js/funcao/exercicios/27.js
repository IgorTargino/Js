function calcularCrescimento(altura1, altura2, taxa1, taxa2) { 
  let qAnos = 0
  
  if(altura1 == altura2){
    if(taxa1 == taxa2){
      return 'As crianças tem igual altura e crescimento.'
    }else if(taxa1 > taxa2){
      return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
    }else if(taxa2 > taxa1){
      return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
    }
  }else{
    if(altura1 > altura2){
      if(taxa1 >= taxa2){
        return 'A criança 2 não ultrapassará a criança 1.'
      }else{
        qAnos = calcularTempo(altura1, altura2, taxa1, taxa2)
        return `A criança 2 ultrapassará a criança 1 em ${qAnos} anos`
      }
    }else {
      if(taxa2 > taxa1){
        return 'A criança 1 não ultrapassará a criança 2.'
      }else{
        qAnos = calcularTempo(altura1, altura2, taxa1, taxa2)
        return `A criança 1 ultrapassará a criança 2 em ${qAnos} anos`
      }
    }
  } 
}

function calcularTempo(alt1, alt2, taxa1, taxa2) {
  let tempo = 0
  while(alt1 > alt2){
    alt1 += taxa1
    alt2 += taxa2
    tempo++
  }
  return tempo
}

console.log(calcularCrescimento(150, 13, 2, 3))