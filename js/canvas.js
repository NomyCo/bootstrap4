//переменные
let canvas = document.querySelectorAll('.canvas');
let max = 100;
let firns = 0;
let k = (2 * Math.PI) / 100;

// массив из canvas
let ctxArr = [];
canvas.forEach(elem => {
    ctxArr.push(elem.getContext('2d'))
})

//событие при скролле
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    //считываем только большее значение скролла (скролл работает только вниз)
    //при скролле вверх данные не считываются
    if (firns < scrolled) {
        firns += scrolled
        firns = scrolled
        console.log(firns)
    }

    if (firns >= getCoords(canvas[0])-300 && firns <= getCoords(canvas[0])) { drawCircle(5, ctxArr[0], 1) }
    if (firns >= getCoords(canvas[1])-500 && firns <= getCoords(canvas[1])) { drawCircle(5, ctxArr[1], 2) }
    if (firns >= getCoords(canvas[2])-500 && firns <= getCoords(canvas[2])) { drawCircle(5, ctxArr[2], 3) }
    if (firns >= getCoords(canvas[3])-500 && firns <= getCoords(canvas[3])) { drawCircle(5, ctxArr[3], 4) }

})


//координата объекта
function getCoords(box1) {
    var box = box1.getBoundingClientRect();
    return box.top + pageYOffset;
}
console.log(getCoords(canvas[3]))


//показать число
function draw(ctx, num) {
    ctx.beginPath();
    ctx.font = "25px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#2aa9e0";
    ctx.fillText(num, 50, 55);
    ctx.closePath();
}

//рисовать круг
function drawCircle(time, ctx, num) {
    let x = 1;
    let timeID = setInterval(() => {
        if (x <= max) {
            //ctx.clearRect(0, 0, 100, 100);
            ctx.beginPath();
            ctx.arc(50, 50, 45, (x - 1) * k, x * k, false);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#2aa9e0";
            ctx.lineCap = "round";
            ctx.stroke();
            ctx.closePath();
            x++;
        } else {
            clearInterval(timeID)
        }
    }, time);
    draw(ctx, num)
}