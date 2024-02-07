const TaskType=require('../models/taskType')

exports.getAllTaskType = async (req, res) => {
    try {
      const taskType = await TaskType.find();
      console.log(taskType);
      console.log("tasks");
      res.json(taskType);
    } catch (error) {
      console.error('Failed to get tasks:', error);
      res.status(500).json({ message: 'Failed to get tasks' });
    }
  };

  exports.addTaskType = async(req,res)=>{
    console.log(req.body);
    const taskType = await TaskType.create(req.body);
    console.log(taskType);
    res.json(taskType)  
}
