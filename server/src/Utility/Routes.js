// From here we will export all the routes
class Routes {
    constructor(app) {
        this.app = app;
        this.setupRoutes();
    }
    setupRoutes() {
        this.app.use("/", require('../Routes/HomeRoutes/index'));
        this.app.use('/api/', require('../Routes/UserRoutes/index'));
    }
}
module.exports = Routes;