const UserRepository = require('../Repositories/UserRepository');
module.exports = (username) => {
    console.log(username);
    const UserRepo = new UserRepository();
    let usernameExist = UserRepo.findOne({ username: username }).then((user) => {
        if (user) {
            return user;
        }
        else {
            return false;
        }
    });
    return usernameExist;
}
