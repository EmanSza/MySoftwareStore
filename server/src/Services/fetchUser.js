const UserRepository = require('../Repositories/UserRepository');
module.exports = (userinfo) => {
    const UserRepo = new UserRepository();
    let usernameExist = UserRepo.findOne({ username: userinfo.username }, (err, user)).then((user) => {
        if (user) {
            return user;
        }
        else {
            return false;
        }
    });
    return usernameExist;
}
