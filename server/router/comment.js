import { Router } from 'express';
const router = Router();
import authMiddleware from '../middleware/auth.js';
import ToDo from '../models/ToDo.js';
import Comment from '../models/Comment.js';

router.get('/:todoId', async (req, res) => {
    console.log("to-------------------------");

    const ToDo1 = await Comment.find({ todoId: req.params.todoId });
    res.send(ToDo1)
})

// Create a comment
router.post('/:todoId', authMiddleware, async (req, res) => {

    const { content, author } = req.body;
    const ToDo1 = await ToDo.findById(req.params.todoId);

    console.log("to-------------------------", req.params.todoId);
    const comment = new Comment({ content, author, todoId: req.params.todoId });
    await comment.save();
    await ToDo.findByIdAndUpdate(req.params.todoId, { $push: { comments: comment._id } });
    const ToDo2 = await ToDo.findById(req.params.todoId).populate('comments');
    res.send(ToDo2);
});


// Reply to a comment
router.post('/:todoId/:commentId', async (req, res) => {
    const { content, author } = req.body;
    const ToDo1 = await Comment.findById(req.params.commentId);

    const comment = new Comment({ content, author, todoId: req.params.todoId });

    const comment1 = await comment.save();
    console.log("___!", comment1, comment)
    const ress = await Comment.findByIdAndUpdate(ToDo1._id, { $push: { reply: comment1._id } });
    //    const ToDo2= await comment.save();
    // const ToDo2 = await cmtid;//reconstruc 
    res.send(ress);
    // res.status(201).send(comment);
});
// Delete a comment
router.delete('/:todoId/:commentId', async (req, res) => {
    const ToDo = await ToDo.findById(req.params.todoId);
    await Comment.findByIdAndDelete(req.params.commentId);
    ToDo.comments = ToDo.comments.filter(comment => comment._id.toString() !== req.params.commentId);
    await ToDo.save();
    res.status(200).send({ message: 'Comment deleted' });
});

// update


export default router;