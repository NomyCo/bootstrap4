
//КНОПКА ВВЕРХ
let btnUp = document.querySelector('.btn_up');
window.addEventListener('scroll', function () {
    if (this.scrollY > this.innerHeight) {
        btnUp.classList.add('active')
    }
});


btnUp.addEventListener('click', function () {
    let scrollNum;
    scrollNum = window.scrollY
    if (scrollNum > 0) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        this.style.transform = 'rotate(0deg)';
        scrollSave = scrollNum
    } else {
        window.scrollTo({
            top: scrollSave,
            behavior: "smooth"
        });
        this.style.transform = 'rotate(180deg)';
    }
})