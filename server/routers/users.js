const express = require("express")
const router = express.Router()
// const User = require("../models/users");
const {addUser,getAllUsers,updateUser,removeUser,getUserByName} = require("../controllers/users");

router.post('/', addUser);
router.delete('/:userId', removeUser);
router.get('/', getAllUsers);
// router.put('/:userId', updateUser);
// router.get('/:name', getUserByName);



module.exports = router