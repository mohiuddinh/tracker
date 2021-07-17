const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    });
});

router.post("/register", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

// fix this: first query for the favorited game and save that as a array, 
// then add the new game in
router.post("/addToFavorite", auth, (req, res) => {
    newFavorites = []
    User.find({ _id: req.body._id })
    .exec((err, res) => {
        if (err) res.status(400).json({ success: false, err });
        newFavorites = res.favorites
    })
    
    newFavorites.push(req.body.gameTitle); 

    User.findOneAndUpdate({ _id: req.body._id }, 
        { $set: { favorites: newFavorites} })
    .exec((err, res) => {
            if (err) res.status(400).json({ success: false, err });
            res.status(200).json({ success: true, data: result });
    })
});

router.post("/removeFromFavorite", auth, (req, res) => {
    newFavorites = [];
    User.find({ _id: req.body._id }).exec((err, res) => {
        if (err) res.status(400).json({ success: false, err });
        newFavorites = res.favorites;
    });

    const index = newFavorites.indexOf(req.body.gameTitle); 
    if (index > -1) {
        newFavorites.splice(index, 1); 
    }

    User.findOneAndUpdate(
        { _id: req.body._id },
        { $set: { favorites: newFavorites } }
    ).exec((err, res) => {
        if (err) res.status(400).json({ success: false, err });
        res.status(200).json({ success: true, data: result });
    });
});

module.exports = router;
