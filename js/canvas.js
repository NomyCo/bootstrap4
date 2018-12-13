//переменные
let canvas = document.querySelectorAll('.canvas');
let max = 100;
let x = 0;
let k = (2 * Math.PI) / 100;

//массив из canvas
let ctxArr = [];
canvas.forEach(elem => {
    ctxArr.push(elem.getContext('2d'))
})


//событие при скролле
window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled)
    if (scrolled > 5 ) {
        drawCircle(ctxArr[0], 1);
    } if (scrolled > 300 ) {
        drawCircle(ctxArr[1], 2);
    } if (scrolled > 800 ) {
        drawCircle(ctxArr[2], 3);
    } if (scrolled > 1300) {
        drawCircle(ctxArr[3], 4);
    }
}

//показать круг
function drawCircle(ctx, num) {
    ctx.clearRect(0, 0, 100, 100);
    ctx.beginPath();
    ctx.arc(50, 50, 45, 0, x * k, false);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#2aa9e0";
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
    x++;
    if (x <= max) setTimeout(drawCircle(ctx), 10);

    draw(ctx, num)
}

//показать число
function draw(ctx, num) {
    ctx.beginPath();
    ctx.font = "25px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#2aa9e0";
    ctx.fillText(num, 50, 59);
    ctx.closePath();
}