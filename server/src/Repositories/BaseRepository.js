// We Use this just in case we ever change the database we use.
// Makes it easier to change the database we use.
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    findOne(data) {

       return this.model.findOne(data).then((result) => {
            return result;
       });
    }
    findAll(data) {
        return this.model.find(data).then((data) => {
            return data;
        });
    }
    create(data) {
        console.log(data)
        return this.model.create(data);
    }
    update(username, data) {
        console.log(username, data)
        return this.model.updateOne({ username: username }, data).then((data) => {
            return data;
        });
    }
    delete(username) {
        return this.model.deleteOne({ username: username}).then((data) => {
            return data;
        });
    }
    findById(id) {
        return this.model.findById(id).then((data) => {
            return data;
        });
    }
}

module.exports = BaseRepository;