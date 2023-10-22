const express = require("express");
const UserController = require("../controllers/user.controller");
const tblUser = require("../models/tbluser");

const userController = new UserController();
const user = express.Router();

user.get("/admin/add", userController.indexRegister);
// user.get("/login", loginPageMiddleware, userController.indexLogin )
user.get("/admin", userController.index, async(req, res) => {
    try {
        const user = await tblUser.findAll();
        res.status(200).json({
            status : "success",
            data : user,
            message: "User berhasil Ditemukan!"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: req.body,
            message: err.message,
            stack: err
        })
    }
});


module.exports = user