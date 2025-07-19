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
        switch (option) {
            case '1':
                rl.question("Enter the task to remind: ", (task) => {
                    rl.question("Enter the time to remind (in seconds): ", (time) => {
                        reminder.create(task, Number.parseInt(time));
                        mainMenu();
                    });
                });
                break;
            case '2':
                console.log("Reminding you...");
                reminder.remind();
                rl.close();
                break;
            case '3':
                console.log("Exiting...");
                rl.close();
                return;

            default:
                console.log("Invalid option, please try again.");
                mainMenu();
        }
    });
};

mainMenu();

