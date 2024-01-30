(() => {
  let count = 0;
  let timer = setInterval(() => {
    let current = new Date();
    console.log(
      `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()} <---> ${
        current.getHours() > 12 ? current.getHours() - 12 : current.getHours()
      }:${current.getMinutes()}:${current.getSeconds()} ${
        current.getHours() > 12 ? "PM" : "AM"
      }`
    );
    count++;
    if (count > 10) {
      console.log("10 times printed!");
      clearInterval(timer); // Stop the interval when prints 10 times
    }
  }, 1000);
})();
