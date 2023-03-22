const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}
let IntervalId = null

refs.stopBtn.disabled = true

refs.startBtn.addEventListener('click', onChangeColor)
refs.stopBtn.addEventListener('click', onStopChangeColor)

function onChangeColor() {
    refs.stopBtn.disabled = false
    refs.startBtn.disabled = true

    IntervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, 1000)
}

function onStopChangeColor() {
    refs.startBtn.disabled = false
    refs.stopBtn.disabled = true
    clearInterval(IntervalId)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}