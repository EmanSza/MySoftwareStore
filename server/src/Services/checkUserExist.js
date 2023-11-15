const UserRepository = require('../Repositories/UserRepository');
module.exports = (userinfo) => {
    const UserRepo = new UserRepository();
    let usernameExist = UserRepo.findOne({ username: userinfo.username })
    let emailExist = UserRepo.findOne({ email: userinfo.email })
    

    if (usernameExist || emailExist) {
        return true;
    } else {
        return false;
    }
}
