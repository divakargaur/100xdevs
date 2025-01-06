let sec = 30;

let countDown = setInterval(() => {
    console.log(sec);
    sec--;
    if (sec < 0) {
        clearInterval(countDown);
    }
}, 1000);
