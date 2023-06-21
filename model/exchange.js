const mogoose = require('mongoose');

const exchange = new mogoose.Schema({

});


const ExchangeData = mogoose.model("EXCHANGDATA", exchange);

module.exports = ExchangeData;