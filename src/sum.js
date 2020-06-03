function sum(a, b) {
  return a + b;
}


function filterOutNull(arrayOfValues) {
  return arrayOfValues.filter((item) => {
    return item !== null
  })
}

module.exports = { sum, filterOutNull };