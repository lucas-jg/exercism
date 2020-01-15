export class Triangle {
    constructor(...sides) {
        this.sides = sides.sort((a, b) => a - b)
    }

    kind() {
        const [x, y, z] = this.sides
        console.log(x, y, z)

        // 삼각형?
        if (x <= 0 || x + y <= z) throw new Error('Can not make a triangle.')

        if (x === z) return 'equilateral'

        if (x === y || y === z) return 'isosceles'

        return 'scalene'
    }
}
