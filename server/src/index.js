const server = require('./Server/server');
const Database = require('./Database/Database');
const Routes = require('./Utility/Routes');

require('dotenv').config();


const db = new Database(process.env.MONGODB_URL);

db.connect()

new Routes(server);


server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});