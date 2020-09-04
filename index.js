// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }
  get circumference() {
    return pi * this.diameter;
  }
  set circumference(circumference) {
    this.radius = circumference / (pi * 2);
  }

  get area() {
    return pi * (this.radius * this.radius);
  }

  set area(newArea) {
    this.radius = this.radius * this.radius;
  }
}
