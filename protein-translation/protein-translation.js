export const translate = (codon, index = 0, protein = []) => {
    if (index < 3) {
        return protein
    } else {
        translateCodon(codon, index)
        translate(codon, index + 3, protein)
    }
}

const translateCodon = (codon, index) => {
    switch (codon.slice(index, index + 2)) {
        case 'AUG':
            break

        default:
            break
    }
}
