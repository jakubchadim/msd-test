import { calcNumberOfMutations } from './dna'

test('calcNumberOfMutations', () => {
  expect(calcNumberOfMutations('AAA', 'AAA')).toBe(0)
  expect(calcNumberOfMutations('AAA', 'ATA')).toBe(1)
  expect(calcNumberOfMutations('AAA', 'AA')).toBe(1)
  expect(calcNumberOfMutations('AAA', 'AAAA')).toBe(1)
  expect(calcNumberOfMutations('ACTCCGTATCGAGCGATCACAG', 'ACTGCTCGTATCGATCGATCAC')).toBe(5)
})