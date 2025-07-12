const eventEmitter = require('events');
const readline = require('readline');

const event = new eventEmitter();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

event.on('remind', (task) => {
    console.log(`Reminder: ${task}`);
});

const reminder = () => {
    rl.question('Enter the task:', (task) => {
        rl.question("Enter the time to remind (in seconds):", (time) => {
            console.log(`Reminder set for ${task} in ${time} seconds.`);
            setTimeout(() => {
                event.emit('remind', task);
            }, time * 1000);
        })
    })
}


reminder();