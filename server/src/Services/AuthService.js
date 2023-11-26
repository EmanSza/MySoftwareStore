const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserRepository = require('../Repositories/UserRepository');
class AuthServices {
    constructor() {

    }
    accessToken(user) {
        return jwt.sign(user, process.env.PRIV_KEY , { expiresIn: '1h' });
    }
    checkToken(token) {
        return jwt.verify(token, process.env.PRIV_KEY);
    }
    checkHash(password) {
        return bcrypt.compare(password, hash);
    }
    login(username, password) {
        const UserRepo = new UserRepository(); 
        return UserRepo.findOne({username: username}).then((user) => {
            if (!user) {
                return false;
            }
            return bcrypt.compare(password, user.password).then((result) => {
                if (!result) {
                    return false;
                }
                return this.accessToken({ username: user.username, email: user.email, id: user.id });
            });
        });
    }
}

module.exports = AuthServices;