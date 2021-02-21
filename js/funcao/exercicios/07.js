bhaskara = (a, b, c) => {
  const delta = (b**2) - (4*a*c)
  const x1 = (-b + delta**(1/2))/2*a 
  const x2 = (-b - delta**(1/2))/2*a
  return delta > 0 ? [x1, x2] : 'Delta negativo'
}

console.log(bhaskara(1, 4 , 2))