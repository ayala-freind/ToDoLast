const express=require('express')
const router=express.Router();

const{addTask,getAllTasks,updateTask,deleteTask,getTaskById}=require('../controllers/task')

router.post('/',addTask)
router.delete('/:taskId', deleteTask);
router.get('/', getAllTasks);
router.put('/:taskId', updateTask);
// router.get('/:id', getTaskById);

module.exports=router
