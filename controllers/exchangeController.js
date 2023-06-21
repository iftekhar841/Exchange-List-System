const axios = require('axios')
const ExchangeData = require('../model/exchange')
const exchangeList = async (req, res, next) => {

    try {
        const options = {
            method: "GET",
            headers: {
                "X-CoinAPI-Key": "FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9",
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }

        const response = await axios.get('https://rest.coinapi.io/v1/exchanges', options);
        // console.log("🚀 ~ file: exchangeController.js:16 ~ exchangeList ~ response:", response);
        const data = response.data;
        console.log("🚀 ~ file: exchangeController.js:17 ~ exchangeList ~ data:", data);

        const exchange_data = await ExchangeData(data);
        console.log("🚀 ~ file: exchangeController.js:21 ~ exchangeList ~ exchange_data:", exchange_data);

         const totalExchangeData = await exchange_data.save();

         res.status(201).json({messag: "Exchange data save successfully ", data: totalExchangeData})

        next();
    }
    catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
}

const exchangeIcon = async (req, res) => {

    try {

    } catch (error) {
        console.log(error.message);
    }

}

module.exports = {
    exchangeList,
    exchangeIcon
}


