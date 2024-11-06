const express = require('express')
const router = express.Router();

const {protect} = require('../middleware/auth')

const { saveinfo } = require('../controllers/PDA')

router.post('/register',saveinfo);

module.exports=router;