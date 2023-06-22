const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}))


const exchangeController = require('../controllers/exchangeController');

router.post('/exchange-rate', exchangeController.exchangeList)

router.post('/exchange-icon', exchangeController.exchangeIcon)

router.get('/getExchange-rate', exchangeController.getExchangeRate)

router.get('/getExchange-icon', exchangeController.getExchangeIcon)


module.exports = router
