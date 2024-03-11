// app.js
import 'dotenv/config'
import express, { json } from 'express';
import { connect } from 'mongoose';
import authRoutes from './router/auth.js';
import todoRoutes from './router/todos.js';
import commentRouters from './router/comment.js'
// import 

const app = express();
app.use(json());

connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/comments', commentRouters)
app.get('/', (req, res) => {
    // Status: 200 (OK)
    res.send("hiii");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));