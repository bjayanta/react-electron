const express = require('express');
const contactController = require('../controllers/contact.controller');

const router = express.Router();

router.get('/', contactController.index);

module.exports = router;