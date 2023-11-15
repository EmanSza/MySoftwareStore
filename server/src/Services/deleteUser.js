const UserRepository = require('../Repositories/UserRepository');
const checkUserExist = require('./checkUserExist');
module.exports = (userinfo) => {
    let user = checkUserExist(userinfo);
    if (!user) {
        return false;
    }

    const UserRepo = new UserRepository();
    user = UserRepo.delete(userinfo);
    if (user) {
        return true;
    }
    else {
        return false;
    }
    
}
