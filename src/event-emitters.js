const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const aryaSay = say(arya);
const sensaSay = say(sensa);
const johnSay = say(john);

const eventEmitter = require('events');
const myEmitter = new eventEmitter();


myEmitter.on('north', () => {
  sensaSay('For the North');
  setImmediate(() => myEmitter.emit('arya'));
});

myEmitter.once('north', () => johnSay('Winter is coming'));


myEmitter.on('arya', () => aryaSay('The king in the North'));

const timeoutObj = setTimeout(() => {
  myEmitter.emit('north');
}, 1000);

const intervalObj = setInterval(() => myEmitter.emit('north'), 1000);

clearTimeout(timeoutObj);
setTimeout(clearInterval, 5000, intervalObj);