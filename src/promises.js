const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = (hero, sentence) => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john, 'Winter is coming');
const aryaSay = say(arya, 'The king in the North');
const sensaSay = say(sensa, 'For the North');

const speak = () =>
  sensaSay
    .then(result => {
      console.log(result);
      return aryaSay;
    })
    .then(console.log);

speak().then(() =>
  johnSay.then(result => {
    console.log(result);
    return new Promise((res) => {
      timer = setInterval(speak, 1000);
      setTimeout(() => {
        clearInterval(timer);
        res();
      }, 10000);
    });
  }))
  .catch(err => console.error(err));