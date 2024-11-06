const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/auth')

// import controllers
const {  currentUser } = require('../controllers/User');

router.get('/currentuser', protect, currentUser);

module.exports = router;
