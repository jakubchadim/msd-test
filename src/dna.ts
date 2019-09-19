
export function calcNumberOfMutations (childDna: string, parentDna: string): number {
  let mutations: number = 0
  let parentSkipMolekules: number = 0

  for (let i = 0; i <= childDna.length; i++) {
    const molecule: string = childDna[i]

    if (molecule === parentDna[i + parentSkipMolekules]) {
      continue
    }

    // change -> next parent mol is matching next mol
    if (childDna[i + 1] === parentDna[i + parentSkipMolekules + 1] ) {
      ++mutations
      continue
    }

    // deletion -> next parent mol is matching to current mol
    if (molecule === parentDna[i + parentSkipMolekules + 1] ) {
      ++parentSkipMolekules
      ++mutations
      continue
    }

    --parentSkipMolekules
    ++mutations

  }

  return mutations
}
