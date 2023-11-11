const server = require('./Server/server');
const Database = require('./Database/Database');

require('dotenv').config();


const db = new Database(process.env.MONGODB_URL);

db.connect()

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});