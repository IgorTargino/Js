function PA(n, a1, r) {
  let vetorPa = []
  let somaPa = 0
  for(let i = 0; i < n; i++){
    vetorPa.push(a1+(i*r))
    somaPa += a1+(i*r)
  }

  return [vetorPa, somaPa]
}

function PG(n, a1, r) {
  let vetorPg = []
  let somaPg = 1
  for(let i = 1; i <= n; i++){
    vetorPg.push(a1*(r**i))
    somaPg += a1*(r**i)
  }

  return [vetorPg, somaPg]
}

console.log(PA(10, 1, 2))
console.log(PG(10, 1, 2))
