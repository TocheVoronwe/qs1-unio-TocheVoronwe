const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = (hero, sentence) => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john, 'Winter is coming');
const aryaSay = say(arya, 'The king in the North');
const sensaSay = say(sensa, 'For the North');

sensaSay.then(res => {
  console.log(res);
  aryaSay.then(console.log);
  interval = setInterval(() => {
    console.log(res);
    aryaSay.then(console.log);
  }, 1000);
  setTimeout(() => clearInterval(interval), 10000);
  johnSay.then(console.log);
});
