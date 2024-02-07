import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import AddTask from "./addTask"
import Task from "./task"
import { Redirect, Link, useNavigate } from 'react-router-dom'
import { getTaskList } from "../redux/action"
import { getTaskTypeList } from "../redux/action"
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';

function mapStateToProps(state) {
  return {
    tasksList: state.tasks.tasksList,
    activeUser: state.users.activeUser,
    taskType:state.tasks.taskType
  }
}
export default connect(mapStateToProps)(function TaskList2(props) {
  const { tasksList,taskType, UserTaskId, activeUser, dispatch } = props
  const [currentTask, setCurrentTask] = useState(null)
  const newNavigate = useNavigate()

  function addnewtask() {
    newNavigate('/addTask')
  }

  const thisUserTasks = tasksList.filter(x => x.UserTaskId === activeUser);
  const getAllTaskType=async ()=>{
  
    try {
      const response = await axios.get('http://localhost:5000/taskType/')
  
      if (response.status == 200) {
  
        dispatch(getTaskTypeList(response.data))
      }
    }
    catch (error) {
      console.error(error)
    }
  }
  const getAllTasks = async () => {

    try {
      const response = await axios.get('http://localhost:5000/task/')

      if (response.status == 200) {

        dispatch(getTaskList(response.data))
      }
    }
    catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {

    getAllTasks()
    getAllTaskType()

  }, [])


  return (
    <>
        <h2 style={{color:"black",fontStyle:"italic"}}  variant="outlined" startIcon={<DescriptionIcon/>}>(◔◡◔)מה שאי אפשר לדחות למחר תדחי למחרתיים</h2>
      <ul>
        {thisUserTasks.map(x => (<li><Button style={{ color: 'black',fontWeight:'bolder',fontsize: 'large',fontStyle:"italic" }} 
        startIcon={<DescriptionIcon style={{ fontSize:'large' }} />}>{x.taskName}</Button>
          <Button variant="text" onClick={() => setCurrentTask(x.taskId)} style={{ color: "gray" }}  > לפרטי המשימה</Button>
          {currentTask === x.taskId && <Task thisTask={x}></Task>}</li>))}
      </ul>
      <br></br>
      <Button onClick={addnewtask} style={{ color: "gray", borderColor: "gray" ,marginRight: 10}} variant="outlined" startIcon={<AddIcon />}>
      להוספת משימה
      </Button>
  
    </>
  )
})
