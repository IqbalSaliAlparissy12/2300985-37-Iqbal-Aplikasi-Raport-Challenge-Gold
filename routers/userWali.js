const express = require("express");
const wali = express.Router();

const WaliController = require("../controllers/user.Wali.controller");

const waliController = new WaliController();
wali.get("/wali/add", waliController.indexAdd);
// user.get("/login", loginPageMiddleware, userController.indexLogin )
wali.get("/wali", waliController.index, async(req, res) => {
    try {
        const user = await tblAllUser.findAll();
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


wali.get("/edit", waliController.indexEdit);


module.exports = wali;