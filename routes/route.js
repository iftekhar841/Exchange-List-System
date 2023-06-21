const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}))






const exchangeController = require('../controllers/exchangeController');

router.get('/exchange-rate', exchangeController.exchangeList)

router.get('/exchange-icon', exchangeController.exchangeIcon)

module.exports = router
