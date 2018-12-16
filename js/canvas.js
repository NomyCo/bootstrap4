//переменные
let canvas = document.querySelectorAll('.canvas');
let i = 0;

//Вспомогательный массив (для работы функции splice)
let helplArr = []
canvas.forEach(elem => {
    helplArr.push(elem)
})

// массив из canvas
let ctxArr = [];
canvas.forEach(elem => {
    ctxArr.push(elem.getContext('2d'))
})


//событие при скролле
window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    //функция сработала удалить из массива
    //второе сравнение - конец страницы
    helplArr.forEach((elem, index) => {
        if (scrolled >= getCoords(elem) - 200 || window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            drawCircle(5, ctxArr[index], ++i)
            ctxArr.splice(index, 1)
            helplArr.splice(index, 1)
        }
    })
})

//координата объекта
function getCoords(box1) {
    var box = box1.getBoundingClientRect();
    return box.top + pageYOffset;
}

//рисовать число
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
    let k = (2 * Math.PI) / 100;
    let max = 100;
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