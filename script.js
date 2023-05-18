const daysEl = document.getElementById("days");
const newYears = "23 Oct 2022";

function countdown(){

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (currentDate - newYearsDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);

    daysEl.innerHTML = days;
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

// segunda parte

const daysEl2 = document.getElementById("days2");

const newYears2 = "10 Feb 2023";

function countdown2(){

    const newYearsDate2 = new Date(newYears2);
    const currentDate2 = new Date(); 

    const totalSeconds2 = (currentDate2 - newYearsDate2) / 1000;

    const days2 = Math.floor(totalSeconds2 / 3600 / 24);
    
    daysEl2.innerHTML = days2;
    
}

function formatTime(time2){
    return time2 < 10 ? `0${time2}` : time2;
}

countdown2();

// terceira parte

const daysEl3 = document.getElementById("days3");

const newYears3 = "8 Nov 2022";

function countdown3(){

    const newYearsDate3 = new Date(newYears3);
    const currentDate3 = new Date(); 

    const totalSeconds3 = (currentDate3 - newYearsDate3) / 1000;

    const days3 = Math.floor(totalSeconds3 / 3600 / 24);

    daysEl3.innerHTML = days3;
}

function formatTime(time3){
    return time3 < 10 ? `0${time3}` : time3;
}

countdown3();


setInterval(countdown, 1000);
setInterval(countdown2, 1000);
setInterval(countdown3, 1000);

AOS.init();z