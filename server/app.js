require("dotenv").config()
const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const taskRouter =require('./routers/task')
const usersRouter =require('./routers/users')
const taskTypeRouter =require('./routers/taskType')

const bodyParser = require('body-parser');


const app=express();
app.use(cors())
app.use(bodyParser.json());
app.use('/task', taskRouter);
app.use('/users', usersRouter);
app.use('/taskType',taskTypeRouter);


//  const CONECTION_URL='mongodb+srv://0527688937a:SE6Z41lOGAKxI51n@cluster0.rwu3gxz.mongodb.net/?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));

app.use(express.json())


