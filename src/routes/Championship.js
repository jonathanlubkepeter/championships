const express = require('express');
const router = express.Router();
const Championship = require('../controller/Championship');

router.post('/championship-create', Championship.create);
router.put('/:id', championshipController.update);

module.exports = router;