const userCreateService = require('../Services/UserCreateService');
const fetchUserService = require('../Services/fetchUser');
const updateUserService = require('../Services/updateUser');
const deleteUserService = require('../Services/deleteUser');

const UserRepository = require('../Repositories/UserRepository');
const createUser = (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }
    // After validation, pass the data to the service
    let userStatus = userCreateService({username, email, password})
    if (userStatus) {
        return res.status(200).json({
            message: "User Created"
        })
    } else {
        return res.status(400).json({
            message: "User Already Exists"
        })
    }
        
}

const fetchUser = (req, res) => {
    if (!req.params.params) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }

    // After validation, pass the data to the service
    let user = fetchUserService(req.params.id)

    if (user) {
        return res.status(200).json({
            message: "User Found",
            user: user
        })
    }
    else {
        return res.status(400).json({
            message: "User Not Found"
        })
    }
    
}
const updateUser = (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }
    if (!req.body) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }

    let data = {
        username: req.params.id,
        data: req.body
    }

    // After validation, pass the data to the service
    let user = updateUserService(data)

    if (user) {
        return res.status(200).json({
            message: "User Updated",
            user: user
        })
    }
    else {
        return res.status(400).json({
            message: "User Not Found"
        })
    }

        
    
}
const deleteUser = (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }

    // After validation, pass the data to the service
    let user = deleteUserService(req.body.username)
    if (user) {
        return res.status(200).json({
            message: "User Deleted"
        })
    }
    else {
        return res.status(400).json({
            message: "User Not Found"
        })
    }
        
}
const listUsers = (req, res) => {
    // Since this is a list, no validation is required so im not making a service for it though this is BAD PRACTICE
    const UserRepo = new UserRepository();
    let user = UserRepo.findAll({}).then((users) => {
        if (!users) {
            return res.status(400).json({
                message: "No Users Found"
            })
        }
        return res.status(200).json({
            message: "Users Found",
            users: users
        })
    }).catch((err) => {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err
        })
    })
    return user;

    
}
const userController = {
    createUser,
    fetchUser,
    updateUser,
    deleteUser,
    listUsers
}


module.exports = userController;