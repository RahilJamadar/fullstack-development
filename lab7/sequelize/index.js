const config = require('./config');

const connectDatabase = async () => {
    try {
        await config.authenticate();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDatabase();