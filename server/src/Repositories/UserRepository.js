const BaseRepository = require('./BaseRepository')

const User = require('../Models/User');
class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }
    create(username, email, password) {
        let data = {
            username: username,
            email: email,
            password: password
        }
        return this.model.create(data);
    }
    update(username, data) {
        console.log(username, data)
        return this.model.updateOne({ username: username }, data).then((data) => {
            return data;
        });
    }
}

module.exports = UserRepository;