function test() {
  console.log('ici ça bloque pas');
  interval = setInterval(() => console.log('I am not blocked'), 1000);
  setTimeout(() => clearInterval(interval), 10000);
  const notSoHeavyDo = times => {
    let count = 0;
    for (let i = 0; i < times; i++) {
      if (
        Math.round(
          Math.log(Math.sqrt(Math.abs(Math.round(Math.random() * 1e10))))
        ) === 1
      )
        count++;
    }
    return count;
  };


  const promise = new Promise((resolve) => {
    console.debug('hihi');
    let total = 1e8,
      cuts = 100,
      counts = 0,
      remains = cuts;
    for (let i = 0; i < cuts; i++) {
      counts = counts + notSoHeavyDo(total / cuts);
      remains--;
      if (!remains) return (counts);
    }
  });
  promise.then(console.log);
}

test();