function circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();

    return "rgb(" + red + ',' + blue + ',' + green + ")";
}

function createCirle() {
    let ctx = document.getElementById('myCanvas').getContext('2d');
    let radius = Math.floor(Math.random() * 100)
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circlee = new circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circlee.x, circlee.y, circlee.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function creatMultipleCircle() {
    for (let i = 0; i <= 30; i++) {
        createCirle();
    }
}

creatMultipleCircle();