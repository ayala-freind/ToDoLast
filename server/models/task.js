const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    taskId: String,
    taskTypeId: String,
    taskName: String,
    taskDescription: String,
    UserTaskId:String
    
})

module.exports = mongoose.model('task', TaskSchema)
