export const toRna = (dna, index = 0, rna = '') => {
    if (dna.length <= index) {
        return rna
    } else {
        rna += convertDna(dna[index])
        return toRna(dna, ++index, rna)
    }
}

const convertDna = dna => {
    switch (dna) {
        case 'G':
            return 'C'
        case 'C':
            return 'G'
        case 'T':
            return 'A'
        case 'A':
            return 'U'
        default:
            return ''
    }
}
