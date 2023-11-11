const BaseRepository = require('./BaseRepository')

const User = require('../Models/User');
class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }
}

module.exports = UserRepository;