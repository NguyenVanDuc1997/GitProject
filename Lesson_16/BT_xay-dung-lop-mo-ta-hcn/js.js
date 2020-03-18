let Rectangle = function (x, y, length, width) {
    this.length = length;
    this.width = width;
    this.x = x;
    this.y = y;
    this.getDiameter = function () {
        return (this.length + this.width) * 2;
    }

    this.getArea = function () {
        return this.length * this.width;
    }


    this.createRectangle = function () {

        let ctx = document.getElementById('myCanvas').getContext("2d");
        let rectangle = new Rectangle(x, y, length, width);
        ctx.fillRect(rectangle.x, rectangle.y, rectangle.length, rectangle.width);
    }

    this.setLong = function (x, y, length, width) {
        this.length = length;
        this.width = width;
    }
    this.show = function () {
        return 'chu vi là : ' + this.getDiameter() + 'diện tích là :' + this.getArea();
    }
}
let rectangle = new Rectangle(0, 0, 200, 200);
console.log(rectangle.getDiameter());
console.log(rectangle.getArea());
rectangle.createRectangle();
rectangle.setLong( 0,0,100, 300);
alert(rectangle.show());