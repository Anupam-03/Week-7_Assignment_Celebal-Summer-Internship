const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require("../models/user");

const router = express.Router();

router.get('/', authorizationToken, async(req, res) => {
    const user = await User.find({username : res.user});
    if(user == "") {
        return res.status(400).json("User logged out");
    }
    res.json(user);
});

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User ({
        username,
        password: hashedPassword
    });
    
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/login', async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username: username});
    
    if(!user) {
        res.status(400).json("User not found");
        return;
    }

    try {
        const isValid = await bcrypt.compare(password, user.password);
        if(isValid) {
            const accessToken = jwt.sign(user.username, process.env.ACCESS_SECRET_TOKEN);
            res.json({Token : accessToken});
        }
        else {
            res.status(401).json("Invalid Username or Password");
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.delete('/logout', authorizationToken, async(req, res) => {
    try {
        await User.deleteOne({username: res.user});
        res.status(204).json("Token Deleted");
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})


function authorizationToken (req, res, next) {
    const authHeader = req.headers['authorization'];
    const Token = authHeader && authHeader.split(' ')[1];

    if(Token == null) return res.status(401).send("Token not found");

    jwt.verify(Token, process.env.ACCESS_SECRET_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403);

        res.user = user;
        next();
    });

}

module.exports = router;