const UserRepository = require('../../Repositories/UserRepository');
const checkUserExist = require('./checkUserExist');
module.exports = (username) => {
    let user = checkUserExist(username);
    if (!user) {
        return false;
    }

    const UserRepo = new UserRepository();
    user = UserRepo.delete(username);
    if (user) {
        return true;
    }
    else {
        return false;
    }
    
}
