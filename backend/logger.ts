import winston from 'winston';

const { combine, timestamp, json } = winston.format;

const errLogger = winston.createLogger({
    level: 'error',
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.File({
            filename: 'logs/error.log',
        })
    ]
})

const infoLogger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.File({
            filename: 'logs/app.log',
        })
    ]
})

export default function getLogger(type: 'info' | 'error') {
    return type === 'info' ? infoLogger : errLogger;
}