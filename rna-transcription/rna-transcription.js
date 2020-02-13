const TRANSCRIPTION = { G: 'C', C: 'G', T: 'A', A: 'U' }

export const toRna = dna => {
    return [...dna].map(v => TRANSCRIPTION[v]).join('')
}
