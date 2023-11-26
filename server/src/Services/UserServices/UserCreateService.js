const UserRepository = require('../../Repositories/UserRepository');
const bCrypt = require('bcrypt');
const { use } = require('../../Server/server');

module.exports = (userinfo) => {
    const UserRepo = new UserRepository();
    return bCrypt.hash(userinfo.password, 10).then((hash) => {
        console.log(userinfo.username, userinfo.email, hash)
        return UserRepo.create(userinfo.username, userinfo.email, hash );
    });
}
