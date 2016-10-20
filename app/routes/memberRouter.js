const express = require('express');
const MemberController = require('../controllers/MemberController');

const router = express.Router();

router.get('/', MemberController.get);
router.post('/', MemberController.create);

module.exports = router;
