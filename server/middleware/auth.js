// middleware/auth.js

import { verifyToken } from "../config/auth.js";

const authMiddleware = (req, res, next) => {

    const token = req.headers['x-access-token'];
    console.log("++auth");
    if (!token) return res.status(403).send({ message: 'No token provided.' });

    const decoded = verifyToken(token);
    if (!decoded) return res.status(401).send({ message: 'Failed to authenticate token.' });

    req.userId = decoded.id;
    next();
};

export default authMiddleware;