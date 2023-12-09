// We Use this just in case we ever change the database we use.
// Makes it easier to change the database we use.

// TODO:
// I was stupid and created some things based on UserRepo Will begin moving them over
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
        return this.model.create(data);
    }
    delete(data) {
        return this.model.deleteOne(data).then((data) => {
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