import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux"
import { addTask } from "../redux/action";
import { Redirect, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Checkbox, FormControl, FormControlLabel, FormGroup, MenuItem, Select } from "@mui/material";


function mapStateToProps(state) {
    return {
        taskType: state.tasks.taskType,
        tasksList: state.tasks.tasksList,
        activeUser: state.users.activeUser
    }
}

export default connect(mapStateToProps)(function AddTask(props) {
    const [TaskType, setTaskType] = useState('')
    const { taskType, tasksList, setFlag, dispatch, UserTaskId, activeUser } = props;
    const [value, setValue] = React.useState();
    let taskIdRef = useRef('');
    let taskTypeIdRef = useRef('');
    let taskNameRef = useRef('');
    let taskDescriptionRef = useRef('');
    let checkBoxRef = useRef(false);
    const newNavigate = useNavigate()

    const handleChange = (e) => {
        setTaskType(e.target.value)
    }

    const addNewTask = async () => {
        let indexSelectOption = taskType.find(x => x.taskTypeName == taskTypeIdRef.current.value)?.taskTypeId
        try {
            const response = await axios.post('http://localhost:5000/task/', {
                taskId: taskIdRef.current.value,
                taskTypeId: taskTypeIdRef.current.value,
                taskName: taskNameRef.current.value,
                taskDescription: taskDescriptionRef.current.value,
                UserTaskId: activeUser,
                checkBox: checkBoxRef.target
            });

        } catch (ex) {
            throw new Error(ex)
        };
        dispatch(addTask({ taskId: taskIdRef.current.value, taskTypeId: indexSelectOption, taskName: taskNameRef.current.value, taskDescription: taskDescriptionRef.current.value, UserTaskId: activeUser, checkBox: checkBoxRef.target }))
        newNavigate('/taskList')
    }
    return (
        <>
            <br />
            <h2 style={{ color: "gray", fontStyle: "italic" }}>!?אולי תעשי זאת עכשיו</h2>
            <br></br>
            <br></br>
            <TextField
                id="standard-number"
                label="מספר משימה"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
                inputRef={taskIdRef}

            />

            <br></br>
            <br></br>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">סוג משימה</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={TaskType}
                    onChange={handleChange}
                    label="סוג משימה"
                    inputRef={taskTypeIdRef}
                    style={{ width: 180 }}
                >
                    {taskType.map(x => <MenuItem key={x.taskTypeId} value={x.taskTypeName}>{x.taskTypeName}</MenuItem>)}
                </Select>
            </FormControl>
            <br></br>
            <br></br>
            <TextField inputRef={taskNameRef} id="standard-basic" label="שם משימה" variant="standard" />
            <br />
            <br></br>
            <TextField inputRef={taskDescriptionRef} id="standard-basic" label="תיאור משימה" variant="standard" />
            <br></br>
            <br>
            </br>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="המשימה בוצעה" style={{ marginLeft: 670, color: "gray" }} inputRef={checkBoxRef} />
            </FormGroup>
            <br></br>
            <br></br>
            <Button onClick={addNewTask} style={{ color: "gray", borderColor: "gray" }} variant="outlined" startIcon={<AddIcon />}>
                הוספת משימה
            </Button>
        </>
    )
})

