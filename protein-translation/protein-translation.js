export const translate = (codon = '') => {
    let indexString = ''

    if (codon.length <= 0) return []

    if (codon.length % 3 !== 0) throw new Error('Invalid codon')

    return [...codon].reduce((acc, cur, i, arr) => {
        indexString += cur
        if (indexString.length === 3) {
            const rna = TRANSLATE_CODON[indexString]

            if (!rna) {
                throw new Error('Invalid codon')
            } else if (rna === 'STOP') {
                arr.splice(1)
                return acc
            }

            acc.push(rna)
            indexString = ''
        }
        return acc
    }, [])
}

const TRANSLATE_CODON = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
}
