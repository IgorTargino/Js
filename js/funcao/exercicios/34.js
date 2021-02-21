function stringIguais(string1, string2) {
  let estaContido = true
  let count = 0
  for(let i = 0; i < string1.length; i++){
    let caracteres1 = string1.charAt(i).toLowerCase()

    for(let j = count; j < string2.length; j++){
      let caracteres2 = string2.charAt(j).toLowerCase()
      
      console.log(caracteres1, caracteres2)
      if(caracteres1 == caracteres2){
        break
      }else{
        return false
      }
    }
    count++
  }

  return estaContido
  
}

console.log(stringIguais("Acd", "acd"))