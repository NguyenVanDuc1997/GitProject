//vẽ đường thẳng
let c= document.getElementById('myCanvas');
let ctx= c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(300,200);
ctx.stroke();


// vẽ đường tròn
let  c= document.getElementById('myCanvas');
let ctx = c.getContext('2d');
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();