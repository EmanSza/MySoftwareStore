const jwt = require('jsonwebtoken');

class AuthServices {
    constructor() {

    }
    createToken(username) {
        return jwt.sign({ username: username }, process.env.PRIV_KEY, { expiresIn: '1h' });
        
    }
    login(username, password) {
    }
}