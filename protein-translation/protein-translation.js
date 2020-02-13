export const translate = (codon = '') => {
    if (codon.length % 3 !== 0) throw new Error('Invalid codon')

    return (codon.match(/.{3}/g) || []).reduce((acc, cur, _, arr) => {
        const rna = TRANSLATE_CODON[cur]

        if (!rna) throw new Error('Invalid codon')
        else if (rna === 'STOP') {
            arr.splice(1)
            return acc
        }

        acc.push(rna)
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
