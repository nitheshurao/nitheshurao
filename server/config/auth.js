import jwt from 'jsonwebtoken'
const secret = process.env.JWT_SECRET || 'your_secret_key';

const generateToken = (userId) => {
    console.log("---+++", userId);
    return jwt.sign({ id: userId }, secret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        console.log("verfy");
        return jwt.verify(token, secret);
    } catch (err) {
        return null;
    }
};

export { generateToken, verifyToken };