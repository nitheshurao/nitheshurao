// models/User.js
import { Schema, model } from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import pkg from 'bcryptjs';
const { hashSync } = pkg;
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();
    this.password = hashSync(this.password, 10);
    next();
});

UserSchema.methods.comparePassword = function (candidatePassword) {
    return compareSync(candidatePassword, this.password);
};

export default model('User', UserSchema);