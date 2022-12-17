const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please turn of the motor!');
  setTimeout(() => {    
      console.log('Please turn of the motor! Its a gentle remainder.');
  }, 3000);
});

console.log("the script is running!")
myEmitter.emit('WaterFull');
console.log("script is still running.")
myEmitter.emit('WaterFull');