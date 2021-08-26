const express = require('express');
const router = express.Router();
const Championship = require('../controller/Championship');

router.post('/championship-create', Championship.create);

module.exports = router;