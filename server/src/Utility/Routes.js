// From here we will export all the routes
class Routes {
    constructor(app) {
        this.app = app;
        this.setupRoutes();
    }
    setupRoutes() {
        this.app.use("/", require('../Routes/Home'));
        this.app.use('/api/users', require('../Routes/User'));
        this.app.use('/auth/', require('../Routes/Authentication'));
    }
}
module.exports = Routes;