class Circle {
    constructor(x,y,radius,color) {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }
    render(){
        let ctx = document.getElementById('myCanvas').getContext('2d');
        let circle= new Circle(this.x,this.y,this.radius,this.color)
        ctx.beginPath();
        ctx.arc(Circle.x, Circle.y, Circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
let circle = new Circle();
circle.render(10,10,100,"#000000");

// let Circle = function (x, y, color, radius) {
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.radius = radius;
//     this.render = function (canvas) {
//         canvas.beginPath();
//         canvas.fillStyle = this.color;
//         canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//         canvas.fill();
//     }
// };
// let circle = new Circle(10, 10, 100, "#000000");
// circle.render(document.getElementById("myCanvas").getContext('2d'));
console.log("a")