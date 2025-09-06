const eventEmitter = require('events');
const readline = require('readline');

const event = new eventEmitter();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

event.on('remind', (task, time) => {
    setTimeout(() => {
        console.log(`Reminder: ${task}`);
    }, time * 1000);
});

const reminder = () => {
    rl.question('Enter the task:', (task) => {
        rl.question("Enter the time to remind (in seconds):", (time) => {
            console.log(`Reminder set for ${task} in ${Number.parseInt(time)} seconds.`);
            event.emit('remind', task, Number.parseInt(time));
            rl.close();
        });
    })
}


reminder();