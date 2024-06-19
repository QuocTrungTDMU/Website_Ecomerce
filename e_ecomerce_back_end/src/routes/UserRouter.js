const express = require("express");
const router = express.Router();
const useController = require('../controller/UserController')

router.post('/', useController.createUser ) 

module.exports = router