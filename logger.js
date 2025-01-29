const winston = require('winston');
const fs = require('fs');

// Set up custom logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console({ format: winston.format.combine(winston.format.colorize(), winston.format.simple()) }),
        new winston.transports.File({ filename: 'logs/test.log' })
    ]
});

class Logger {
    static log(message) {
        fs.appendFileSync('logs/test.log', message + '\n');
    }

    static error(message) {
        fs.appendFileSync('logs/test.log', '[ERROR] ' + message + '\n');
    }

    static info(message) {
        fs.appendFileSync('logs/test.log', '[INFO] ' + message + '\n');
    }
}

module.exports = logger;