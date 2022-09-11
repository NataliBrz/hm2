const aInput = document.querySelector('#a')
const bInput = document.querySelector('#b')
const sumBtn = document.querySelector('#summ')
const restBtn = document.querySelector('#rest')
const multBtn = document.querySelector('#mult')
const delBtn = document.querySelector('#del')
const result = document.querySelector('#result')


const sum = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);

    result.innerHTML = a + b;
}


sumBtn.onclick = sum;

const rest = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);

    result.innerHTML = a - b;
}


restBtn.onclick = rest;

const mult = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);

    result.innerHTML = a * b;
}


multBtn.onclick = mult;

const del = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);

    result.innerHTML = a / b;
}


delBtn.onclick = del;

function changecolor(color) {
    click.style.backgroundColor = color;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}


