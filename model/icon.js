const mongoose = require('mongoose');

const iconSchema = new mongoose.Schema({

    exchange_id: {
        type: String,
    },
    url : {
        type: String
    }
})

const iconModel = mongoose.model("Icon", iconSchema);

module.exports = iconModel;