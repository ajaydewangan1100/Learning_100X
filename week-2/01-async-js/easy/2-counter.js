function countdown(n) {
    if (n >= 0) {
      console.log(n);
      setTimeout(() => countdown(n - 1), 1000);
    }
  }
  
  countdown(4);
  