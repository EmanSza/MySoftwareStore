const mongoose = require('mongoose');

class Database {
    constructor(url, options) {
        this.url = url;
        this.options = options;
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.connection = mongoose.connect(this.url, this.options);
            mongoose.connection.on('error', (err) => {
                console.log('Mongoose default connection error: ' + err);
                reject(err);
            });
            mongoose.connection.on('connected', () => {
                console.log('Mongoose Connection Established');
                resolve();
            });
            mongoose.connection.on('disconnected', () => {
                console.log('Mongoose default connection disconnected. Retrying in 5 seconds');
                setTimeout(() => {
                    this.connect();
                }, 5000);
            });
            process.on('SIGINT', () => {
                mongoose.connection.close(() => {
                    console.log('Mongoose default connection disconnected through app termination');
                    process.exit(0);
                });
            });
        });
    }
}

module.exports = Database;