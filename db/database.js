const mogoose = require('mongoose');
const db =   "mongodb://localhost:27017/exchange_coin"

mogoose.connect(db , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected Successfully ");
})
.catch((error) => {
    console.log(error);
})
