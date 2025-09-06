const reminder = require('./reminder');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mainMenu = () => {
    console.log("\n1. Create reminder");
    console.log("2. Remind me");
    console.log("3. Exit");

    rl.question("Choose an option: ", (option) => {
        if (option === '1') {
            rl.question("Enter the task: ", (task) => {
                rl.question("Enter time in seconds: ", (time) => {
                    reminder.create(task, parseInt(time));
                    mainMenu();
                });
            });
        } else if (option === '2') {
            console.log("Reminding you...");
            reminder.remind(() => rl.close());
        } else if (option === '3') {
            console.log("Exiting...");
            rl.close();
        } else {
            console.log("Invalid option. Try again.");
            mainMenu();
        }
    });
};

mainMenu();
