const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const body = document.querySelector('#body')
const text = document.querySelector('#text h3')
const box = document.querySelector('#box img')

btn1.onclick = () => {
    body.classList.toggle('black')
    text.classList.toggle('white')
}

btn2.onclick = () => {
    box.classList.toggle('open')
    box.classList.toggle('close')
}

btn3.onclick = () => {
    text.classList.toggle('title')
    text.classList.toggle('opacity')
}


btn4.onclick = () => {
    text.classList.toggle('red')
}


