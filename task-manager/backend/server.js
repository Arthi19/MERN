const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri=process.env.MONGO_URI;
mongoose.connect(uri);

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB database connection established successfully');
})

const usersRouter = require('./routes/user.js');
const tasksRouter = require('./routes/task.js');

app.use('/users',usersRouter);
app.use('/tasks',tasksRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
