const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fs = require('fs');

let reminders = [];
try {
    reminders = JSON.parse(fs.readFileSync('reminderList.json', 'utf8')) || [];
} catch (err) {
    reminders = [];
}

const create = (task, time) => {
    const taskLower = task.toLowerCase();
    const timeInMs = time * 1000;
    const reminder = {
        task: taskLower,
        time: timeInMs
    };
    reminders.push(reminder);
    console.log(`Reminder added`);
    storeReminders();
};

const storeReminders = () => {
    fs.writeFile('reminderList.json', JSON.stringify(reminders, null, 2),
        (err) => {
            if (err) {
                console.error("Error storing reminders:", err);
            }
        })
}

const remind = () => {
    if (reminders.length === 0) {
        console.log("No reminders available.");
        return;
    } else {
        let totalDelay = 0;

        reminders.forEach((reminder) => {
            totalDelay += reminder.time;
            setTimeout(() => {
                console.log(`Reminder to ${reminder.task}`);
            }, totalDelay);
        });
    }
};

module.exports = {
    create,
    remind
};