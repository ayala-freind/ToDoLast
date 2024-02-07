const mongoose = require('mongoose')

const TaskTypeSchema = new mongoose.Schema({
   taskTypeId:String,
   taskTypeName:String 
})

module.exports = mongoose.model('taskType', TaskTypeSchema)