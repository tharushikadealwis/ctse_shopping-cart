const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ItemAPI = require('./src/api/item.api');



dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8087;
const MONGODB_URI = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URI, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Synced');
});

app.route('/').get((req, res) => {
    res.send('Shpping Platform - CTSE');
});

app.use('/item', ItemAPI());


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});