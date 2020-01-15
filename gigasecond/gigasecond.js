//Math.pow(10,12) = 10 ** 12 = 1000000000000 = 1e12.
const GIGASECOND_IN_MS = 10 ** 12

export const gigasecond = gs => new Date(gs.getTime() + GIGASECOND_IN_MS)
