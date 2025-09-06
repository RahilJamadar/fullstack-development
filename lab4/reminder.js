const fs = require('fs');

let reminders = [];
try {
    const data = fs.readFileSync('reminderList.json', 'utf8');
    reminders = JSON.parse(data);
} catch {
    reminders = [];
}

const create = (task, time) => {
    reminders.push({ task: task.toLowerCase(), time: time * 1000 });
    console.log("Reminder added.");
    fs.writeFileSync('reminderList.json', JSON.stringify(reminders, null, 2));
};

const remind = (done) => {
    if (reminders.length === 0) {
        console.log("No reminders available.");
        done();
        return;
    }

    let totalDelay = 0;
    reminders.forEach((reminder, index) => {
        totalDelay += reminder.time;
        setTimeout(() => {
            console.log(`Reminder: ${reminder.task}`);
            if (index === reminders.length - 1) done();
        }, totalDelay);
    });
};

module.exports = { create, remind };