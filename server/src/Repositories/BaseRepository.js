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
        return this.model.create(data);
    }
    update(id, data) {
        return this.model.updateOne({ _id: id }, data).then((data) => {
            return data;
        });
    }
    delete(id) {
        return this.model.deleteOne({ _id: id }).then((data) => {
            return data;
        });
    }
    updateOne (id, data) {
        return this.model.updateOne({ _id: id }, data).then((data) => {
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