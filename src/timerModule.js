import {loadScript} from './common.js';
import {Howl} from 'howler';

// const deadline = '2021-04-01';
   const deadline = document.getElementById('timerTime');
   const startBtn = document.querySelector('#start');
   const stopBtn = document.querySelector('#stop');
   let timeInterval;
   // loadScript('https://cdn.jsdelivr.net/npm/howler@2.2.1/dist/howler.min.js');
   let sound;
      
   function getTimeRemaining(endtime) {

      // здесь мы получаем количество миллисекунд до конечного времени
      const t = Date.parse(endtime) - Date.parse(new Date()),
            
            days = Math.floor(t / (1000 * 60 * 60 * 24)), // сколько суток осталось до дедлайна
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds,
      };
   }

   // функция проверяет состоит ли число из 1 цифры, если да, до к ней добавляет 0
   function getZero(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }
   function setClock(selector, endtime) {
      // debugger;
      const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');

            timeInterval = setInterval(updateClock, 1000);

      // ? Мы вручную вызываем updateClock(), чтобы убрать мигание в верстке при загрузке
      updateClock();
      
      function updateClock() {
         const t = getTimeRemaining(endtime.value);

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

         if (t.total <= 0) {
            sound = new Howl({
               src: ['src/media/timer.mp3']
            });
            sound.play();

            clearInterval(timeInterval);
         }
      }
   }
startBtn.addEventListener('click', () => {
   setClock('#timer', deadline);
});

stopBtn.addEventListener('click', () => {
   clearInterval(timeInterval);
   sound.stop();
});
