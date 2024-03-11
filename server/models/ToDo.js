// models/ToDo.js
import { Schema, model } from 'mongoose';
import mongoose from 'mongoose'

const ToDoSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

export default model('ToDo', ToDoSchema);