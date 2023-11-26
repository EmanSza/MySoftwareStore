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
    let user = authServices.login(username, password)
    if (user) {
        return res.status(200).json({
            message: "User Logged In"
        })
    } else {
        return res.status(400).json({
            message: "User Not Found"
        })
    }
        
}