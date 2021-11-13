setInterval(() => {
    const clock = new Date;
    let hour;
    let minutes;
    let second;
    let date;
    hour = clock.getHours();
    minutes = clock.getMinutes();
    second = clock.getSeconds();
    date = clock.toLocaleDateString();
    var session = "AM";
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    second = (second < 10) ? "0" + second : second;
    var Clock = hour + ' : ' + minutes + ' : ';

    document.querySelector('.time').innerHTML = Clock;
    document.querySelector('.sec').innerHTML = second;
    document.querySelector('.date').innerHTML = date;
}, 1000);

