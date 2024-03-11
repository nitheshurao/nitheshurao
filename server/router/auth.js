import { Router } from 'express';
const router = Router();
import authMiddleware from '../middleware/auth.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { generateToken } from '../config/auth.js';
// import { find } from '../models/ToDo';

router.get('/', authMiddleware, async (req, res) => {
    try {
        const todos = await find({ userId: req.userId });
        res.json(todos);
        res.json("auth")
    } catch (err) {
        res.status(500).send(err);
    }
});
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).send({ user });
    } catch (e) {
        res.status(400).send(e);
    }
});


router.post('/login', async (req, res) => {

    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        console.log("user, token } toekn", user);
        if (!user) {
            console.log("---------");
            return res.status(401).send({ error: 'Invalid login credentials' });
        }
        console.log("user, token } toekn",);
        const token = generateToken(user._id.toString());

        res.send({ user, token });
    } catch (e) {
        res.status(500).send();
    }
});

export default router;
