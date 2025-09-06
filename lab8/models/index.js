const dbconnect  = require('../dbconfig');
const Users = require('./users');

(async()=>{
    try {
        await dbconnect.authenticate();
        console.log("successful.");
        await dbconnect.sync();
        console.log("Synced");
    }
    catch (error) {
        console.error("Error:", error);
    }
})();

module.exports = {
    Users     
};