// function ctr(n) {
//   setInterval(() => {
//     n -= 1;
//     console.log(n);
//   }, 1000);
// }
// ctr(4);

function countdown(n) {
    let timer = setInterval(() => {
        if (n >= 0) {
            console.log(n);
            n--;
        } else {
            clearInterval(timer); // Stop the interval when countdown reaches 0
        }
    }, 1000);
}

countdown(4);
