const secondsHtml = document.querySelector('.seconds');
const miliSecondsHtml = document.querySelector('.miliseconds');
const startHtml = document.querySelector('.start');
const stopHtml = document.querySelector('.stop');
const resetHtml = document.querySelector('.reset');

let seconds = 0;
let miliSeconds = 0;
let stoped = false;

const checkNumber = (time, html) => {
    if (time < 10) {
        html.innerText = `0${time}`
    }else {
        html.innerText = `${time}`
    }
}

const showTime = () => {
    checkNumber(miliSeconds, miliSecondsHtml);
    checkNumber(seconds, secondsHtml);
}
showTime();

const startTimer = () => {
    let timer = setInterval(() => {
        miliSeconds+= 1;
        if (miliSeconds === 100) {
            seconds+= 1;
            miliSeconds= 0;
        }

        showTime();

        if (stoped) {
            clearInterval(timer);
        }
    }, 10)
}

startHtml.addEventListener('click', () => {
    stoped = false;
    startTimer();
})

stopHtml.addEventListener('click', () => {
    stoped = true;
})

resetHtml.addEventListener('click', () => {
    stoped = true;
    seconds = 0;
    miliSeconds = 0;

    showTime();
})