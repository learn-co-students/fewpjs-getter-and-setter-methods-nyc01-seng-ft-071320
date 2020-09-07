// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return Math.PI * this.diameter
    }

    get area(){
        return (this.radius**2) * Math.PI
    }

    set diameter(newDiameter){
        this.radius = newDiameter / 2
        // this.diameter = newDiameter
    }

    set circumference(newCircumference){
        this.radius = newCircumference / (2 * Math.PI)
        // this.circumference = circumference
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)
    }
}