


let canvas = document.querySelector('.canvas');

let ctx = canvas.getContext('2d');
let max = 100;
let x = 0;
function draw() {

    let k = (2 * Math.PI) / 100;
    if (x <= max) {

        ctx.clearRect(0, 0, 50, 50);
        ctx.beginPath();
        ctx.arc(50, 50, 45, 0, x * k, false);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#2aa9e0";
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.closePath();
        x++;
        timeout = setTimeout(draw, 10);

        ctx.beginPath();
        ctx.font = "25px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#2aa9e0";
        ctx.fillText("1", 50, 55);
        ctx.closePath();

    } else {
        clearTimeout(timeout)
    }
}

draw()
