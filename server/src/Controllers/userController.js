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
    if (!req.body.username) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }

    // After validation, pass the data to the service
    fetchUserService(req.body.username)
        .then((result) => {
            if (!result) {
                return res.status(400).json({
                    message: "User Not Found"
                })
            }
            return res.status(200).json({
                message: "User Found",
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
const updateUser = (req, res) => {
    if (!req.body.username) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }

    // After validation, pass the data to the service
    updateUserService(req.body.username)
        .then((result) => {
            if (!result) {
                return res.status(400).json({
                    message: "User Not Found"
                })
            }
            return res.status(200).json({
                message: "User Found",
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
const deleteUser = (req, res) => {
    if (!req.body.username) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }

    // After validation, pass the data to the service
    deleteUserService(req.body.username)
        .then((result) => {
            if (!result) {
                return res.status(400).json({
                    message: "User Not Found"
                })
            }
            return res.status(200).json({
                message: "User Found",
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
const listUsers = (req, res) => {
    // Since this is a list, no validation is required so im not making a service for it though this is BAD PRACTICE
    const UserRepo = new UserRepository();
    UserRepo.find({}, (err, users)).then((users) => {
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
    
    
}
const userController = {
    createUser,
    fetchUser,
    updateUser,
    deleteUser,
    listUsers
}


module.exports = userController;