import React, { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import { addUser, updateActiveUser } from "../redux/action";
import TaskList from "./taskList";
import { Redirect, Link, useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import axios from "axios";

function mapStateToProps(state) {
    return { usersList: state.users.usersList }
}

export default connect(mapStateToProps)(function Register(props) {
    const { usersList, dispatch } = props;
    const idRef = useRef('');
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const newNavigate = useNavigate()
    useEffect(function () {

    }, [usersList])

    const register = async () => {
        try {
            const response = await axios.post('http://localhost:5000/users/', {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                id: idRef.current.value,
                email: emailRef.current.value,
            
            });

            dispatch(addUser({ id: idRef.current.value, firstName: firstNameRef.current.value, lastName: lastNameRef.current.value, email: emailRef.current.value },))
            dispatch(updateActiveUser(idRef.current.value))
            newNavigate('/taskList')
        } catch (ex) {
            throw new Error(ex)
        };
    }
    return (
        <>
            <AccountCircleRoundedIcon style={{ fontSize: 50, marginTop: 50, color: "gray" }}></AccountCircleRoundedIcon>
            <br></br>
            <p style={{ fontSize: 30, color: "gray", marginTop: 10 }}>Sign up</p>
            <br></br>
            <TextField inputRef={firstNameRef} id="standard-basic" label="first name" variant="standard" />
            <br></br>
            <br></br>
            <TextField inputRef={lastNameRef} id="standard-basic" label="last name" variant="standard" />
            <br></br>
            <br></br>
            <TextField inputRef={idRef} id="standard-basic" label="id" variant="standard" />
            <br></br>
            <br></br>
            <TextField inputRef={emailRef} id="standard-basic" label="email" variant="standard" />
            <br></br>
            <br></br>
            <Button style={{ color: "gray", borderColor: "gray" }} variant="outlined" onClick={register}>sign up</Button>
        </>)

})