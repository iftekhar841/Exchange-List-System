const axios = require('axios')
const ExchangeModel = require('../model/exchange')
const iconModel = require('../model/icon')



const exchangeList = async (req, res, next) => {

    try {
        const options = {
            method: "POST",
            headers: {
                "X-CoinAPI-Key": "FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9",
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }

        const response = await axios.get('https://rest.coinapi.io/v1/exchanges', options);
       
        const data = response.data;

        data.forEach(async element => {
            await ExchangeModel.create(element)
        });

         return res.status(200).json({Msg:"data saved", data: data})
    }
    catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
}

const exchangeIcon = async (req, res) => {

    try {
        const options = {
            method: "POST",
            headers: {
                "X-CoinAPI-Key": "FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9",
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }

        const response = await axios.get('https://rest.coinapi.io/v1/exchanges/icons/32', options);
       
        const data = response.data;

        data.forEach(async element => {
            await iconModel.create(element)
        });
    
        return res.status(200).json({Msg:"data saved", data: data})
    }
    catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
}

const getExchangeRate = async(req, res) => {

    try {

       const rateData =  await ExchangeModel.find();

       if(rateData) {
            res.status(200).json({success : true, Msg:"Exchange rate data fetch successfully",data: rateData});
       }
       return res.status(200).json({success : false, Msg:"No data found",data: rateData});
        
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
}

const getExchangeIcon = async(req, res) => {
    try {

        const iconData =  await iconModel.find();
 
        if(iconData) {
             res.status(200).json({success : true, Msg:"Exchange icon data fetch successfully",data: iconData});
        }
        return res.status(200).json({success : false, Msg:"No data found",data: iconData});
         
     } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');    
     }
}

module.exports = {
    exchangeList,
    exchangeIcon,
    getExchangeRate,
    getExchangeIcon
}
