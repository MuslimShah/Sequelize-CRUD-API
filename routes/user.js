const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();
//GET ==> ALL USERS
router.get('/users', userController.getUsers);
//GET ==> SINGLE USER
router.get('/user/:id', userController.getUser);
//POST ==>USER DATA
router.post('/add', userController.postUser)
module.exports = router;