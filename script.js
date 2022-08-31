window.addEventListener("DOMContentLoaded", () =>{

    const timer = document.querySelector(".timer");
    const timerItems = document.querySelector(".timer__items");

    let deadline = "2023-08-31";
  

    function calcTimeRemaining (endtime){
        let days, hours, minutes, seconds; 

        let time = Date.parse(endtime) - Date.parse(new Date());
            days = Math.floor(time / (1000 * 60 * 60 * 24));
            hours = Math.floor(time / (1000 * 60 * 60)% 24);
            minutes = Math.floor(time / (1000 * 60) % 60);
            seconds = Math.floor(time /(1000) % 60 );
            
            
        return{
            time,
            days,
            hours,
            minutes,
            seconds,
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }


    function showTimeRemaining(section, endtime){
        let timer = document.querySelector(section);
        let days = timer.querySelector("#day");
        let hours = timer.querySelector("#hour");
        let minutes = timer.querySelector("#minute");
        let seconds = timer.querySelector("#second");
        let interval = setInterval(updateTime, 1000);

        updateTime();

        function updateTime(){
            let timeValue = calcTimeRemaining(endtime);
            days.innerHTML = 
            `<div>${getZero(timeValue.days)}</div>
             <div class="timer__id">days</div> `;
            hours.innerHTML = `<div>${getZero(timeValue.hours)}</div>
            <div class="timer__id">hours</div> `;
            minutes.innerHTML = `<div>${getZero(timeValue.minutes)}</div>
            <div class="timer__id">minutes</div> `;
            seconds.innerHTML = `<div>${getZero(timeValue.seconds)}</div>
            <div class="timer__id">seconds</div> `;

            // function nameTimerItems (){
            //     if ()
            // }

            if (timeValue.time <= 0){
                clearInterval(interval);
            }
          
        }

    }

showTimeRemaining(".timer", deadline);

});
