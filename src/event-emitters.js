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
  myEmitter.emit('arya');
  callback(sensaSay, 'For the North');
  /*setImmediate(sensaSay, 'For the N<orth');*/
});

myEmitter.once('north', () => {
  setImmediate(johnSay, 'Winter is coming');
});

myEmitter.on('arya', () => {
  setImmediate(aryaSay, 'The king in the North');
});


const timeoutObj = setTimeout(() => {
  myEmitter.emit('north');
}, 1000);

const immediateObj = setImmediate(() => {
  console.log('immediately executing immediate');
});

const intervalObj = setInterval(() => {
  myEmitter.emit('north');
}, 1000);

clearTimeout(timeoutObj);
clearImmediate(immediateObj);
setTimeout(clearInterval, 5000, intervalObj);