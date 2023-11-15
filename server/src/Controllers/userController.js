const userCreateService = require('../Services/UserCreateService');
const createUser = (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }

    // After validation, pass the data to the service
    userCreateService(username, email, password)
        .then((result) => {
            if (!result) {
                return res.status(400).json({
                    message: "User Already Exists"
                })
            }
            return res.status(201).json({
                message: "User Created Successfully",
                user: result
            })
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Internal Server Error",
                error: err
            })
        })
    

}
const fetchUser = (req, res) => {
    
}
const updateUser = (req, res) => {
    
}
const deleteUser = (req, res) => {
    
}
const listUsers = (req, res) => {
    
}
const userController = {
    createUser,
    fetchUser,
    updateUser,
    deleteUser,
    listUsers
}


module.exports = userController;