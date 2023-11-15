const UserRepository = require('../Repositories/UserRepository');
module.exports = (userinfo) => {
    const UserRepo = new UserRepository();
    let usernameExist = UserRepo.findOne({ username: userinfo.username }, (err, user)).then((user) => {
        if (user) {
            return true;
        }
        else {
            return false;
        }
    });
    let emailExist = UserRepo.findOne({ email: userinfo.email }, (err, user)).then((user) => {
        if (user) {
            return true;
        }
        else {
            return false;
        }
    });

    if (usernameExist || emailExist) {
        return true;
    } else {
        return false;
    }
}
