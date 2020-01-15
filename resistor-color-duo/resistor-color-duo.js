const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
]

export const decodedValue = codes =>
    COLORS.indexOf(codes[0]) * 10 + COLORS.indexOf(codes[1])
