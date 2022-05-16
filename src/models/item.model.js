const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    id:{ type: String, required: true, trim: true},
    producer:{ type: String, required: true, trim: true},
    itemName:{ type: String, required: true, trim: true},
    quantity:{ type: Number, required: true, trim: true},
    price:{ type: Number, required: true, trim: true},

})

const Item = mongoose.model('items', ItemSchema);

module.exports = Item;