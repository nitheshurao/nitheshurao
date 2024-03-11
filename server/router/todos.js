import { Router } from 'express';
const router = Router();
import authMiddleware from '../middleware/auth.js';
import ToDo from '../models/ToDo.js';
import Comment from '../models/Comment.js';
async function populateReplies(comment) {
    if (comment.replyTo) {
        const reply = await ToDo.findById(comment.replyTo).populate('replyTo');
        comment.replyTo = reply;
        await populateReplies(reply);
    }
}
router.get('/', authMiddleware, async (req, res) => {
    try {
        console.log("========", req.userId);
        const todos = await Comment.find()


        const smt = todos
        console.log("++++++", smt);
        const res1 = await Comment.find()
        // const replyd= Comment.find({replyTo:_id})
        // const ress=

        // // Iterate over each comment and populate its replies
        // for (const todos of todos) {
        //     console.log("__+_", replyTo);
        //     // await populateReplies(replyTo);
        // }

        // ToDo.aggregate([])
        res.json(todos);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Add more routes as needed
router.post('/create', authMiddleware, async (req, res) => {
    const todo = new ToDo({
        userId: req.userId,
        task: req.body.task,
    });
    try {
        const savedTodo = await todo.save();
        res.send(savedTodo);
    } catch (err) {
        res.status(500).send(err);
    }
});
// Get all to-dos for a specific user
router.get('/:userId', authMiddleware, async (req, res) => {
    try {
        const todos = await ToDo.find({ userId: req.userId });
        res.send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
});
// update
router.patch('/:id', async (req, res) => {
    try {
        const updatedTodo = await ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(updatedTodo);
    } catch (error) {
        res.status(400).send(error);
    }
});
// delete
router.delete('/:id', async (req, res) => {
    try {
        await ToDo.findByIdAndDelete(req.params.id);
        res.send('Todo deleted');
    } catch (error) {
        res.status(500).send(error);
    }
});
export default router;