setInterval(() => {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    console.log(hr +":"+ min +":"+ sec);
}, 1000);