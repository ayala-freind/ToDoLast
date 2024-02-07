const Task = require('../models/task')

exports.addTask = async(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    const task = await Task.create(req.body);
    console.log(task);
    res.json(task)  
}

exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      console.log(tasks);
      console.log("tasks");
      res.json(tasks);
    } catch (error) {
      console.error('Failed to get tasks:', error);
      res.status(500).json({ message: 'Failed to get tasks' });
    }
  };


  exports.updateTask = async (req, res) => {
    const { taskId } = req.params;
    const { taskTypeId, taskName,taskDescription,rapist } = req.body;
  
    try {
      const updatedTask = await Task.findOneAndUpdate(
        { taskId: taskId }, // עדכון לפי שדה userId
        {  taskTypeId, taskName,taskDescription,rapist },
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      res.json(updatedTask);
    } catch (error) {
      console.error('Failed to update task:', error);
      res.status(500).json({ message: 'Failed to update task' });
    }
  };
  

  exports.deleteTask = async (req, res) => {
    const  taskId  = req.params.taskId;
  console.log(taskId);
    try {
      const deletedTask = await Task.findOneAndDelete({ taskId: taskId });
      if (!deletedTask) {
        return res.status(404).json({ message: 'task not found' });
      }
      res.json({ message: 'task deleted successfully' });
    } catch (error) {
      console.error('Failed to delete task:', error);
      res.status(500).json({ message: 'Failed to delete task' });
    }
  };

 exports.getTaskById = async (req, res) => {
    const { taskId } = req.params;
     console.log(taskId)
  
    try {
      const task = await Task.findOne({ taskId });
      if (!task) {
        return res.status(404).json({ message: 'task not found' });
      }
      res.json(task);
    } catch (error) {
      console.error('Failed to get task:', error);
      res.status(500).json({ message: 'Failed to get task' });
    }
  };