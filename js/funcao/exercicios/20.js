function withdrawMoney(money){
  let count100 = 0
  let count50 = 0
  let count10 = 0
  let count5 = 0
  let count1 = 0
  let noteValue = moneyNoteValue(money)
  while(money >= noteValue){
    switch (noteValue) {
      case 100:
        money -= 100
        count100++
        break
      case 50:
        money -= 50
        count50++
        break
      case 10:
        money -= 10
        count10++
        break
      case 5:
        money -= 5
        count5++
        break
      case 1:
        money -= 1
        count1++
        break
      default:
        break;
    }
    noteValue = moneyNoteValue(money)
  }
  return result(count100, count50, count10, count5, count1)
}

function moneyNoteValue(value){
  if(value >= 100) return 100
  else if(value >= 50) return 50
  else if(value >= 10) return 10
  else if(value >= 5) return 5
  else if(value >= 1) return 1
}


function result(count100, count50, count10, count5, count1){
  let result = ''
  if(count100 > 0) {
    result += `
    ${count100} nota(s) de R$ 100.`
  }
  if(count50 > 0) {
    result += `
    ${count50} nota(s) de R$ 50.`
  }
  if(count10 > 0) {
    result += `
    ${count10} nota(s) de R$ 10.`
  }
  if(count5 > 0) {
    result += `
    ${count5} nota(s) de R$ 5.`
  }
  if(count1 > 0) {
    result += `
    ${count1} nota(s) de R$ 1.`
  }
  
  return result
}

console.log(withdrawMoney(153))
