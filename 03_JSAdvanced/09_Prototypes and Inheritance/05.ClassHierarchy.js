function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        get area() { }
        changeUnits(value) {
            if (value != 'm' && value != 'cm' && value != 'mm') {
                return;
            }
            this.units = value;
        }
        toString() { return `Figures units: ${this.units}` }
        factor() {
            if (this.units == ' m') {
                return 0.1;
            }
            if (this.units == 'cm') {
                return 1;
            }
            if (this.units == 'mm') {
                return 10;
            }
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }
        get area() { return Math.PI * this.radius ** 2 * this.factor() ** 2 }
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius * this.factor()}`
        }

    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }
        get area() { return this.width * this.height * this.factor() ** 2 }
        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width * this.factor()}, height: ${this.height * this.factor()}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}
classHierarchy()
