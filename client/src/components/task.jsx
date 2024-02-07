import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { deleteTask } from "../redux/action";
import { Redirect } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios'
import Image from '../components/image'
import image1 from '../images/1.JPG'
import image2 from '../images/2.JPG'
import image3 from '../images/3.JPG'
import image4 from '../images/4.JPG'
import image5 from '../images/5.JPG'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateIcon from '@mui/icons-material/Create';
import DescriptionIcon from '@mui/icons-material/Description';

function mapStateToProps(state) {
  return {
    taskType: state.tasks.taskType,
    tasksList: state.tasks.tasksList,
    activeUser: state.users.activeUser,
    usersList: state.users.usersList
  }
}

export default connect(mapStateToProps)(function Task(props) {

  const { thisTask, tasksList, taskType, dispatch, activeUser, usersList } = props;
  const index = taskType.findIndex(x => x.taskTypeName === thisTask.taskTypeId)
  const [flagImage, setFlagImage] = useState(false)
  const newNavigate = useNavigate()
  const activeName = usersList.findIndex(x => x.id === activeUser)
  const updateTask = (() => {
    newNavigate('/taskList')
  })

  const deleteNewTask = async () => {
    dispatch(deleteTask(thisTask))
  }
  return (
    <>
      <div style={{ fontSize: 20, color: "gray", fontStyle: "italic" }} >  המשימה: {thisTask.taskName}</div>
      <div style={{ fontSize: 20, color: "gray", fontStyle: "italic" }}  >תיאור: {thisTask.taskDescription}</div>
      <div style={{ fontSize: 20, color: "gray", fontStyle: "italic" }} > {usersList[activeName].firstName}:מטפל</div>
      <div style={{ fontSize: 20, color: "gray", fontStyle: "italic" }} > סוג משימה: {taskType[index].taskTypeName}</div>
      <br></br>
      <Button style={{ color: "gray", borderColor: "gray", marginRight: 10 }} variant="outlined" onClick={deleteNewTask} startIcon={<DeleteIcon />}>
        מחיקת משימה
      </Button>

      <Button onClick={() => setFlagImage(!flagImage)} style={{ color: "gray", borderColor: "gray", marginRight: 10 }} variant="outlined" startIcon={<DescriptionIcon />}>
        לצפיה בתמונות
      </Button>

      <Button style={{ color: "gray", borderColor: "gray" }} variant="outlined" onClick={updateTask} startIcon={<CreateIcon />}>
        לעריכת המשימה
      </Button>

      <br></br>
      {flagImage && <Image>
        <img src={image1} width={400}></img>
        <img src={image2} width={400}></img>
        <img src={image3} width={400}></img>
        <img src={image4} width={400}></img>
        <img src={image5} width={400}></img>
      </Image>}
    </>

  )
})