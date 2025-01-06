// Add your Circle class here
class Circle {

    constructor(radius) {
        this.radius = radius;
        this.pi = Math.PI
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return (this.pi * this.diameter)
    }

    get area() {
        return (this.pi * (this.radius * this.radius))
    }

    set diameter(diameter) {
        this.radius = diameter/2
    }

    set circumference(circumference) {
        this.radius = circumference / this.pi / 2
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea / this.pi )
    }
}