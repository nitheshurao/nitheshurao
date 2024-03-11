import mongoose, { Schema, model } from 'mongoose';

const CommentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    author: String,
    todoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Todo' },
    reply: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },

    // index:

});

export default model('Comment', CommentSchema);