const express=require('express')

const router=express.Router();

const{addTaskType,getAllTaskType}=require('../controllers/taskType')

router.post('/',addTaskType)
router.get('/', getAllTaskType);

module.exports=router
