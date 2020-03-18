let circle = function (radius) {
    this.radius = radius;

    this.getRadius = function () {
        return radius;
    }

    this.getArea = function () {
        return Math.PI * this.radius * this.radius;
    }
}

let circlee = new circle(2);
let radius = circlee.getRadius();
let area = circlee.getArea();

alert("radius:" + radius + ';' + 'area:' + area)