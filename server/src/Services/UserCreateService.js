const UserRepository = require('../Repositories/UserRepository');

module.exports = (userinfo) => {
    const UserRepo = new UserRepository();
    user = UserRepo.create(userinfo).then((user) => {
        if (user) {
            return user;
        }
        else {
            return false;
        }
    });
    console.log(user);
    if (user) {
        return true;
    }
    else {
        return false;
    }
}
