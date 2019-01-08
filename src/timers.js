const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = sentence => {
  setImmediate(say(john), sentence);
  setImmediate(aryaSay, 'thank you for needle');
}; // may be used this way setTimeout(johnSay, 1000, 'hello');

const aryaSay = say(arya);
const sensaSay = say(sensa);

setTimeout(johnSay, 2000, 'hello Ladies Stark');
let interval = setInterval(sensaSay, 1000, 'For the north');
setTimeout(clearInterval, 10000, interval);