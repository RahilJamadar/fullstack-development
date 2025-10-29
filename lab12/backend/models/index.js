const dbconnect = require('./config');

const Student = require('./student');
const Mark = require('./mark');

(async () => {
    try {
        await dbconnect.authenticate();
        console.log('successfully.');
        await dbconnect.sync();
        console.log('synced');
    } catch (error) {
        console.log('error', error);
    }
})();

module.exports = {
    Student,
    Mark
};