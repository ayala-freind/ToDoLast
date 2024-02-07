import { connect } from "react-redux";
import { useRef, useEffect, useState } from "react";
import Register from "./register";
import { updateActiveUser, removeUser } from "../redux/action";
import users from "../redux/reducers/users";
import TaskList from "./taskList";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios";
import { getAllUsersList } from "../redux/action";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CheckIcon from '@mui/icons-material/Check';

function mapStateToProps(state) {
    return {
        usersList: state.users.usersList
    }
}

export default connect(mapStateToProps)(function Login(props) {
    const { usersList, dispatch } = props
    let idRef = useRef('')
    let firstNameRef = useRef('')
    const newNavigate = useNavigate()
    const remove = async () => {
        dispatch(removeUser(idRef.current.value))
        try {
            let userId = idRef.current.value
            const response = await axios.delete(`http://localhost:5000/users/${idRef}`)
            if (response.status == 200) {
            }
        }
        catch (error) {
            console.error(error)
        }

    }

    const getAllUsers = async () => {

        try {
            const response = await axios.get('http://localhost:5000/users/')
            if (response.status == 200) {

                dispatch(getAllUsersList(response.data))
            }
        }
        catch (error) {

            console.error(error)
        }
    }
    useEffect(() => {
        getAllUsers()
    }, [])

    const login = (() => {
        const y = usersList.filter(x => x.id == idRef.current.value && x.firstName == firstNameRef.current.value)
        if (y != 0) {
            alert(`שלום ${firstNameRef.current.value}`);
            dispatch(updateActiveUser(idRef.current.value))
            newNavigate('/taskList')
        }
        else {
            newNavigate('/register')
        }
    })
    return (
        <>

            <br></br>
            <AccountCircleRoundedIcon style={{ fontSize: 50, marginTop: 30, color: "gray" }}></AccountCircleRoundedIcon>
            <br></br>
            <p style={{ fontSize: 30, color: "gray", marginTop: 10 }}>Sign in</p>
            <br></br>
            <TextField inputRef={firstNameRef} style={{ marginTop: InputLabel }} id="standard-basic" label="first name" variant="standard" />
            <br></br>
            <br></br>
            <TextField inputRef={idRef} id="standard-basic" label="id" variant="standard" />
            <br></br>
            <br></br>
            <br></br>
            <Button style={{ color: "gray", borderColor: "gray", marginRight: 10 }} variant="outlined" startIcon={<CheckIcon />} onClick={login}>sign in</Button>
            <Button style={{ color: "gray", borderColor: "gray" }} variant="outlined" onClick={remove} startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <br></br>
            <br></br>
            <Link variant="body2" to="/register" style={{ color: "gray" }}>
                {"Don't have an account? Sign Up"}
            </Link>

        </>



    )
})
