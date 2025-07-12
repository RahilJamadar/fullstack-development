const eventEmitter = require('events');

const event = new eventEmitter();

event.on('greet',(name) => {
    console.log(`Hello, ${name}!`);
})

event.emit('greet','Rahil');