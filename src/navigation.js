const calcBtn = document.querySelector('#calcBtn');
const timerBtn = document.querySelector('#timerBtn');

const calc = document.getElementById('formDate');
const timer = document.getElementById('timer');

function toggleClass(item) {
   item.classList.toggle('hide');
}

calcBtn.addEventListener('click', () => { 
   toggleClass(calc) 
});
timerBtn.addEventListener('click', () => { 
   toggleClass(timer) 
});