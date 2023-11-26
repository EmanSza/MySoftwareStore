const UserRepository = require('../../Repositories/UserRepository');
const checkUserExist = require('./checkUserExist');
module.exports = (data) => {
   let user = checkUserExist(data.username);
    if (!user) {
        return false;
    }

    const UserRepo = new UserRepository();
    user = UserRepo.update(data.username, data.data);
    if (user) {
        return true;
    }
    else {
        return false;
    }
}
