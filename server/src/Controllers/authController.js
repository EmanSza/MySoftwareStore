const AuthServices = require('../Services/AuthService');
const authServices = new AuthServices();

const login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }
    // After validation, pass the data to the service
    return authServices.login(username, password).then((user) => {
        if (user) {
            return res.status(200).json({
                message: user
            })
        } else {
            return res.status(400).json({
                message: "User Not Found"
            })
        }
    });
        
}

module.exports = login;