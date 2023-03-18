let end = new Date('08/05/2023 17:00');
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        // document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }

    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    let or = document.getElementById("day");
    let jam = document.getElementById("hour");
    let rope = document.getElementById("minute");
    let varkyan = document.getElementById("seconds");

    or.innerText = days;
    jam.innerText = hours;
    rope.innerText = minutes;
    varkyan.innerText = seconds;

    if (+jam.innerText < 10) {
        jam.innerText = 0 + jam.innerText
    }
        
    if (+varkyan.innerText < 10) {
        varkyan.innerText = 0 + varkyan.innerText
    }

    if (+rope.innerText < 10) {
        rope.innerText = 0 + rope.innerText
    }
}

timer = setInterval(showRemaining, 1000);