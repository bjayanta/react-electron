const express = require('express');
const partyController = require('../controllers/party.controller');

const router = express.Router();

router.get('/', partyController.index);

module.exports = router;