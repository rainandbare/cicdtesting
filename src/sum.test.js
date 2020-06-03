const { sum, filterOutNull } = require('./sum');


describe('Testing the summation functionality', () => {
  test('add 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
  });
  test('add 0 and 5 to equal 5', () => {
    expect(sum(0, 5)).toBe(5)
  })
  test('add -15 and 10 to equal -5', () => {
    expect(sum(-15, 10)).toBe(-5)
  })
})


describe('testing filter function', () => {
  it('filters out null values', () => {
    const mockData = ['3', 3, 'tomato', null];
    const expectedOutput = ['3', 3, 'tomato']

    expect(filterOutNull(mockData)).toStrictEqual(expectedOutput)
  })
})